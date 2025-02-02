import AppTitle from "@/components/app-title/AppTitle";
import ErrorText from "@/components/error-text/ErrorText";
import EventListTable from "@/components/event-list-table/EventListTable";
import { getAllEvents } from "@/lib/data-service";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Event List",
  description: "Add Events",
};

const page = async () => {
  const { data, error } = await getAllEvents();
  if (error) return <ErrorText />;

  return (
    <div className="flex flex-col gap-3">
      <Link
        href={"/create-events"}
        style={{ alignSelf: "flex-end" }}
        className="bg-blue-600  hover:bg-blue-700 rounded-md flex items-center justify-center gap-4 border-2 border-transparent transition-all duration-300  text-gray-100  px-2 py-2 "
      >
        + Add Events
      </Link>
      <AppTitle title="Events List" className="text-white" />
      <EventListTable rowData={data} />
    </div>
  );
};

export default page;
