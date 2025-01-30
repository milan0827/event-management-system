import AppTitle from "@/components/app-title/AppTitle";
import ErrorText from "@/components/error-text/ErrorText";
import { getEvent } from "@/lib/data-service";

const page = async ({ params }: { params: { eventId: string } }) => {
  const { eventId } = params;
  const { data: event, error } = await getEvent(Number(eventId));

  console.log("EVENTS", event);

  if (error) return <ErrorText />;

  return (
    <div>
      <AppTitle title={event?.event_name as string} />
    </div>
  );
};

export default page;
