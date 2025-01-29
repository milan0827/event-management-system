import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export default async function middleware(req: NextRequest) {
  const session = await auth();

  const isAuthenticated = !!session?.user;
  const { pathname } = req.nextUrl;

  if (isAuthenticated && (pathname === "/login" || pathname === "/signup"))
    return NextResponse.redirect(new URL("/", req.url));

  const adminRoutes = [
    "/create-events",
    "/manage-events",
    "/update-events",
    "/events/:eventId",
    "/manage-users",
  ];

  if (!isAuthenticated)
    return NextResponse.redirect(new URL("/login", req.url));

  if (
    session?.user.role === "ADMIN" &&
    adminRoutes.includes(req.nextUrl.pathname)
  )
    return NextResponse.next();

  return NextResponse.redirect(new URL("not-found", req.url));
}

export const config = {
  matcher: [
    "/manage-events",
    "/create-events",
    "/update-events",
    "/events/:eventId",
    "/manage-users",
  ],
};
