"use client";
import { AlertModal } from "@/components/modals/alert-modal";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AdminOrderColumn } from "./column";
import { Trash } from "lucide-react";
import { toast } from "sonner";

interface ActionsCellProps {
  data: AdminOrderColumn;
}

export const ActionsCell: React.FC<ActionsCellProps> = ({ data }) => {
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
    <div className="flex items-center">
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <button onClick={() => setOpen(true)}>
        <Trash size={20} />
      </button>
    </div>
  );
};
