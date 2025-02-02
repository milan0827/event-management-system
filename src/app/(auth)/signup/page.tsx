import SignupForm from "@/components/signup-form/SignupForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup",
  description: "Signup page",
};

const page = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <SignupForm />
    </div>
  );
};

export default page;
