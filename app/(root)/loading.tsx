"use client";

import Header from "@/components/dashboard/Header";
import { Loader } from "@/components/ui/loader";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex flex-col h-full w-full gap-8">
      <Skeleton className="h-24 sm:w-1/3 w-[70%] GREETING" />
      <div className="flex gap-4">
        <div className="ORDER-MENU flex-1 flex flex-col w-1/2 gap-4 border-gray-200 border-[1px] rounded-xl">
          <div className="automobile-section items-center h-[230px] w-full">
            <Header message={"Order Menu"} type={"sub"} align="center" />
            <Header message={"Vehicles"} type={"sm"} align="center" />
            <div className="grid2x2-layout justify-between">
              <Skeleton className="w-[95%] h-16" />
              <Skeleton className="w-[95%] h-16" />
              <Skeleton className="w-[95%] h-16" />
              <Skeleton className="w-[95%] h-16" />
            </div>
          </div>
          <div className="features-section items-center h-[230px] w-full">
            <Header message={"Features"} type={"sm"} align="center" />
            <div className="grid2x2-layout w-full justify-between">
              <Skeleton className="w-[95%] h-16" />
              <Skeleton className="w-[95%] h-16" />
              <Skeleton className="w-[95%] h-16" />
              <Skeleton className="w-[95%] h-16" />
            </div>
          </div>
        </div>
        <div className="CART-SUMMARY sm:flex sm:flex-col hidden w-1/2 gap-4 border-gray-200 border-[1px] rounded-xl">
          <Header message={"Cart Summary"} type={"sub"} align="center" />
          <div className="FEATURES flex w-full h-[400px] ">
            <div className="flex flex-col w-1/2 h-full  ">
              <Header message={"Features"} type={"sm"} align="center" />

              <div className="FEATURES-LIST flex flex-wrap w-full h-1/2 gap-4 px-4">
                <Skeleton className="w-[45%] h-8" />
                <Skeleton className="w-[45%] h-8" />
                <Skeleton className="w-[45%] h-8" />
                <Skeleton className="w-[45%] h-8" />
              </div>
            </div>
            <div className="flex flex-col w-1/2 h-full  ">
              <Header message={"Vehicles"} type={"sm"} align="center" />

              <div className="AUTOMOBILE-LIST flex flex-wrap w-full h-1/2 gap-4 px-4">
                <Skeleton className="w-[45%] h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
