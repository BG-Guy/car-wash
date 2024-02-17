"use client";

import { redirect } from "next/navigation";
import { getCurrentUser } from "./getters";

export const handleRedirect = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) redirect("/");
};
