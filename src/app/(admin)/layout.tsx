import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ProtectedRoutes>
    <div className="flex ">
      <Sidebar />
      <main className="max-w-[1250px]  mx-auto p-6 flex-1">{children}</main>
    </div>
    // </ProtectedRoutes>
  );
}
