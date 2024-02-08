import { FormattedOrder } from "@/types";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Modal } from "../ui/modal";

interface OrderSummaryModalProps {
  order: FormattedOrder;
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
  onCancel: () => void;
  loading: boolean;
}

export const OrderSummaryModal: React.FC<OrderSummaryModalProps> = ({
  order,
  isOpen,
  onClose,
  onCancel,
  onComplete,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Modal
      title="Order Summary"
      description="Order Summary"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex flex-col gap-2">
        <div className="header">
          <h1>Order By: {order?.user.name}</h1>
          <h3>Email: {order?.user.email}</h3>
        </div>
        <div className="flex flex-col w-full">
          <h3 className="text-xl font-semibold mb-2">
            Automobile type: {order.automobile.type}
          </h3>
          <div className="features flex gap-2 w-full flex-wrap">
            <h3 className="text-xl font-semibold">Services ordered:</h3>
            {order.services.map((service: any) => (
              <span key={service.id} className="text-lg text-center">
                {service.name}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <h3 className="text-xl font-semibold">Ordered at: </h3>
            <span className="text-xl"> {order?.createdAt}</span>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Order Notes</h3>
            <textarea name="" id="" cols={30} rows={10}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              alias voluptatum soluta illo itaque recusandae sint qui nisi quia
              facilis.
            </textarea>
          </div>
        </div>
        <div className="flex justify-evenly">
          <Button onClick={() => onComplete()} variant={"default"} size={"lg"}>
            Order Complete
          </Button>
          <Button
            onClick={() => onCancel()}
            variant={"destructive"}
            size={"lg"}
          >
            Cancel Order
          </Button>
        </div>
      </div>
    </Modal>
  );
};
