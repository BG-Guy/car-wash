import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { UserOrdersTable } from "./user-orders-table";
import { UserOrdersColumn, columns } from "./column";

interface ClientProps {
  ordersToTable: UserOrdersColumn[];
}

export const Client: React.FC<ClientProps> = ({ ordersToTable }) => {
  return (
    <div className="flex flex-col rounded-xl h-full w-full">
      <Heading title={`Your Orders`} description="View your orders history" />
      <Separator orientation="horizontal" className="my-4" />
      <UserOrdersTable columns={columns} initialData={ordersToTable} />
    </div>
  );
};
