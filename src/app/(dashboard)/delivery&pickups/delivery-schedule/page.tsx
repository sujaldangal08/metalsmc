// pages/index.tsx
"use client";
import FileStats from "@/app/shared/file/dashboard/file-stats";
import FilterIcon from "@/components/icons/FilterIcon";
import TableCard from "@/components/pages/delivery-schedule/table-card";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/file-upload/upload-zone";
import { getAllDeliverySchedule } from "@/features/api/schedule-module/deliverySchedule.api";
import { Route } from "@/lib/enums/routes.enums";
import { SearchIcon } from "@public/assets/Icons";
import Link from "next/link";
import React from "react";
import { Input } from "rizzui";
import useSWR from "swr";

const pickupStatsData = [
  {
    id: 1,
    title: "Total Deliveries",
    metric: "1260",
    fill: "#37A05F",
    percentage: 12,
    increased: true,
    decreased: false,
    value: "+32.40",
  },
  {
    id: 2,
    title: "Pending Deliveries",
    metric: "1260",
    fill: "#0A68EF",
    percentage: 12,
    increased: true,
    decreased: false,
    value: "+32.40",
  },
  {
    id: 3,
    title: "Completed Deliveries",
    metric: "1260",
    fill: "#FF6464",
    percentage: 12,
    increased: true,
    decreased: false,
    value: "+32.40",
  },
  {
    id: 4,
    title: "Today's Deliveries",
    metric: "1260",
    fill: "#FFAB00",
    percentage: 12,
    increased: true,
    decreased: false,
    value: "+32.40",
  },
];

const PickupSchedulePage: React.FC = () => {
  const {
    data: allDeliverySchedule,
    error,
    isLoading,
  } = useSWR("delivery-data", getAllDeliverySchedule);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="bg-gray-100 py-5">
        <h1 className="font-semibold text-lg text-[#706F6F]">
          Delivery Schedule
        </h1>
        <p className=" text-sm text-[#706F6F] pb-4 mt-2">
          Manage Delivery Schedule
        </p>
        <div className="mt-2 pb-3">
          <FileStats data={pickupStatsData} />
        </div>
        <h1 className="font-medium text-md mt-4 text-gray-dark">
          Delivery Schedule Table
        </h1>
        <div className="flex gap-3 w-full items-center  mt-2 mb-4 justify-between">
          <Input
            prefix={<SearchIcon />}
            placeholder="Search by name, phone or email"
            className="w-1/3"
            inputClassName="bg-white ring-gray-dark"
            onChange={(e) => {
              // searchHandler(e.target.value);
            }}
          />
          <div className="flex gap-5 ">
            <Button
              className="py-5 bg-white rounded-lg w-3/5 text-black text-sm font-semibold"
              type="submit"
            >
              <div className="flex items-center">
                <FilterIcon />
                <span className="mx-2">Filter</span>
              </div>
            </Button>
            <Button
              color="primary"
              className="py-5 rounded-lg w-full text-white text-sm font-medium"
              type="submit"
            >
              <Link href={Route.AssignDeliverySchedule}>+ Assign New Task</Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-full gap-6">
          {allDeliverySchedule?.data?.map((deliverySchedule) => (
            <TableCard deliverySchedule={deliverySchedule} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PickupSchedulePage;
