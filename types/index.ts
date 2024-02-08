import { Automobile, Service } from "@prisma/client";
import { User } from "next-auth";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

export type FormattedAutomobile = {
  id: string;
  type: string;
  price: string;
  description: string;
};

export type FormattedService = {
  id: string;
  name: string;
  price: string;
  description: string;
};

export type FormattedOrder = {
  id: string;
  createdAt: string;
  totalPrice: string;
  notes: string;
  isPaid: string;
  status: string;
  user: User;
  automobile: FormattedAutomobile;
  services: FormattedService[];
};

export type FormattedOrdersByMonth = {
  createdAtMonth: number;
  id: string;
  isPaid: string;
  totalPrice: string;
  status: string;
  userId: string;
};

export type formattedUser = {
  id: string;
  name: string;
  email: string;
};

export type OrderItem = {
  id: string;
  automobileId?: String;
  serviceId?: String;
  service?: Service;
  automobile?: Automobile;
};
