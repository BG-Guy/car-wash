"use client";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler, useState } from "react";
import { Card } from "../ui/card";
import { AutomobileColumn } from "@/app/(root)/admin/automobiles/types";

interface AutomobileBtnProps {
  automobileData: AutomobileColumn;
}

const AutomobileBtn: React.FC<AutomobileBtnProps> = ({ automobileData }) => {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(automobileData);
  };
  const [isActive, setIsActive] = useState(false);
  return (
    <button
      className={`btn-primary
      ${isActive ? "bg-slate-500" : "bg-sky-950"}`}
      key={automobileData.id}
      onClick={onAddToCart}
    >
      {automobileData.type}
    </button>
  );
};

export default AutomobileBtn;
