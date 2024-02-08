"use client";
import { AdminOrderColumn, columns } from "./column";
import { Switch } from "@/components/ui/switch";
import { OrdersList } from "./orders-list";
import { OrdersTable } from "./orders-table";
import AdminStatistics from "./statistics";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormattedOrder } from "@/types";

interface ClientProps {
  ordersToTable: AdminOrderColumn[];
  formattedOrders: (FormattedOrder | undefined)[];
  formattedOrdersByMonth: any[];
}

export const Client: React.FC<ClientProps> = ({
  ordersToTable,
  formattedOrders,
  formattedOrdersByMonth,
}) => {
  const [display, setDisplay] = useState("TABLE");

  const handleOnDisplay = () => {
    if (display === "TABLE") setDisplay("GRID");
    if (display === "GRID") setDisplay("TABLE");
  };

  const handleClientDisplay = () => {
    if (display === "TABLE") {
      return <OrdersTable initialData={ordersToTable} columns={columns} />;
    }
    if (display === "GRID") {
      return (
        <OrdersList
          orders={formattedOrders}
          className="sm:w-[50%] lg:w-[75%] sm:grid 
           grid-rows-auto grid-cols-auto grid-flow-dense grid-container w-screen max-h-screen inline-block gap-2"
        />
      );
    }
  };

  return (
    <div className="w-full">
      <Tabs defaultValue="orders" className="w-full">
        <TabsList>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="statistics">Statistics</TabsTrigger>
        </TabsList>
        <TabsContent value="orders">
          <div className="flex mb-2">
            <Switch
              checked={display === "TABLE"}
              onCheckedChange={handleOnDisplay}
            />
          </div>
          {handleClientDisplay()}
        </TabsContent>
        <TabsContent value="statistics">
          <AdminStatistics formattedOrdersByMonth={formattedOrdersByMonth} />
        </TabsContent>
      </Tabs>
    </div>
  );
};
