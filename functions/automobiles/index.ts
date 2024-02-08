"use server";
import prismadb from "@/lib/prismadb";
import { formatter } from "@/lib/utils";
import { FormattedAutomobile } from "@/types";

export const getFormattedAutomobiles = async () => {
  const automobiles = await prismadb.automobile.findMany();
  const formattedAutomobiles: FormattedAutomobile[] = automobiles.map(
    (automobile) => ({
      id: automobile.id,
      type: automobile.type,
      price: formatter.format(automobile.price.toNumber()),
      description: automobile.description,
    })
  );
  return formattedAutomobiles;
};
