import ErrorText from "@/components/error-text/ErrorText";
import UserListTable from "@/components/user-list-table/UserListTable";
import { getAllUser } from "@/lib/data-service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User List",
  description: "List of users",
};

const page = async () => {
  const { users, error } = await getAllUser();

  if (error) return <ErrorText />;

  console.log("USERS", users);

  return <UserListTable rowData={users as never} />;
};

export default page;
