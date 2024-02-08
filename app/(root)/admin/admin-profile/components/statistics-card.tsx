import { Card, CardContent } from "@/components/ui/card";
import React from "react";

interface StatisticsCardProps {
  title: string;
  fn: any;
}

export const StatisticsCard: React.FC<StatisticsCardProps> = ({
  title,
  fn,
}) => {
  return (
    <>
      <Card className="h-24 w-[230px]">
        <CardContent className="relative h-full w-full">
          <h1 className="text-2xl font-inter">{title}</h1>
          <h3 className="text-3xl font-semibold absolute right-2 bottom-0">
            {fn}
          </h3>
        </CardContent>
      </Card>
    </>
  );
};
