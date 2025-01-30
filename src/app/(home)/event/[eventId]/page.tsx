import AppTitle from "@/components/app-title/AppTitle";
import ErrorText from "@/components/error-text/ErrorText";
import ImageSlider from "@/components/image-slider/ImageSlider";
import { getEvent } from "@/lib/data-service";
import { Slider } from "@/types/type";

const SLIDER: Slider[] = [
  {
    id: 1,
    image: "/images/defcon.jpg",
    title: "Defcon",
    description:
      "The largest hacking and security conference with presentations, workshops, contests, villages and the premier Capture The Flag Contest.",
  },
  {
    id: 2,
    image: "/images/football.jpg",
    title: "Defcon",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, distinctio amet, quia quidem ea nesciunt vero consequatur repellat quisquam dicta reprehenderit aliquid non animi dolore inventore. Aliquam natus cum a!",
  },
];

const page = async ({ params }: { params: { eventId: string } }) => {
  const { eventId } = params;
  const { data: event, error } = await getEvent(Number(eventId));

  console.log("Events", params);

  if (error) return <ErrorText />;

  return (
    <div>
      <div className="h-[60vh] lg:h-[80vh] w-full overflow-hidden">
        <ImageSlider slider={SLIDER} isNavigateIcon={false} />
      </div>
      <div className="max-w-[1200px] mx-auto p-4 my-8">
        <AppTitle
          title={event?.event_name as string}
          className="text-start font-semibold"
        />
        <div className="flex flex-col gap-4">
          <div>
            <AppTitle
              title="Event Description"
              className="text-start font-medium mb-0"
              headingLevel="h3"
              size="small"
            />
            <p className="text-gray-500">{event?.description}</p>
          </div>
          <div>
            <AppTitle
              title="Event Date"
              className="text-start font-medium mb-0"
              headingLevel="h3"
              size="small"
            />
            <p className="text-gray-500">
              {event?.event_date.toISOString().substring(0, 10)}
            </p>
          </div>
          <div>
            <AppTitle
              title="Event Duration"
              className="text-start font-medium mb-0"
              headingLevel="h3"
              size="small"
            />
            <p className="text-gray-500">{event?.duration}hr</p>
          </div>
          <div>
            <AppTitle
              title="Venue"
              className="text-start font-medium mb-0"
              headingLevel="h3"
              size="small"
            />
            <p className="text-gray-500">{event?.venue}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
