import AppTitle from "@/components/app-title/AppTitle";
import CreateEvents from "@/components/create-events/CreateEvents";

const page = () => {
  return (
    <div className="h-screen min-h-screen ">
      <AppTitle title="Add Events" />
      <CreateEvents />
    </div>
  );
};

export default page;
