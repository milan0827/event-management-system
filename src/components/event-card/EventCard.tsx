"use client";

import { Event } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import AppTitle from "../app-title/AppTitle";

const EventCard = ({ event }: { event: Event }) => {
  // console.log("EVENTS CARD", event);
  return (
    <div className="bg-zinc-100 shadow-[0_5px_5px_rgba(0,0,0,0.02)] rounded-md overflow-hidden">
      <div className="w-full md:h-40 h-56 overflow-hidden">
        <Image
          width={1000}
          height={1000}
          className=" w-full h-full block object-cover"
          alt={event.event_name}
          src="/images/football.jpg"
        />
      </div>
      <div className="p-2 flex-col gap-2 flex ">
        <div>
          <AppTitle
            title={event.event_name}
            headingLevel="h3"
            className="text-start font-semibold leading-4"
          />
          <p className="text-gray-500">
            {event.description.substring(0, 100)}...
          </p>
        </div>

        <div className="flex items-center gap-3 place-items-end mt-auto">
          <Link
            className="rounded-md border-2 border-transparent transition-all duration-300  text-gray-100 px-4 bg-blue-600  hover:bg-blue-700"
            href={`/event/${event.id}`}
          >
            View Details
          </Link>
          <Link
            className="rounded-md border-2 border-transparent transition-all duration-300  text-gray-100 px-4 bg-green-600 hover:bg-green-700"
            href={`/event/${event.id}`}
          >
            Participate
          </Link>
          {/* <Button label="View Details" size={"small"} /> */}
          {/* <Button label="Participate" variant={"secondary"} size={"small"} /> */}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
