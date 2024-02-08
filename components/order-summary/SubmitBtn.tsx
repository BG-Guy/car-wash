"use client";
import { Automobile, OrderItem, Service } from "@prisma/client";
import axios from "axios";
import { useState } from "react";
// import { Toaster } from "@/components/ui/sonner";
import { Button } from "../ui/button";
import useCart, { cartItem } from "@/hooks/use-cart";
import { AlertModal } from "../modals/alert-modal";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Order = {
  items: cartItem[];
  totalPrice: number;
};

interface SubmitBtnProps {
  orderData: Order;
  className: string;
}

const SubmitBtn: React.FC<SubmitBtnProps> = ({ orderData, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const isValid = () => {
    return orderData.items.some((item: cartItem) => item.type);
  };
  const cart = useCart();

  const onResetCart = () => {
    cart.removeAll();
  };

  const [loading, setLoading] = useState(false);

  const orderDataItemIds = orderData.items.map((orderDataItem: cartItem) => {
    return orderDataItem.id;
  });

  const onSubmit = async () => {
    if (!isValid) return toast.error("Please select a vehicle");

    try {
      setLoading(true);
      await axios.post(`/api/order`, orderData);
      toast.success("success baby you will get it");
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsOpen(false);
      onResetCart();
      setLoading(false);
    }
  };

  return (
    <>
      <AlertModal
        onConfirm={onSubmit}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        loading={loading}
      />
      <Button
        className="w-36 ml-auto"
        variant={"destructive"}
        size={"lg"}
        disabled={!isValid() || loading}
        onClick={() => setIsOpen(true)}
      >
        TO CHECKOUT
      </Button>
    </>
  );
};

export default SubmitBtn;
