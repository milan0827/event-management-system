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

const page = async ({ params }: { params: { eventId: Promise<string> } }) => {
  const { eventId } = await params;
  const { data: event, error } = await getEvent(Number(eventId));

  console.log("EVENTS", event);

  if (error) return <ErrorText />;

  return (
    <div>
      <div className="h-[60vh] lg:h-[80vh] w-full overflow-hidden">
        <ImageSlider slider={SLIDER} />
      </div>
      <AppTitle title={event?.event_name as string} />
    </div>
  );
};

export default page;
