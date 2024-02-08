import { cn } from "@/lib/utils";
// import Button from "../button";
import FeatureBtn from "./FeatureBtn";
import { FormattedService } from "@/types";

interface ServiceSelectorProps {
  className?: string;
  formattedServices: FormattedService[];
}

const ServiceSelector: React.FC<ServiceSelectorProps> = ({
  className,
  formattedServices,
}) => {
  return (
    <div className={cn("grid2x2-layout w-full", className)}>
      {formattedServices.map((serviceData) => (
        <FeatureBtn key={serviceData.id} serviceData={serviceData} />
      ))}
    </div>
  );
};

export default ServiceSelector;
