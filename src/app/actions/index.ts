"use server";

import { prisma } from "../../../prisma_init";
import { EventSchema } from "./schema/eventSchema";

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
  data: CreateEventErrors,
  formData: FormData
): Promise<CreateEventErrors> {
  const formObj: Record<string, unknown> = {};
  formData.forEach((val, key) => {
    formObj[key] = val;
  });

  const results = EventSchema.safeParse(formObj);
  if (results.success === true) {
    await prisma.event.create({
      data: {
        event_name: formObj.event_name as string,
        description: formObj.description as string,
        duration: Number(formObj.duration),
        event_date: new Date(formObj.event_date as Date).toISOString(),
        venue: formObj.venue as string,
      },
    });

    return { status: true };
  }
  const errors = results.error.flatten().fieldErrors;
  return { status: false, errors: errors };
}
