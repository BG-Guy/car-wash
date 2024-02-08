import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { orderId: string } }
) {
  try {
    if (!params.orderId) {
      return new NextResponse("order missing", { status: 401 });
    }

    const order = await prismadb.order.delete({
      where: {
        id: params.orderId,
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    console.log(error, "error1231");
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { orderId: string } }
) {
  try {
    const body = await req.json();

    const { status } = body;

    if (!params.orderId) {
      return new NextResponse("order missing", { status: 401 });
    }

    if (!body) {
      return new NextResponse("body missing", { status: 401 });
    }

    const order = await prismadb.order.update({
      where: {
        id: params.orderId,
      },
      data: {
        status,
      },
    });
    console.log("🚀 ~ file: route.ts:55 ~ order:", order);
    return NextResponse.json(order);
  } catch (error) {
    console.log(error, "error1231");
    return new NextResponse("Internal error", { status: 500 });
  }
}
