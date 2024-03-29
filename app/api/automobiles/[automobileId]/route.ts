import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { getCurrentUser } from "@/functions/auth/getters";

export async function DELETE(
  req: Request,
  { params }: { params: { automobileId: string } }
) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.automobileId) {
      return new NextResponse("Service Id is required", { status: 405 });
    }

    const automobile = await prismadb.automobile.delete({
      where: {
        id: params.automobileId,
      },
    });

    return NextResponse.json(automobile);
  } catch (error) {
    console.log("[CATEGORIES_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { automobileId: string } }
) {
  try {
    const user = await getCurrentUser();

    const body = await req.json();
    const { type, price, description } = body;

    if (!user) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.automobileId) {
      return new NextResponse("Service Id is required", { status: 405 });
    }

    const updatedService = await prismadb.automobile.update({
      where: {
        id: params.automobileId,
      },

      data: {
        type,
        price,
        description,
      },
    });

    return NextResponse.json(updatedService);
  } catch (error) {
    console.log("[CATEGORIES_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
