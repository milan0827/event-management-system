"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarList = ({
  list,
}: {
  list: { id: number; link: string; label: string };
}) => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  return (
    <li key={list.id}>
      <Link
        href={`/${list.link}`}
        className={`text-white py-2 px-8  w-full block rounded-md hover:bg-blue-600 hover:text-white transition-all duration-200 ${
          isActive(`/${list.link}`) ? "bg-blue-600" : "bg-gray-500"
        }`}
      >
        {" "}
        {list.label}
      </Link>
    </li>
  );
};

export default SidebarList;
