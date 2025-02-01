"use server";

import { parseFormData } from "@/helpers";
import { getEvent } from "@/lib/data-service";
import { prisma } from "../../../prisma_init";
import { EventSchema } from "./schema/eventSchema";
import { revalidatePath } from "next/cache";

export interface CreateEventErrors {
  errors?: {
    event_name?: string[];
    description?: string[];
    duration?: string[];
    event_date?: string[];
    venue?: string[];
  };
  status: boolean;
}

export async function createEvents(
  formData: FormData
): Promise<CreateEventErrors> {
  const formObj = parseFormData(formData);

  const results = EventSchema.safeParse(formObj);
  if (results.success) {
    await prisma.event.create({
      data: {
        event_name: formObj.event_name as string,
        description: formObj.description as string,
        duration: Number(formObj.duration),
        event_date: new Date(formObj.event_date as Date).toISOString(),
        venue: formObj.venue as string,
      },
    });

    revalidatePath("/events");
    return { status: true };
  }
  const errors = results.error.flatten().fieldErrors;
  return { status: false, errors: errors };
}

export async function updateEvents(
  eventId: number,
  formData: FormData
): Promise<CreateEventErrors> {
  const { error: eventError } = await getEvent(eventId);
  if (eventError) return { status: false };

  const formObj = parseFormData(formData);
  const results = EventSchema.safeParse(formObj);

  if (results.success) {
    await prisma.event.update({
      data: {
        ...formObj,
        duration: Number(formObj.duration),
        event_date: new Date(formObj.event_date as Date).toISOString(),
      },
      where: {
        id: eventId,
      },
    });
    revalidatePath("/events");
    return { status: true };
  }

  const errors = results.error.flatten().fieldErrors;
  return { status: false, errors: errors };
}

export async function deleteEvents(eventId: number) {
  const { error: eventError } = await getEvent(eventId);
  if (eventError) return { status: false, error: "Event does not exist" };

  try {
    await prisma.event.delete({
      where: {
        id: eventId,
      },
    });

    revalidatePath("/events");
    return { error: null, status: true };
  } catch (error) {
    return { error, status: false };
  }
}
