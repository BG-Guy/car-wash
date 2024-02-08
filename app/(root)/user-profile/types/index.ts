import { OrderItem } from "@/types";
import { User } from "@prisma/client";

export type UserOrdersColumn = {
  automobile: string;
  createdAt: string;
  status: string;
  isPaid: string;
  services: string;
  totalPrice: string;
  id: string;
};

export type formattedUserOrder = {
  createdAt: string;
  isPaid: string;
  status: string;
  automobile: string;
  services: string;
  totalPrice: string;
  id: string;
};

export type UserOrder = {
  user: User;
  orderItems: OrderItem[];
};
