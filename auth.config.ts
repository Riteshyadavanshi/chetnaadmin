import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./lib/schema/login";
import { getUserByEmail } from "./lib/utils";
export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
         
          if (!user || !user.password) return null;

          if (password != user.password) {
            throw new Error("email or password incorrect");
          }
          return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
