"use server";

import { LoginSchema } from "@/lib/schema/login";
import * as z from "zod";

import { signIn, signOut } from "@/auth";

import { AuthError } from "next-auth";

export const LogIn = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    throw new Error("server error");
  }

  const { email, password } = validatedFields.data;
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/home",
      redirect: true,
    });
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case "CredentialsSignin":
          throw err;
      }
      throw err;
    }
  }
};

export const logOut = async () => {
  try {
    await signOut({
      redirect: true,
      redirectTo: "/",
    });
  } catch (err) {
    throw err;
  }
};
