import { Heading } from "@/components/ui/heading";
import { columns } from "./column";
import { ServiceForm } from "./service-form";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { ServiceTable } from "./services-table";
import { ServiceColumn } from "../types";

interface ServiceClientProps {
  data: ServiceColumn[];
}

export const ServiceClient: React.FC<ServiceClientProps> = ({ data }) => {
  return (
    <div className="flex flex-col rounded-xl h-full w-full">
      <Heading
        title={`Services`}
        description="Manage services for your store"
      />
      <Separator orientation="horizontal" className="my-4" />
      <ServiceForm />
      <Separator orientation="vertical" className="mb-4" />
      <ServiceTable columns={columns} initialData={data} />
    </div>
  );
};
