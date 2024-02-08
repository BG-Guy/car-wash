import { formatter } from "@/lib/utils";
import { Automobile, Order, Service, User } from "@prisma/client";
import { FormattedOrder, FormattedService, OrderItem } from "../types";
import { format } from "date-fns";
import { calendarMonths } from "@/app/(root)/admin/admin-profile/data/user-profile-data";
import { UserOrder, formattedUserOrder } from "@/app/(root)/user-profile/types";

export async function formatUser(user: User) {
  const formattedUser = {
    id: user.id,
    name: user.name,
    email: user.email,
  };
}

export async function formatServices(services: Service[]) {
  return services.map((service) => ({
    id: service.id,
    name: service.name,
    price: formatter.format(service.price.toNumber()),
    description: service.description,
  }));
}

export async function formatAutomobiles(automobiles: Automobile[]) {
  return automobiles.map((automobile) => ({
    id: automobile.id,
    type: automobile.type,
    price: formatter.format(automobile.price.toNumber()),
    description: automobile.description,
  }));
}

export async function formatOrder(order: any) {
  return {
    id: order?.id,
    isPaid: order?.isPaid,
    status: order?.status,
    createdAt: format(order.createdAt, "dd/MM/yyyy, h:mm:ss a"),
    user: order.user,
    automobile: order?.orderItems
      .map((item: OrderItem) => item?.automobile)
      .find((automobile: Automobile) => automobile !== null),
    services: order?.orderItems
      .map((item: OrderItem) => item?.service)
      .filter((service: Service) => service !== null),
    totalPrice: order.totalPrice,
    notes: order.notes,
  };
}

export async function formatOrders(orders: Order[]) {
  return await Promise.all(
    orders.map(async (order) => {
      try {
        const formattedOrder: FormattedOrder = await formatOrder(order);
        return formattedOrder;
      } catch (error) {
        console.log(error);
      }
    })
  );
}

export async function formatUserOrder(userOrder: any) {
  return {
    id: userOrder?.id,
    isPaid: userOrder?.isPaid,
    status: userOrder?.status,
    createdAt: format(userOrder.createdAt, "dd/MM/yyyy, h:mm:ss a"),
    username: userOrder.username,
    automobile: userOrder?.orderItems
      .map((item: OrderItem) => item?.automobile)
      .find((automobile: Automobile) => automobile !== null),
    services: userOrder?.orderItems
      .map((item: OrderItem) => item?.service)
      .filter((service: Service) => service !== null),
    totalPrice: `${userOrder.totalPrice}`,
  };
}

export async function formatUserOrders(userOrders: Order[]) {
  return await Promise.all(
    userOrders.map(async (userOrder: Order) => {
      try {
        const formattedOrder: formattedUserOrder = await formatUserOrder(
          userOrder
        );
        return formattedOrder;
      } catch (error) {
        console.log(error);
      }
    })
  );
}

export async function formatOrdersByMonth(ordersByMonths: any) {
  return ordersByMonths.map((ordersByMonth: any) => {
    return {
      ...ordersByMonth,
      createdAtMonth:
        calendarMonths[new Date(ordersByMonth.createdAt).getMonth()],
    };
  });
}

export function formatOrderToTable(order: any) {
  return {
    username: order.user.name,
    createdAt: order.createdAt,
    isPaid: order.isPaid ? "Yes" : "No",
    status: order.status,
    automobile: order.automobile.type,
    services: order.services.map((service: Service) => service.name).join(" "),
    totalPrice: order.totalPrice,
    id: order.id,
    notes: order.notes,
  };
}

export function formatUserOrderToTable(userOrder: any) {
  return {
    createdAt: userOrder.createdAt,
    isPaid: userOrder.isPaid ? "Yes" : "No",
    status: userOrder.status,
    automobile: userOrder.automobile.type,
    services: userOrder.services
      .map((service: Service) => service.name)
      .join(" "),
    totalPrice: userOrder.totalPrice,
    id: userOrder.id,
  };
}
