// pages/index.tsx
"use client";
import FileStats from "@/app/shared/file/dashboard/file-stats";
import FilterIcon from "@/components/icons/FilterIcon";
import LeftIcon from "@/components/icons/LeftIcon";
import RightArrowIcon from "@/components/icons/RightIcon";
import TableCard from "@/components/pages/delivery-schedule/table-card";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/file-upload/upload-zone";
import { getAllDeliverySchedule } from "@/features/api/schedule-module/deliverySchedule.api";
import { getAllPickupRoutes } from "@/features/api/schedule-module/pickupRoute.api";
import React, { useEffect, useState } from "react";
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
  const [tabIndex, setTabIndex] = useState<number>(0);

  const {
    data: allDeliverySchedule,
    error,
    isLoading,
  } = useSWR("delivery-data", getAllDeliverySchedule);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  // useEffect(() => {}, []);

  return (
    <>
      <div className="bg-gray-100 py-5">
        <h1 className="font-semibold text-lg text-[#706F6F]">
          Delivery Schedule{" "}
        </h1>
        <p className=" text-sm text-[#706F6F] pb-4 mt-2">
          {" "}
          Manage Delivery Schedule
        </p>
        <div className="mt-2 pb-3">
          <FileStats data={pickupStatsData} />
        </div>

        <h1 className="font-semibold text-md mt-4">Delivery Schedule Table</h1>
        <div className="flex gap-3 w-full items-center   mt-2">
          <input
            className="bg-white h-10 text-sm focus:outline-none rounded-md outline-none"
            placeholder="Search by name,phone or email"
            onChange={(e) => {
              // searchHandler(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-between items-center my-4">
          <div className="flex gap-5">
            <Button
              className="!w-[200px] flex items-center rounded-3xl text-sm font-semibold"
              type="submit"
            >
              <LeftIcon />
              <span className="mx-2">December 2023</span>
              <RightArrowIcon />
            </Button>
            <button
              className={`px-[40px] h-10 text-base font-regular e shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-lg ${
                tabIndex == 0
                  ? " text-white focus-visible:outline-primary bg-primary"
                  : " text-primary focus-visible:outline-white bg-white"
              } rounded-md`}
              onClick={() => {
                setTabIndex(0);
              }}
            >
              Day
            </button>
            <button
              className={`px-[20px] h-10 text-base font-regular e shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-lg ${
                tabIndex == 1
                  ? " text-white focus-visible:outline-primary bg-primary"
                  : " text-primary focus-visible:outline-white bg-white"
              } rounded-2xl`}
              onClick={() => {
                setTabIndex(1);
              }}
            >
              Month
            </button>
            <button
              className={`px-[40px] h-10 text-base font-regular e shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-lg ${
                tabIndex == 2
                  ? " text-white focus-visible:outline-primary bg-primary"
                  : " text-primary focus-visible:outline-white bg-white"
              } rounded-md`}
              onClick={() => {
                setTabIndex(2);
              }}
            >
              Year
            </button>
          </div>
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
              className="py-5 rounded-lg w-full text-white text-sm font-semibold"
              type="submit"
            >
              <div className="flex items-center">
                <span className="">+Assign New Task</span>
              </div>
            </Button>
          </div>
        </div>
        <div className=" ">
          <div className="py-3 bg-white rounded-t-md">
            <p className="font-semibold text-sm  pl-4">Date: dd/mm/yy</p>
          </div>

          <div className="flex flex-col gap-4">
            {allDeliverySchedule?.data?.map((deliveryData) => (
              <TableCard deliveryData={deliveryData?.delivery[0]} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PickupSchedulePage;
