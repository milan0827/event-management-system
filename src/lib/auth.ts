import bcrypt from "bcryptjs";
import NextAuth, { AuthError } from "next-auth";
import credentials from "next-auth/providers/credentials";
import { prisma } from "../../prisma_init";

class CustomError extends AuthError {
  constructor(message: string) {
    super();
    this.message = message;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (!credentials.email || !credentials.password)
          throw new CustomError("Please provide a valid credentials");

        let user = null;

        try {
          user = await prisma.user.findUnique({
            where: {
              email: credentials.email as string,
            },
          });

          if (!user) throw new Error("User not found");

          const isPasswordMatched = await bcrypt.compare(
            credentials.password as string,
            user.password
          );

          if (!isPasswordMatched) throw new CustomError("Invalid credentials");

          return { ...user, id: user.id.toString(), role: user.role };
        } catch (error) {
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },

    async session({ session, token }) {
      session.user = {
        ...session.user,
        id: token.sub as string,
        role: token.role as string,
      };

      return session;
    },

    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
});
