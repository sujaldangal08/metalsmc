// pages/index.tsx
"use client";
import FileStats from "@/app/shared/file/dashboard/file-stats";
import FilterIcon from "@/components/icons/FilterIcon";
import LeftIcon from "@/components/icons/LeftIcon";
import RightArrowIcon from "@/components/icons/RightIcon";
import TableCard from "@/components/pages/pickup-schedule/table-card";
import { Button } from "rizzui";
import { LoadingSpinner } from "@/components/ui/file-upload/upload-zone";
import { getAllPickupRoutes } from "@/features/api/schedule-module/pickupRoute.api";
import React, { useEffect, useState } from "react";
import { Input } from "rizzui";
import { SearchIcon } from "@public/assets/Icons";
import useSWR from "swr";
import Breadcrumb from "@/components/ui/breadcrumb";
import cn from "@/utils/class-names";

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

async function getLocationFromCoordinates(latitude: number, longitude: number) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Check if the response status is OK
    if (data.status === "OK") {
      // Extract the formatted address from the first result
      return data;
    } else {
      // Handle error
      console.error(
        "Geocoding request failed:",
        data.error_message || data.status
      );
      return null;
    }
  } catch (error) {
    console.error("Error fetching geocoding data:", error);
    return null;
  }
}

const PickupSchedulePage: React.FC = () => {
  const [time, setTime] = useState<"day" | "month" | "year">("day");

  const { data, error, isLoading } = useSWR("pickup-data", getAllPickupRoutes);

  // Example usage
  const latitude = 27.712094; // Example latitude
  const longitude = 85.3281912; // Example longitude

  useEffect(() => {
    getLocationFromCoordinates(latitude, longitude)
      .then((location) => {
        console.log("Location:", location);
      })
      .catch((error) => {
        console.error("Error getting location:", error);
      });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="py-5">
        <Breadcrumb>
          <Breadcrumb.Item href="/pickup-schedule">
            Pickup Schedule
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="mt-2 pb-3">
          <FileStats data={pickupStatsData} />
        </div>

        <h1 className="font-medium text-md mt-4 text-gray-dark">
          Pickup Schedule Table
        </h1>
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
            <div className="px-3 bg-white text-black flex items-center rounded-full">
              <Button className="bg-white hover:bg-white">
                <LeftIcon />
              </Button>
              <span className="mx-2 px-4 text-sm font-medium">
                December 2023
              </span>
              <Button className="bg-white hover:bg-white">
                <RightArrowIcon />
              </Button>
            </div>
            <Button
              className={cn(
                `w-[100px] font-regular rounded-full text-md ${
                  time === "day"
                    ? "text-white bg-primary hover:bg-primary-dark"
                    : " text-primary bg-white hover:bg-gray-50"
                }`
              )}
              onClick={() => {
                setTime("day");
              }}
            >
              Day
            </Button>
            <Button
              className={cn(
                `w-[100px] font-regular rounded-full text-md ${
                  time === "month"
                    ? "text-white bg-primary hover:bg-primary-dark"
                    : " text-primary bg-white hover:bg-gray-50"
                }`
              )}
              onClick={() => {
                setTime("month");
              }}
            >
              Month
            </Button>
            <Button
              className={cn(
                `w-[100px] font-regular rounded-full text-md ${
                  time === "year"
                    ? "text-white bg-primary hover:bg-primary-dark"
                    : " text-primary bg-white hover:bg-gray-50"
                }`
              )}
              onClick={() => {
                setTime("year");
              }}
            >
              Year
            </Button>
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
        <div>
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
