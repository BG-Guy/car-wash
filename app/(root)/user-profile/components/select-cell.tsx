import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { getAutomobilesTypes, getServicesTypes } from "../functions";
import { useEffect } from "react";
import { UserOrdersColumn } from "../types";
import { getFormattedAutomobiles } from "@/functions/automobiles";
import { getFormattedServices } from "@/functions/services";

interface SelectCellProps {
  data: UserOrdersColumn;
  selectLabel: string;
}

export const SelectCell: React.FC<SelectCellProps> = async ({
  data,
  selectLabel,
}) => {
  const router = useRouter();
  useEffect(() => {
    const getSelectOptions = async () => {
      if (selectLabel === "AUTOMOBILES") {
        const data = await getFormattedAutomobiles();
        console.log("🚀 ~ getSelectOptions ~ data:", data);
      }
      if (selectLabel === "SERVICES") {
        const data = await getFormattedServices();
        console.log("🚀 ~ getSelectOptions ~ data:", data);
      }
    };

    // Call the function when the component mounts
    getSelectOptions();
  }, []);

  // const onChangeOrderStatus = async (status: string) => {
  //   try {
  //     await axios.patch(`/api/order/${data.id}`, { status });
  //     toast.success("success baby you will get it");
  //     router.refresh();
  //     // window.location.reload();
  //   } catch (error) {
  //     toast.error(
  //       "Make sure you removed all products using this category first."
  //     );
  //   }
  // };
  const automobileTypes = ["Private", "4X4", "Truck", "Motorcycle"];

  const servicesTypes = ["Wax", "Polish", "Interrior", "Exterrior"];

  const handleSelectLabel =
    selectLabel === "AUTOMOBILE" ? automobileTypes : servicesTypes;

  const onChangeSelectLabel = (value: string) => {};

  return (
    <div>
      <Select onValueChange={(value) => onChangeSelectLabel(value)}>
        <SelectTrigger className={`w-[130px] ${data.automobile}`}>
          <SelectValue placeholder={data.} className={``} />
        </SelectTrigger>
        <SelectContent>
          {handleSelectLabel.map((item) => (
            <SelectItem key={item} value={item}>{item}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
