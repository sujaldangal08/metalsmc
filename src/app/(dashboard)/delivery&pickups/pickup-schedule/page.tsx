// pages/index.tsx
"use client";
import FileStats from "@/app/shared/file/dashboard/file-stats";
import FilterIcon from "@/components/icons/FilterIcon";
import LeftIcon from "@/components/icons/LeftIcon";
import RightArrowIcon from "@/components/icons/RightIcon";
import TableCard from "@/components/pages/pickup-schedule/table-card";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/file-upload/upload-zone";
import { getAllPickupRoutes } from "@/features/api/schedule-module/pickupRoute.api";
import React, { useState } from "react";
import { Input } from "rizzui";
import { SearchIcon } from "@public/assets/Icons";
import useSWR from "swr";

const pickupStatsData = [
  {
    id: 1,
    title: "Total Pickups",
    metric: "1260",
    fill: "#37A05F",
    percentage: 12,
    increased: true,
    decreased: false,
    value: "+32.40",
  },
  {
    id: 2,
    title: "Pending Pickups",
    metric: "1260",
    fill: "#0A68EF",
    percentage: 12,
    increased: true,
    decreased: false,
    value: "+32.40",
  },
  {
    id: 3,
    title: "Completed Pickups",
    metric: "1260",
    fill: "#FF6464",
    percentage: 12,
    increased: true,
    decreased: false,
    value: "+32.40",
  },
  {
    id: 4,
    title: "Today's Pickups",
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

  const { data, error, isLoading } = useSWR("pickup-data", getAllPickupRoutes);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="bg-gray-100 py-5">
        <h1 className="font-semibold text-md text-[#706F6F]">
          Pickup Schedule
        </h1>
        <p className=" text-sm text-[#706F6F] pb-4 mt-2">
          Manage Pickup Schedule
        </p>
        <div className="mt-2 pb-3">
          <FileStats data={pickupStatsData} />
        </div>

        <h1 className="font-semibold text-md mt-4">Pickup Schedule Table</h1>
        <div className="flex gap-3 w-full items-center  mt-2">
          <Input
            prefix={<SearchIcon />}
            placeholder="Search by name, phone or email"
            className="w-1/3"
            inputClassName="bg-white ring-gray-dark"
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
            {data?.routes.data.map((routeData) => (
              <TableCard routeData={routeData} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PickupSchedulePage;
