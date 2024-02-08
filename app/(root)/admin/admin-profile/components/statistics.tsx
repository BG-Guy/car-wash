import { calcPrecentage } from "@/lib/utils";
import React, { useState } from "react";
import { StatisticsCard } from "./statistics-card";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";

interface AdminStatisticsProps {
  formattedOrdersByMonth: any[];
}

const AdminStatistics: React.FC<AdminStatisticsProps> = async ({
  formattedOrdersByMonth,
}) => {
  // const last12Months = generateLast12MonthsData();
  const [monthIdx, setMonthIdx] = useState(11);
  const [monthData, setMonthData] = useState(formattedOrdersByMonth[monthIdx]);
  const [monthsData, setMonthsData] = useState(formattedOrdersByMonth);

  console.log("🚀 ~ monthData:", monthData);
  console.log("🚀 ~ formattedOrdersByMonth:", formattedOrdersByMonth);

  // const [monthlyOrders, setMonthlyOrders] = useState<any>(
  //   getMonthlyOrders(last12Months[monthIdx].month.idx)
  // );
  const handlePagination = (diff: number) => {
    setMonthIdx(monthIdx + diff);
    setMonthData(monthsData[monthIdx]);
    console.log("🚀 ~ monthData:", monthData);
  };

  const getTotalCompletedOrders = () => {
    const result = formattedOrdersByMonth[monthIdx].orders.filter(
      (order: any) => {
        return order.status === "COMPLETE";
      }
    );

    return result.length;
  };

  const getTotalCanceledOrders = () => {
    const result = formattedOrdersByMonth[monthIdx].orders.filter(
      (order: any) => {
        return order.status === "CANCELLED";
      }
    );
    return result.length;
  };

  const getSatisfactionRate = () => {
    const totalOrders = formattedOrdersByMonth[monthIdx].orders.length;
    console.log("🚀 ~ getSatisfactionRate ~ totalOrders:", totalOrders);

    const completedOrders = formattedOrdersByMonth[monthIdx].orders.filter(
      (order: any) => order.status === "COMPLETE"
    ).length;
    console.log("🚀 ~ getSatisfactionRate ~ completedOrders:", completedOrders);
    const satisfactionRate = calcPrecentage(
      completedOrders,
      totalOrders
    )?.toFixed(1);
    if (!satisfactionRate) return "0%";
    return `${satisfactionRate + "%"}`;
  };

  const getTotalOrders = () => {
    return formattedOrdersByMonth[monthIdx].orders.length;
  };

  return (
    formattedOrdersByMonth && (
      <div className="p-2 flex flex-col w-full">
        <div className="flex flex-col sm:w-[480px] w-[300px] gap-2">
          <div className="flex justify-between gap-2">
            <div className="HEADER h-[100px] flex flex-col ">
              <span className="text-[36px] font-sans">
                {formattedOrdersByMonth[monthIdx].month.name}
              </span>
              <span className="text-[24px] font-inter font-semibold ">
                {formattedOrdersByMonth[monthIdx].year}
              </span>
            </div>
            <div className="flex">
              <button
                disabled={monthIdx === 0}
                onClick={() => handlePagination(-1)}
                className="flex"
              >
                <GrFormPreviousLink size={40} className="mt-auto" />
              </button>
              <button
                disabled={monthIdx === 11}
                onClick={() => handlePagination(1)}
                className="flex"
              >
                <GrFormNextLink size={40} className="mt-auto" />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <StatisticsCard
              title="Completed Orders"
              fn={getTotalCompletedOrders()}
            />
            <StatisticsCard
              title="Canceled Orders"
              fn={getTotalCanceledOrders()}
            />

            <StatisticsCard
              title="Stasifaction Rate"
              fn={getSatisfactionRate()}
            />

            <StatisticsCard title="Total Orders" fn={getTotalOrders()} />
          </div>
        </div>
      </div>
    )
  );
};

export default AdminStatistics;
