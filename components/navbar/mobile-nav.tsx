import React from "react";
import Logo from "./Logo";
import { MainNav } from "./main-nav";
import { SafeUser } from "@/types";
import UserButton from "./user-button";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { User } from "next-auth";

interface MobileNavProps {
  user: SafeUser | null | undefined | User;
  className: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({ user, className }) => {
  return (
    <div className={cn(className)}>
      <Sheet>
        <SheetTrigger>
          <GiHamburgerMenu size={30} />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <Logo />
          <UserButton pagetype="server" user={user} />
          <MainNav
            className="flex flex-col items-start py-4 text-lg"
            user={user}
          />
        </SheetContent>
      </Sheet>
    </div>
  );
};
