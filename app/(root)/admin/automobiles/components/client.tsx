import { Heading } from "@/components/ui/heading";
import { AutomobileColumn, columns } from "./column";
import { AutomobileForm } from "./automobile-form";
import { Separator } from "@/components/ui/separator";
import { AutomobileTable } from "./automobile-table";

interface AutomobileClientProps {
  data: AutomobileColumn[];
}

export const AutomobileClient: React.FC<AutomobileClientProps> = ({ data }) => {
  return (
    <div className="flex flex-col rounded-xl h-full w-full">
      <Heading
        title={`Automobiles`}
        description="Manage services for your store"
      />
      <Separator orientation="horizontal" className="my-4" />
      <AutomobileForm />
      <Separator orientation="vertical" className="mb-4" />
      <AutomobileTable columns={columns} initialData={data} />
    </div>
  );
};
