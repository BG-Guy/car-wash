"use client";
import { ColumnDef } from "@tanstack/react-table";
import { ActionsCell } from "./actions-cell";
import { StatusCell } from "./status-cell";

export type AdminOrderColumn = {
  automobile: string;
  createdAt: string;
  status: string;
  isPaid: string;
  services: string;
  totalPrice: string;
  username: string;
  id: string;
};

export const columns: ColumnDef<AdminOrderColumn>[] = [
  {
    id: "actions",
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => <ActionsCell data={row.original} />,
  },
  {
    accessorKey: "username",
    header: "User",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
  },
  {
    accessorKey: "isPaid",
    header: "Paid",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusCell data={row.original} />,
  },
  {
    accessorKey: "Notes",
    header: "notes",
  },
  {
    accessorKey: "services",
    header: "Services",
  },
  {
    accessorKey: "automobile",
    header: "Automobile",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "id",
    header: "Order Id",
  },
];
