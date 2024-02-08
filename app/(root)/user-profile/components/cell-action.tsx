import { Trash } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AlertModal } from "@/components/modals/alert-modal";
import { toast } from "sonner";
import { UserOrdersColumn } from "../types";

interface CellActionProps {
  data: UserOrdersColumn;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onDelete = async () => {
    try {
      await axios.delete(`/api/order/${data.id}`);
      toast.success("success baby you will get it");
      router.refresh();
      window.location.reload();
    } catch {
      toast.error(
        "Make sure you removed all products using this category first."
      );
    }
  };

  return (
    <div className="flex h-full ml-auto space-x-2">
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <Trash className="cursor-pointer" onClick={() => setOpen(true)} />
    </div>
  );
};
