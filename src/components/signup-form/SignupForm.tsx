"use client";

import { signup, SignupErrors } from "@/app/actions/authAction";
import { FormEvent, useState } from "react";
import { useFormStatus } from "react-dom";
import AppTitle from "../app-title/AppTitle";
import { Button } from "../button/Button";
import TextField from "../text-field/TextField";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const [errors, setErrors] = useState<SignupErrors["errors"]>({});
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const res = await signup(formData);
      if (res.status) {
        alert("Signed up successfully");
        router.push("/");
      } else {
        setErrors({ ...res.errors });
        alert(res.message);
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  }
  return (
    <form
      className="w-[30rem] flex flex-col justify-center gap-4"
      // action={signup}
      onSubmit={handleSubmit}
    >
      <AppTitle title="Signup for the EMS" />
      <div className="flex flex-col gap-3">
        <TextField
          label="Full Name"
          labelProps={{ htmlFor: "full_name" }}
          id="full_name"
          name="full_name"
          type="text"
          helperText={!!errors?.full_name ? errors.full_name[0] : null}
        />
        <TextField
          label="Email"
          labelProps={{ htmlFor: "email" }}
          id="email"
          name="email"
          type="email"
          helperText={!!errors?.email ? errors?.email[0] : null}
        />
        <TextField
          label="Password"
          labelProps={{ htmlFor: "password" }}
          id="password"
          name="password"
          type="password"
          helperText={!!errors?.password ? errors.password[0] : null}
        />
      </div>
      <div>
        <SubmitButton />
      </div>
    </form>
  );
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button label={`${pending ? "Signing..." : "Signup"}`} disabled={pending} />
  );
}
export default SignupForm;
