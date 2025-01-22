import { z } from "zod";

export const EventSchema = z.object({
  event_name: z
    .string()
    .trim()
    .min(1, { message: "Event name must be atleat 3 character long" }),
  description: z.string().trim().min(10, {
    message: "Event description must be atleast 12 characters long",
  }),
  venue: z.string().min(1, { message: "Provide a venue for event" }),
  duration: z.coerce
    .number()
    .min(1, { message: "Duration must be at least 1hr long" }),
  event_date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Event date must be a valid date",
  }),
});

export type EventSchemaType = z.infer<typeof EventSchema>;
