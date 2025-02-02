import LoginForm from "@/components/login-form/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

const page = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <LoginForm />
    </div>
  );
};

export default page;
