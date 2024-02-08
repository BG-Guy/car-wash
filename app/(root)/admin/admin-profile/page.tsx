import React from "react";
import { generateLast12MonthsData } from "./data/user-profile-data";
import { Client } from "./components/client";
import {
  formatOrderToTable,
  formatOrders,
  formatOrdersByMonth,
} from "@/formatters";
import { getMonthlyOrders, getOrders } from "./functions";

const userProfilePage = async () => {
  const orders = (await getOrders()) ?? [];
  const formattedOrders = await formatOrders(orders);

  const getOrdersToTable = () => {
    return formattedOrders?.map((order) => {
      return formatOrderToTable(order);
    });
  };

  const monthsData = await generateLast12MonthsData();

  const ordersToTable = getOrdersToTable();

  const formatMonthIdx = (idx: number) => {
    if (idx.toString().length === 2) return idx.toString();
    if (idx.toString().length === 1) return "0" + idx.toString();
  };

  // const getOrdersByMonths = async () => {
  //   try {
  //     const ordersByMonths = await Promise.all(
  //       monthsData.map(async (currMonth) => {
  //         try {
  //           const month = {
  //             month: currMonth.month.name,
  //             orders: await getMonthlyOrders(currMonth),
  //           };
  //           return month;
  //         } catch (error) {
  //           console.error(error);
  //           throw error; // Rethrow the error to mark the Promise as rejected
  //         }
  //       })
  //     );
  //     return ordersByMonths;
  //   } catch (error) {
  //     console.error(error);
  //     // Handle the error if needed
  //     throw error; // Rethrow the error to mark the Promise as rejected
  //   }
  // };

  // const ordersByMonths = await getOrdersByMonths();
  // console.log("🚀 ~ userProfilePage ~ ordersByMonths:", ordersByMonths);
  // const formattedOrdersByMonth = await formatOrdexrxsByMonth(ordersByMonths);
  const getOrdersByMonths = async () => {
    try {
      const ordersByMonths = await Promise.all(
        monthsData.map(async (monthData: any) => {
          try {
            const monthlyOrders = await getMonthlyOrders(monthData);
            monthData.orders = monthlyOrders;
            return monthData;
          } catch (error) {
            console.error(error);
            throw error; // Rethrow the error to mark the Promise as rejected
          }
        })
      );
      return ordersByMonths;
    } catch (error) {
      console.error(error);
      // Handle the error if needed
      throw error; // Rethrow the error to mark the Promise as rejected
    }
  };
  // const formattedOrdersByMonth = await last12Months.map((monthData) => {});
  const ordersByMonth = await getOrdersByMonths();
  return (
    formattedOrders && (
      <Client
        ordersToTable={ordersToTable}
        formattedOrdersByMonth={ordersByMonth}
        formattedOrders={formattedOrders}
      />
    )
  );
};

export default userProfilePage;
