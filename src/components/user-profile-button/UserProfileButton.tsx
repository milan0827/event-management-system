import ProfileIcon from "@/assets/icons/ProfileIcon";
import UserMenu from "../user-menu/UserMenu";

const UserProfileButton = () => {
  return (
    <li className="[&>ul]:hover:flex overflow-clip flex items-center justify-center">
      <button className="">
        <ProfileIcon className="w-8 h-8 fill-white" />
      </button>
      <ul className="hidden absolute top-10 right-4 bg-gray-200 p-1 flex-col rounded-[0.2rem] gap-1 ">
        <UserMenu />
      </ul>
    </li>
  );
};

export default UserProfileButton;
