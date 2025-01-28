import AppTitle from "@/components/app-title/AppTitle";
import EventCard from "@/components/event-card/EventCard";
import ImageSlider from "@/components/image-slider/ImageSlider";
import { getAllEvents } from "@/lib/data-service";
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
  {
    id: 3,
    image: "/images/nvidia.png",
    title: "Defcon",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, distinctio amet, quia quidem ea nesciunt vero consequatur repellat quisquam dicta reprehenderit aliquid non animi dolore inventore. Aliquam natus cum a!",
  },
  {
    id: 4,
    image: "/images/events.jpeg",
    title: "Defcon",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, distinctio amet, quia quidem ea nesciunt vero consequatur repellat quisquam dicta reprehenderit aliquid non animi dolore inventore. Aliquam natus cum a!",
  },
];

const page = async () => {
  const { data: events, error } = await getAllEvents(5, 1);
  console.log("EVENTS", events);

  if (error) return alert(error);

  return (
    <div className="">
      <div className="h-[60vh] lg:h-[80vh] w-full  overflow-hidden">
        <ImageSlider slider={SLIDER} />
      </div>

      <div className="mt-4 max-w-[1200px] mx-auto my-4 px-4">
        <AppTitle title="Top Events" className="text-start font-semibold" />
        <div className="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events?.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
