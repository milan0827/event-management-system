"use server";

import { parseFormData } from "@/helpers";
import { signIn, signOut } from "@/lib/auth";
import bcrypt from "bcryptjs";
import { prisma } from "../../../prisma_init";
import { SignupSchema } from "./schema/signupSchema";
import { LoginSchema } from "./schema/loginSchema";

export interface SignupErrors {
  errors?: {
    full_name?: string[];
    email?: string[];
    password?: string[];
  };
  status: boolean;
  message?: string;
}

export interface LoginErrors {
  errors?: {
    email?: string[];
    password?: string[];
  };
  status: boolean;
  message?: string;
}

export async function logout() {
  await signOut({
    redirectTo: "/",
  });
}

export async function signup(formData: FormData): Promise<SignupErrors> {
  const formObj = parseFormData(formData);

  const results = SignupSchema.safeParse(formObj);
  const errors = results.error?.flatten().fieldErrors;

  if (!results.success) {
    return { status: false, errors };
  }

  // Check if user exists
  const userExists = await prisma.user.findUnique({
    where: {
      email: formObj.email as string,
    },
  });

  if (userExists) return { status: false, message: "User already exists" };

  const hashedPassword = await bcrypt.hash(formObj.password as string, 10);

  await prisma.user.create({
    data: {
      email: formObj.email as string,
      full_name: formObj.full_name as string,
      password: hashedPassword,
    },
  });

  return { status: true, message: "Successfully signed up" };
}

export async function login(formData: FormData): Promise<LoginErrors> {
  const formObj = parseFormData(formData);
  const results = LoginSchema.safeParse(formObj);

  if (!results.success)
    return { status: false, errors: results.error?.flatten().fieldErrors };

  await signIn("credentials", {
    ...formObj,
    redirect: false,
    // redirectTo: "/",
  });

  return { status: true, message: "Login successfully" };
}
