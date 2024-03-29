import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { create } from "domain";
import { getCurrentUser } from "@/functions/auth/getters";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    const userId = user?.id;

    const data = await req.json();
    console.log("🚀 ~ file: route.ts:13 ~ POST ~ data:", data);
    const { totalPrice, items } = data;

    if (!user) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!userId) {
      return new NextResponse("Missing user id", { status: 406 });
    }

    if (!data) {
      return new NextResponse("Items missing", { status: 405 });
    }

    if (!items) {
      return new NextResponse("Items missing", { status: 405 });
    }

    const automobileIds = items
      .filter((orderItem: any) => orderItem.type)
      .map((orderItem: any) => orderItem.id);

    const serviceIds = items
      .filter((orderItem: any) => orderItem.name)
      .map((orderItem: any) => orderItem.id);

    const automobile = await prismadb.automobile.findFirst({
      where: {
        id: {
          in: automobileIds,
        },
      },
    });

    const services = await prismadb.service.findMany({
      where: {
        id: {
          in: serviceIds,
        },
      },
    });

    if (!automobile) {
      return new NextResponse("automobile missing", { status: 402 });
    }

    if (!services.length) {
      return new NextResponse("services missing", { status: 401 });
    }

    const order = await prismadb.order.create({
      data: {
        userId,
        orderItems: {
          create: [
            ...automobileIds.map((id: string) => ({
              automobile: { connect: { id } },
            })),
            ...serviceIds.map((id: string) => ({
              service: { connect: { id } },
            })),
          ],
        },
        isPaid: false,
        status: "PENDING",
        totalPrice: totalPrice,
      },
    });

    if (!order) {
      return new NextResponse("Problem occured with order", { status: 407 });
    }

    return NextResponse.json(order);
  } catch (error) {
    console.log("[🚀 error]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
