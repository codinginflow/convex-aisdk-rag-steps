import { Metadata } from "next";
import { SigninForm } from "./signin-form";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your account",
};

export default function Page() {
  return <SigninForm />;
}
