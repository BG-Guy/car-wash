import { Edit, Trash } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AlertModal } from "@/components/modals/alert-modal";
import { useState } from "react";
import { toast } from "sonner";
import { ServiceColumn } from "../types";

interface CellActionProps {
  data: ServiceColumn;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onDelete = async () => {
    try {
      await axios.delete(`/api/services/${data.id}`);
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
      <Edit className="cursor-pointer" />
      <Trash className="cursor-pointer" onClick={() => setOpen(true)} />
    </div>
  );
};
