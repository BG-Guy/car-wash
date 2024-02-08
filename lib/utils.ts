import { Automobile, Service } from "@prisma/client";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import bcrypt from "bcryptjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// export function formatOrderItem(orderItem: Service | Automobile) {
//   return {
//     ...orderItem,
//     price: formatter.format(orderItem.price.toNumber()),
//   };
// }

export function calcPrecentage(number1: number, number2: number) {
  if ((number1 | number2) === 0) return null;
  const precentage = (number1 / number2) * 100;
  return precentage;
}

export const test = async () => {
  let hashedPassword = await bcrypt.hash("6788769", 10);
  let password = "6788769";
  const isMatched = await bcrypt.compare("6788769", hashedPassword);
  console.log(isMatched, "log");
  return isMatched;
};
