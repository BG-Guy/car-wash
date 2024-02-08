"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import EditableCell from "./editable-cell";

export type UserOrdersColumn = {
  createdAt: string;
  isPaid: string;
  status: string;
  automobile: string;
  services: string;
  totalPrice: string;
  id: string;
};

export const columns: ColumnDef<UserOrdersColumn>[] = [
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ getValue, row, column, table }) => (
      <EditableCell
        getValue={getValue}
        row={row}
        column={column}
        table={table}
        isDescription={false}
      />
    ),
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
  },
  {
    accessorKey: "automobile",
    header: "Automobile",
  },
  {
    accessorKey: "services",
    header: "Services",
  },
  {
    accessorKey: "isPaid",
    header: "Paid",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
