import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  // interface Session {}

  interface User {
    role: string;
  }

  interface Session {
    user: {
      role: string;
    };
  }
}
