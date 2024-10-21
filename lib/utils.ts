import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { prisma } from "./db";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.admin.findFirst({
      where: {
        email,
      },
    });

    return user;
  } catch (error) {
    return null;
  }
};

export const priceFormater = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "INR",
});
