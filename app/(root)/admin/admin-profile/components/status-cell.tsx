import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { AdminOrderColumn } from "./column";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface StatusCellProps {
  data: AdminOrderColumn;
}

export const StatusCell: React.FC<StatusCellProps> = ({ data }) => {
  const router = useRouter();
  const onChangeOrderStatus = async (status: string) => {
    try {
      await axios.patch(`/api/order/${data.id}`, { status });
      toast.success("success baby you will get it");
      router.refresh();
      // window.location.reload();
    } catch (error) {
      toast.error(
        "Make sure you removed all products using this category first."
      );
    }
  };

  const handleStatusClass = (status: string) => {
    if (status === "COMPLETE") return "bg-green-500";
    if (status === "PENDING") return "bg-orange-500";
    if (status === "CANCELED") return "bg-red-500";
  };
  return (
    <div>
      <Select onValueChange={(value) => onChangeOrderStatus(value)}>
        <SelectTrigger
          className={`w-[130px] ${handleStatusClass(data.status)}`}
        >
          <SelectValue placeholder={data.status} className={``} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="PENDING">PENDING</SelectItem>
          <SelectItem value="COMPLETE">COMPLETE</SelectItem>
          <SelectItem value="CANCELLED">CANCELLED</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
