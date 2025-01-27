import AppTitle from "@/components/app-title/AppTitle";
import CreateUpdateEventForm from "@/components/create-update-event-form/CreateUpdateEventForm";
import { getEvent } from "@/lib/data-service";
import React from "react";

const page = async ({ params }: { params: Promise<{ eventId: number }> }) => {
  const { eventId } = await params;
  const event = await getEvent(Number(eventId));

  console.log("EVENTS", event);
  return (
    <div>
      <AppTitle title="Update Events" />
      <CreateUpdateEventForm data={event.data as never} />
    </div>
  );
};

export default page;
