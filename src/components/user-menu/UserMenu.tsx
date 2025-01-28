import Link from "next/link";
import RenderList from "../render-list/RenderList";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";
import LogoutButton from "../logout-button/LogoutButton";

const USER_MENU = [
  {
    id: 1,
    name: "View Profile",
    link: "view-profile",
  },
  {
    id: 2,
    name: "Edit Profile",
    link: "edit-profile",
  },
  {
    id: 3,
    name: "Help and Support",
    link: "help-and-support",
  },
];

const UserMenu = () => {
  return (
    <>
      <RenderList
        data={USER_MENU}
        render={(list) => (
          <li key={list.id}>
            <Link
              href={list.link}
              className="flex items-center justify-between gap-2 text-gray-800/90 hover:bg-gray-800/10 p-1 rounded-sm"
            >
              <span>{list.name}</span>
              <ArrowRightIcon className="w-5 h-5 fill-gray-800/90" />
            </Link>
          </li>
        )}
      />
      <LogoutButton />
    </>
  );
};

export default UserMenu;
