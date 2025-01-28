import AppTitle from "@/components/app-title/AppTitle";
import CreateUpdateEventForm from "@/components/create-update-event-form/CreateUpdateEventForm";

const page = () => {
  return (
    <div className=" ">
      <AppTitle title="Create Events" />
      <CreateUpdateEventForm />
    </div>
  );
};

export default page;
