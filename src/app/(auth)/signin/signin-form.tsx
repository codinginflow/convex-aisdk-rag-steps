"use client";

import { PasswordInput } from "@/components/password-input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthFormValues, signinSchema } from "../schema";

export function SigninForm() {
  const [step, setStep] = useState<"signIn" | "signUp">("signIn");

  const form = useForm<AuthFormValues>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: AuthFormValues) {
    // TODO: Sign in
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-muted/50">
      <div className="w-full max-w-md p-8 space-y-8 bg-card rounded-lg shadow-lg">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-card-foreground">
            {step === "signIn" ? "Login" : "Create Account"}
          </h1>
          <p className="text-muted-foreground">
            {step === "signIn"
              ? "Enter your credentials to access your account."
              : "Enter your details to create a new account."}
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="you@example.com"
                      {...field}
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.formState.errors.root && (
              <div className="text-sm text-destructive">
                {form.formState.errors.root.message}
              </div>
            )}
            <Button type="submit" className="w-full">
              {step === "signIn" ? "Sign In" : "Sign Up"}
            </Button>
          </form>
        </Form>
        <Button
          variant="link"
          type="button"
          className="w-full text-sm text-muted-foreground cursor-pointer"
          onClick={() => {
            setStep(step === "signIn" ? "signUp" : "signIn");
            form.reset(); // Reset form errors and values when switching modes
          }}
        >
          {step === "signIn"
            ? "Don't have an account? Sign Up"
            : "Already have an account? Sign In"}
        </Button>
      </div>
    </div>
  );
}
