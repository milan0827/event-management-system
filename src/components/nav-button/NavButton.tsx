import { auth } from "@/lib/auth";
import Link from "next/link";
import UserProfileButton from "../user-profile-button/UserProfileButton";

const NavButton = async () => {
  const session = await auth();
  return session?.user ? (
    <UserProfileButton />
  ) : (
    <div className="flex items-center justify-center gap-4">
      <Link
        className="rounded-md border-2 border-transparent transition-all duration-300  text-gray-100 px-4 bg-blue-600  hover:bg-blue-700"
        href={"/login"}
      >
        Login
      </Link>
      <Link
        className="rounded-md border-2 border-transparent transition-all duration-300  text-gray-100 px-4 bg-red-600 hover:bg-red-700 "
        href={"/signup"}
      >
        Signup
      </Link>
    </div>
  );
};

export default NavButton;
