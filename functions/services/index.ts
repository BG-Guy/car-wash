"use server";

import prismadb from "@/lib/prismadb";
import { formatter } from "@/lib/utils";
import { FormattedService } from "@/types";

export const getFormattedServices = async () => {
  const services = await prismadb.service.findMany();
  const formattedServices: FormattedService[] = services.map((automobile) => ({
    id: automobile.id,
    name: automobile.name,
    price: formatter.format(automobile.price.toNumber()),
    description: automobile.description,
  }));
  return formattedServices;
};
