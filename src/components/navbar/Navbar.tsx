"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAVBAR_LIST = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
  },
  {
    id: 3,
    name: "All Events",
    link: "/all-events",
  },
  {
    id: 4,
    name: "Offers",
    link: "offers",
  },
];

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      if (scrollPos > 100) setIsDark(true);
      else setIsDark(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full px-6 sticky top-0 transition-all duration-200 py-2  ${
        isDark
          ? "bg-gray-800/90 backdrop-blur-sm shadow-[0_5px_5px_rgba(0,0,0,0.1)]"
          : "bg-transparent"
      }  z-20 `}
    >
      <nav className="flex w-full items-center justify-between">
        <div className="text-white">Logo</div>
        <ul
          className={`text-white flex items-center justify-center gap-4 ${
            isDark ? "[&>li>button>svg]:fill-white" : ""
          }`}
        >
          {NAVBAR_LIST.map((list) => (
            <li key={list.id}>
              <Link
                href={`${list.link}`}
                className={`hover:after:w-full after:w-0 after:h-[1.4px]  relative after:absolute after:-bottom-1 after:left-0 pr-1 after:transition-[width] after:duration-700 ${
                  isDark
                    ? "text-white after:bg-white"
                    : "text-gray-200 after:bg-white"
                } `}
              >
                {list.name}
              </Link>
            </li>
          ))}
          {children}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
