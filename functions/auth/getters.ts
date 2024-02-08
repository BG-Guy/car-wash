import { auth } from "@/auth";
import prismadb from "@/lib/prismadb";

export const getAccountByUserId = async (userId: string) => {
  try {
    const account = await prismadb.account.findFirst({
      where: { userId },
    });

    return account;
  } catch {
    return null;
  }
};

export const getCurrentUser = async () => {
  const session = await auth();

  return session?.user;
};

export const checkIsAdmin = async () => {
  const session = await auth();
  const isAdmin = session?.user?.role === "ADMIN";
  return isAdmin;
};

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prismadb.user.findUnique({ where: { email } });

    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await prismadb.user.findUnique({ where: { id } });

    return user;
  } catch {
    return null;
  }
};
