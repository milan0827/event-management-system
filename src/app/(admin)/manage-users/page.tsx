import ErrorText from "@/components/error-text/ErrorText";
import UserListTable from "@/components/user-list-table/UserListTable";
import { getAllUser } from "@/lib/data-service";

const page = async () => {
  const { users, error } = await getAllUser();

  if (error) return <ErrorText />;

  console.log("USERS", users);

  return <UserListTable rowData={users} />;
};

export default page;
