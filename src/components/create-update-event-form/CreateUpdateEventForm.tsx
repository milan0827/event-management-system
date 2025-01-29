"use client";

import {
  CreateEventErrors,
  createEvents,
  updateEvents,
} from "@/app/actions/eventAction";
import { FormEvent, useState } from "react";
import { Button } from "../button/Button";
import TextField from "../text-field/TextField";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";

const CreateUpdateEventForm = ({ data }: { data?: any }) => {
  // const [state, action] = useActionState(createEvents, {
  //   status: false,
  //   errors: {},
  // });

  // const { errors } = state;
  const [errors, setErrors] = useState<CreateEventErrors["errors"]>({});
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    try {
      if (!data) {
        const res = await createEvents(formData);
        if (res.status) {
          alert("Event successfully created");
          form.reset();
        }

        if (!res.status) {
          setErrors({ ...res.errors });
          return;
        }
      } else {
        const res = await updateEvents(data?.id as number, formData);
        if (res?.status) {
          alert("Event Successfully updated");
        }

        if (!res?.status) {
          setErrors({ ...res?.errors });
          return;
        }
        router.push("/manage-events");
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log("DATA", data?.event_date.toISOString().substring(0, 10));

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center gap-5 bg-gray-800 p-5 rounded-md"
    >
      <div className="grid grid-cols-2 gap-3">
        <TextField
          label="Name"
          labelProps={{ htmlFor: "event_name" }}
          id="event_name"
          name="event_name"
          type="text"
          helperText={!!errors?.event_name ? errors?.event_name[0] : null}
          defaultValue={data?.event_name}
        />
        <TextField
          label="Description"
          labelProps={{ htmlFor: "description" }}
          id="description"
          name="description"
          type="text"
          helperText={!!errors?.description ? errors?.description[0] : null}
          defaultValue={data?.description}
        />
        <TextField
          label="Duration (In hour)"
          labelProps={{ htmlFor: "duration" }}
          id="duration"
          name="duration"
          type="number"
          helperText={!!errors?.duration ? errors?.duration[0] : null}
          defaultValue={data?.duration}
        />
        <TextField
          label="Venue"
          labelProps={{ htmlFor: "venue" }}
          id="venue"
          name="venue"
          type="text"
          helperText={!!errors?.venue ? errors?.venue[0] : null}
          defaultValue={data?.venue}
        />
        <TextField
          label="Event Date"
          labelProps={{ htmlFor: "event_date" }}
          id="event_date"
          name="event_date"
          type="date"
          helperText={!!errors?.event_date ? errors?.event_date[0] : null}
          defaultValue={
            data?.event_date
              ? new Date(data.event_date).toISOString().split("T")[0]
              : ""
          }
        />
        <div className="self-end">
          <SubmitButton />
        </div>
      </div>
    </form>
  );
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      label={`${pending ? "submitting..." : "Submit"}`}
      disabled={pending}
    />
  );
}

export default CreateUpdateEventForm;
