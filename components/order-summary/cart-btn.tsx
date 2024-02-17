import { FormattedAutomobile, FormattedService } from "@/types";
import { IoMdClose } from "react-icons/io";

import React from "react";
import { cartItem } from "@/hooks/use-cart";

interface CartBtnProps {
  item: cartItem;
  onRemove: (id: string) => void;
}

export const CartBtn: React.FC<CartBtnProps> = ({ item, onRemove }) => {
  const name = item.type ? item.type : item.name;
  return (
    <div className="py-1 cart-btn">
      {name}
      <button key={item.id} className="absolute left-0 top-0">
        <IoMdClose
          // color="black"
          fill="black"
          size={12}
          onClick={() => onRemove(item.id)}
          className="rounded-3xl transition mr-3 borderData-[2px] borderData-gray-950"
        />
      </button>
    </div>
  );
};
