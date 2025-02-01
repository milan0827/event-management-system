import ErrorText from "@/components/error-text/ErrorText";
import { getUser } from "@/lib/data-service";

const page = async ({ params }: { params: Promise<{ userId: string }> }) => {
  const { userId } = await params;
  const { user, error } = await getUser(Number(userId));
  if (error) return <ErrorText />;

  console.log("USERSS", user);
  return <div>page</div>;
};

export default page;
