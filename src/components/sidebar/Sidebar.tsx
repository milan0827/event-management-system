import Link from "next/link";
import AppTitle from "../app-title/AppTitle";

const ADMIN_SIDEBAR_LIST = [
  {
    id: 1,
    label: "Manage Events",
    link: "manage-events",
  },
  {
    id: 2,
    label: "Manage users",
    link: "manage-users",
  },
];

const Sidebar = () => {
  return (
    <nav className="bg-zinc-300 border-r border-zinc-400 p-2 w-[20rem] ">
      <AppTitle title="EMS" />
      <ul className="flex flex-col gap-1">
        {ADMIN_SIDEBAR_LIST.map((list) => (
          <li key={list.id}>
            <Link
              href={`/${list.link}`}
              className="text-gray-700 py-2 px-8 bg-zinc-200 w-full block rounded-md hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              {" "}
              {list.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
