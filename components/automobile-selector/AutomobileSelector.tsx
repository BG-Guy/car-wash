import { Automobile } from "@prisma/client";
import AutomobileBtn from "./AutomobileBtn";
import { AutomobileColumn } from "@/app/(root)/admin/automobiles/types";

interface AutomobileSelectorProps {
  className?: string;
  formattedAutomobiles: AutomobileColumn[];
}

const AutomobileSelector: React.FC<AutomobileSelectorProps> = ({
  className,
  formattedAutomobiles,
}) => {
  return (
    <div className="h-1/2 w-full">
      <div className="grid2x2-layout">
        {formattedAutomobiles.map((automobileData) => (
          <AutomobileBtn
            key={automobileData.id}
            automobileData={automobileData}
          />
        ))}
      </div>
    </div>
  );
};

export default AutomobileSelector;
