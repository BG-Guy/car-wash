import React from "react";
import { getOrdersForUser, getUserOrdersToTable } from "./functions";
import { auth } from "@/auth";
import { formatUserOrders } from "@/formatters";
import { Client } from "./components/client";

export default async function UserProfile() {
  const session = await auth();
  if (!session?.user) return;
  const userOrders = await getOrdersForUser(session?.user.id);
  const formattedUserOrders = await formatUserOrders(userOrders);
  const userOrdersToTable = await getUserOrdersToTable(formattedUserOrders);

  return (
    formattedUserOrders && (
      <div>
        <Client ordersToTable={userOrdersToTable} />
      </div>
    )
  );
}
