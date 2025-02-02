import AppTitle from "@/components/app-title/AppTitle";
import CreateUpdateEventForm from "@/components/create-update-event-form/CreateUpdateEventForm";
import { getEvent } from "@/lib/data-service";
import { Metadata } from "next";
import React from "react";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ eventId: string }>;
}): Promise<Metadata> => {
  const { eventId } = await params;
  const event = await getEvent(Number(eventId));

  return {
    title: event.data?.event_name,
    description: event?.data?.description,
  };
};

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
