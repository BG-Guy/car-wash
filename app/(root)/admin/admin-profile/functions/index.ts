import { getOrdersForUser } from "@/app/(root)/user-profile/functions";
import { getCurrentUser } from "@/functions/auth/getters";
import prismadb from "@/lib/prismadb";

export async function getOrders() {
  const user = await getCurrentUser();
  if (!user) return;
  const userId = user?.id;

  if (user.role === "ADMIN") return getOrdersForAdmin();
  else return getOrdersForUser(userId);

  // return await prismadb.order.findMany({
  //   where: {
  //     userId,
  //   },
  //   include: {
  //     user: true,
  //     orderItems: {
  //       include: {
  //         automobile: true,
  //         service: true,
  //       },
  //     },
  //   },
  // });
}

export function getLast12MonthsArray() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const last12MonthsArray = [];

  for (let i = 0; i < 12; i++) {
    const monthIndex = (currentMonth - i + 12) % 12;
    const year = currentYear - (i > currentMonth ? 1 : 0); // Adjust the year conditionally
    const monthName = months[monthIndex];

    last12MonthsArray.push({ month: monthName, orders: [], year });
  }

  return last12MonthsArray.reverse();
}

export async function getOrdersForAdmin() {
  return await prismadb.order.findMany({
    where: {},
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

export async function getMonthlyOrders(monthData: any) {
  const monthlyOrders = await prismadb.order.findMany({
    where: {
      createdAt: {
        gte: new Date(
          `${monthData.year}-${monthData.month.idx}-01T00:00:00+0200`
        ),
        lte: new Date(
          `${monthData.year}-${monthData.month.idx}-${monthData.day[1]}T00:00:00+0200`
        ),
      },
    },
    include: {
      orderItems: {
        include: {
          service: true,
          automobile: true,
        },
      },
    },
  });
  return monthlyOrders;
}
