import { getAllEvents } from "@/lib/data-service";
import Link from "next/link";
import AppTitle from "../app-title/AppTitle";
import ErrorText from "../error-text/ErrorText";
import EventListTable from "../event-list-table/EventListTable";

const EventList = async () => {
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
      <AppTitle title="Events List" />
      <EventListTable rowData={data} />;
    </div>
  );
};

export default EventList;
