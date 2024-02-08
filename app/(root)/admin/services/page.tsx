import { ServiceClient } from "./components/client";
import { getFormattedServices } from "@/functions/services";

const ServicesPage = async () => {
  const formattedServices = await getFormattedServices();

  return (
    <div>
      <ServiceClient data={formattedServices} />
    </div>
  );
};

export default ServicesPage;
