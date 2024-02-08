"use client";

import { Loader } from "@/components/ui/loader";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const Loading = () => {
  return (
    <div className="flex flex-col h-full w-full p-2">
      <Tabs defaultValue="orders" className="w-full">
        <TabsList>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="statistics">Statistics</TabsTrigger>
        </TabsList>
        <TabsContent value="orders"></TabsContent>
      </Tabs>
      <div className="flex flex-col sm:w-[480px] w-[300px] gap-2">
        <div className="flex justify-between gap-2">
          <Skeleton className="w-1/3 h-[30px]"></Skeleton>
          <div className="flex">
            <button>
              <GrFormPreviousLink size={40} />
            </button>
            <button>
              <GrFormNextLink size={40} />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-24 w-[230px]"></Skeleton>
          <Skeleton className="h-24 w-[230px]"></Skeleton>
          <Skeleton className="h-24 w-[230px]"></Skeleton>
          <Skeleton className="h-24 w-[230px]"></Skeleton>
        </div>
      </div>
    </div>
  );
};

export default Loading;
