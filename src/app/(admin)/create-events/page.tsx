import AppTitle from "@/components/app-title/AppTitle";
import CreateUpdateEventForm from "@/components/create-update-event-form/CreateUpdateEventForm";

const page = () => {
  return (
    <div className="h-screen min-h-screen ">
      <AppTitle title="Create Events" />
      <CreateUpdateEventForm />
    </div>
  );
};

export default page;
