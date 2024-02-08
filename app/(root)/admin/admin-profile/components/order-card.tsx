"use client";
import { AlertModal } from "@/components/modals/alert-modal";
import { OrderSummaryModal } from "@/components/modals/order-summary-modal";
import { Alert } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { FormattedOrder } from "@/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiCheckCircle } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import { toast } from "sonner";

interface OrderCardProps {
  order?: FormattedOrder;
  className?: string;
}

export const OrderCard: React.FC<OrderCardProps> = ({ order, className }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onCancel = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/order/${order?.id}`);
      toast.success("success baby you will get it");
      router.refresh();
    } catch (error) {
      console.log("🚀 ~ file: order-card.tsx:24 ~ onCancel ~ error:", error);
      toast.error("error, relax you got it. fix it.");
    } finally {
      setLoading(false);
    }
  };

  // const onComplete = async () => {
  //   try {
  //     setLoading(true);
  //     await axios.patch(`/api/order/${order?.id}`, { isComplete: true });
  //     toast.success("success baby you will get it");
  //     router.refresh();
  //   } catch (error) {
  //     console.log("🚀 ~ file: order-card.tsx:24 ~ onCancel ~ error:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    order && (
      <>
        <OrderSummaryModal
          order={order}
          onCancel={() => onCancel()}
          onClose={() => setOpen(false)}
          onComplete={() => console.log("onComplete")}
          isOpen={open}
          loading={false}
        />

        <div
          className={cn(
            "min-w-[340px] h-[120px] border border-black rounded-xl mt-2 overflow-y-scroll",
            className
          )}
        >
          <div className="order-items flex flex-col w-[70%]">
            <h3 className="text-2xl font-semibold mx-auto mb-2">
              {order.automobile.type}
            </h3>
            <div className="features flex gap-2 w-full flex-wrap">
              {order.services.map((service: any) => (
                <span key={service.id} className="text-lg w-[45%] text-center">
                  {service.name}
                </span>
              ))}
            </div>
          </div>
          <div className="order-actions grid2x2-layout w-[30%]">
            <button
              onClick={() => onCancel()}
              className="col-start-2 col-end-3"
            >
              <MdOutlineCancel size={50} />
            </button>
            <div className="row-start-2 col-start-1 col-end-3 w-full ">
              <button
                onClick={() => setOpen(true)}
                className="w-full p-1 h-12 rounded-sm bg-primary text-primary-foreground hover:bg-primary/90"
              >
                More Info
              </button>
            </div>
          </div>
        </div>
      </>
    )
  );
};
