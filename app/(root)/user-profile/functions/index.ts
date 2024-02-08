import { formatOrderToTable, formatUserOrderToTable } from "@/formatters";
import prismadb from "@/lib/prismadb";
import { formattedUserOrder } from "../types";
import axios from "axios";
import { toast } from "sonner";

export async function getOrdersForUser(userId: string) {
  return await prismadb.order.findMany({
    where: {
      userId,
    },
    include: {
      user: true,
      orderItems: {
        include: {
          automobile: true,
          service: true,
        },
      },
    },
  });
}

export async function getUserOrdersToTable(
  formattedUserOrders: (formattedUserOrder | undefined)[]
) {
  return formattedUserOrders?.map((userOrder) => {
    return formatUserOrderToTable(userOrder);
  });
}

export async function getAutomobilesTypes() {
  try {
    await axios.get(`/api/automobiles`);
    toast.success("success baby you will get it");
    // router.refresh();
    // window.location.reload();
  } catch (error) {
    toast.error(
      "Make sure you removed all products using this category first."
    );
  }
}

export async function getServicesTypes() {
  try {
    await axios.get(`/api/services`);
    toast.success("success baby you will get it");
    // router.refresh();
    // window.location.reload();
  } catch (error) {
    toast.error(
      "Make sure you removed all products using this category first."
    );
  }
}
