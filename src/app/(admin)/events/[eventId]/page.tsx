import AppTitle from "@/components/app-title/AppTitle";
import ErrorText from "@/components/error-text/ErrorText";
import { getEvent } from "@/lib/data-service";
import { Metadata } from "next";

type Props = {
  params: Promise<{ eventId: string }>;
  // searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const generateMetadata = async ({
  params,
}: Props): // parent: ResolvingMetadata
Promise<Metadata> => {
  const eventId = (await params).eventId;
  const { data: event } = await getEvent(Number(eventId));

  return {
    title: event?.event_name,
    description: event?.description,
  };
};

const page = async ({ params }: { params: Promise<{ eventId: string }> }) => {
  const { eventId } = await params;
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
