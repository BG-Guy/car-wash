"use client";
import { useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AdminOrderColumn } from "./column";
import { toast } from "sonner";

interface OrdersTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  initialData: TData[];
}

export function OrdersTable<TData, TValue>({
  columns,
  initialData,
}: OrdersTableProps<TData, TValue>) {
  const [changedOrder, setChangedOrders] = useState<AdminOrderColumn[]>([]);
  const router = useRouter();

  const [data, setData] = useState(initialData);
  const updateItem = (item: AdminOrderColumn) => {
    // If there isn't any item in the array, add the item
    if (changedOrder.length === 0) {
      setChangedOrders((prevService) => {
        return [...prevService, item];
      });
      return;
    }

    if (changedOrder.some((automobile) => automobile.id === item.id)) {
      setChangedOrders((prevServices) => {
        // Replacing the existing item
        return prevServices.map((automobile) =>
          automobile.id === item.id ? item : automobile
        );
      });
    } else {
      setChangedOrders((prevServices) => {
        // Add the new item
        return [...prevServices, item];
      });
    }
  };

  const onSave = async () => {
    try {
      const updatePromises = changedOrder.map(async (item) => {
        const formattedItem = {
          ...item,
          price: parseFloat(item.price.replace("$", "")),
        };
        await axios.patch(`/api/order/${formattedItem.id}`, formattedItem);
      });

      // Wait for all promises to settle
      await Promise.all(updatePromises);
      router.refresh();
      toast.success("success baby you will get it");
      window.location.reload();
    } catch (error: any) {
      toast.error("something went wrong");
    }
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {},
    meta: {
      updateData: (row: any, columnId: any, value: any) =>
        setData((old) =>
          old.map((_row, index) => {
            if (index === row.index) {
              updateItem({ ...row.original, [columnId]: value });

              return {
                ..._row,
                [columnId]: value,
              };
            }
            return _row;
          })
        ),
    },
  });

  return (
    <div className="overflow-scroll">
      <div className="mb-2 rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Button onClick={() => onSave()} size={"lg"} variant="default">
        SAVE CHANGES
      </Button>
    </div>
  );
}
