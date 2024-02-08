"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Header from "../dashboard/Header";
import SubmitBtn from "./SubmitBtn";
import useCart from "@/hooks/use-cart";
import { CartBtn } from "./cart-btn";

interface OrderSummaryProps {
  className?: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ className }) => {
  const cart = useCart();
  const items = useCart((state) => state.items);

  const getTotalPrice = () => {
    const cartItems = items;
    const totalPrice = cartItems.reduce((total: any, currItem: any) => {
      currItem.price = currItem.price.replace("$", "");
      return total + parseInt(currItem.price);
    }, 0);
    return totalPrice;
  };

  const orderData = {
    items,
    totalPrice: getTotalPrice(),
  };

  const onRemove = (id: string) => {
    cart.removeItem(id);
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  const getSelectedVehicle = () => {
    return items
      .filter((item) => item.type)
      .map((item) => <CartBtn key={item.id} onRemove={onRemove} item={item} />);
  };

  const getSelectedFeatures = () => {
    return items
      .filter((item) => item.name)
      .map((item) => <CartBtn key={item.id} onRemove={onRemove} item={item} />);
  };

  return (
    <>
      <div
        className={cn("p-4 rounded-xl border-[1px] border-gray-200", className)}
      >
        <Header
          className="row-span-1"
          message={"Cart Summary"}
          type={"sub"}
          align="center"
        />
        <div className="flex-1 flex w-full gap-8 justify-evenly mb-6 ">
          <div className="flex flex-col w-1/2">
            <Header message={"Features"} type={"sm"} align="center" />
            <div className="flex flex-wrap gap-4">{getSelectedFeatures()}</div>
          </div>
          <div className="flex flex-col w-1/2">
            <Header message={"Vehicles"} type={"sm"} align="center" />
            <div className="flex flex-wrap gap-4">{getSelectedVehicle()}</div>
          </div>
        </div>
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold">
            Total Price: {getTotalPrice()}$
          </h1>
          <SubmitBtn className="w-1/2 m-auto p-1" orderData={orderData} />
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
