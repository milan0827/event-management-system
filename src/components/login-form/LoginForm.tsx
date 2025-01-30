"use client";

import { login, LoginErrors } from "@/app/actions/authAction";
import { FormEvent, useState } from "react";
import { useFormStatus } from "react-dom";
import AppTitle from "../app-title/AppTitle";
import { Button } from "../button/Button";
import TextField from "../text-field/TextField";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [errors, setErrors] = useState<LoginErrors["errors"]>({});
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const res = await login(formData);
    console.log("RESPONSE", res);
    if (res.status) {
      alert(res.message);
      router.push("/");
    } else setErrors({ ...res.errors });
  }
  return (
    <form
      className="w-[30rem] flex flex-col justify-center gap-4"
      onSubmit={handleSubmit}
    >
      <AppTitle title="Login EMS" className="text-gray-200 font-semibold" />
      <div className="flex flex-col gap-3">
        {" "}
        <TextField
          label="Email"
          labelProps={{ htmlFor: "email", labelVariants: "secondary" }}
          id="email"
          name="email"
          type="email"
          helperText={!!errors?.email ? errors?.email[0] : null}
        />
        <TextField
          label="Password"
          labelProps={{ htmlFor: "password", labelVariants: "secondary" }}
          id="password"
          name="password"
          type="password"
          helperText={!!errors?.password ? errors.password[0] : null}
        />
      </div>
      <SubmitButton />
    </form>
  );
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      label={`${pending ? "Logging in..." : "Login"}`}
      disabled={pending}
    />
  );
}

export default LoginForm;
