import OrderController from "../order-controller/OrderController";
import OrderSummary from "../order-summary/OrderSummary";
import Header from "./Header";
import { cn } from "@/lib/utils";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { IoCartSharp } from "react-icons/io5";
import { ExtendedUser } from "@/next-auth";

interface DashboardProps {
  className?: string;
  user?: ExtendedUser;
}

const Dashboard: React.FC<DashboardProps> = ({ className, user }) => {
  return (
    <div className={cn(className, "p-2 gap-4 w-full flex flex-col h-fit ")}>
      <Header
        message={`${
          user ? `Welcome Back ${user?.name}` : "Welcome! Please Login!"
        }`}
        type="main"
        align="start"
        className={`h-24 m-0 billboard-background font-rubik flex items-center justify-center`}
      />
      <div className="flex gap-4 h-fit">
        <OrderController className="flex flex-col shadow-md w-screen md:w-1/2" />
        <OrderSummary className="shadow-md w-screen md:w-1/2 sm:flex sm:flex-col hidden" />
      </div>
      <div className="sm:hidden">
        <Drawer>
          <DrawerTrigger>
            <IoCartSharp
              size={60}
              className="border rounded-full p-2 border-grey bottom-1 left-1 absolute"
            />
          </DrawerTrigger>
          <DrawerContent>
            <OrderSummary className="shadow-md h-fit w-screen md:w-1/2 grid " />
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Dashboard;
