import { formatter } from "@/lib/utils";
import { AutomobileClient } from "./components/client";
import prismadb from "@/lib/prismadb";
import { FormattedAutomobile } from "@/types";
import { getFormattedAutomobiles } from "@/functions/automobiles";

const AutomobilesPage = async () => {
  const automobiles = await prismadb.automobile.findMany();

  const formattedAutomobiles = await getFormattedAutomobiles();

  return (
    <div>
      <AutomobileClient data={formattedAutomobiles} />
    </div>
  );
};

export default AutomobilesPage;
