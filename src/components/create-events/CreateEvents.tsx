"use client";

import { createEvents } from "@/app/actions";
import { useActionState } from "react";
import TextField from "../text-field/TextField";
import { Button } from "../button/Button";

const CreateEvents = () => {
  const [state, action] = useActionState(createEvents, {
    status: false,
    errors: {},
  });

  const { errors } = state;

  return (
    <form action={action} className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-3">
        <TextField
          label="Name"
          labelProps={{ htmlFor: "event_name" }}
          id="event_name"
          name="event_name"
          type="text"
          helperText={!!errors?.event_name ? errors?.event_name[0] : null}
        />
        <TextField
          label="Description"
          labelProps={{ htmlFor: "description" }}
          id="description"
          name="description"
          type="text"
          helperText={!!errors?.description ? errors?.description[0] : null}
        />
        <TextField
          label="Duration"
          labelProps={{ htmlFor: "duration" }}
          id="duration"
          name="duration"
          type="number"
          helperText={!!errors?.duration ? errors?.duration[0] : null}
        />
        <TextField
          label="Venue"
          labelProps={{ htmlFor: "venue" }}
          id="venue"
          name="venue"
          type="text"
          helperText={!!errors?.venue ? errors?.venue[0] : null}
        />
        <TextField
          label="Event Date"
          labelProps={{ htmlFor: "event_date" }}
          id="event_date"
          name="event_date"
          type="date"
          helperText={!!errors?.event_date ? errors?.event_date[0] : null}
        />
      </div>
      <div>
        <Button label="Add Events" />
      </div>
    </form>
  );
};

export default CreateEvents;
