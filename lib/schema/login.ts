import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().min(1, {
      message: "email required",
    }),
    password: z.string().min(1, {
      message: " password required",
    }),
  });