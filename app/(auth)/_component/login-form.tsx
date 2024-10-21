"use client";
import { useState, useTransition } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import * as z from "zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Fingerprint } from "lucide-react";
 
 
import { FormMsg } from "./form-msg";
import { LoginSchema } from "@/lib/schema/login";
import { LogIn } from "@/action/auth";
export const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError(false);
    setSuccess(false);

    startTransition(() => {
      LogIn(values)
        .then((data) => {
          setSuccess(true);
          router.push("/home");
        })
        .catch((err) => setError(true));
    });
  };
  return (
    <>
      <div className="shadow-xl p-10">
        <div className="w-full flex flex-col gap-y-4 items-center justify-center">
          <h1
            className={cn("text-3xl flex items-center gap-x-2 font-semibold")}
          >
            <Fingerprint className="text-blue-600 w-10 h-10" />
            Login
          </h1>
          <p> </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <>
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="johnDoe@gmail.com"
                          type="email"
                          {...field}
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <>
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="*****"
                          type="password"
                          {...field}
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </>
                )}
              />
            </div>
            {error && (
              <FormMsg message="Invalid credential" variant={"error"} />
            )}
            {success && (
              <FormMsg message="Successfully login" variant={"success"} />
            )}
            <Button
              disabled={isPending}
              variant={"default"}
              className="w-full"
              type="submit"
            >
              {isPending ? "Sign..." : "Sign in"}
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};
