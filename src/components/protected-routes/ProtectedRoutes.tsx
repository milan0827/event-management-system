import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

const ProtectedRoutes = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  const isAuthenticated = !!session?.user;

  if (!isAuthenticated) {
    return redirect("/login");
  }

  console.log("isAUTH", isAuthenticated, session);

  return isAuthenticated && children;
};

export default ProtectedRoutes;
