// pages/index.tsx
"use client";
import React from "react";
import Card from "./card";
import Table from "./table";
import { Button } from "rizzui";
import { useState } from "react";
import LeftIcon from "@/components/icons/LeftIcon";
import RightArrowIcon from "@/components/icons/RightIcon";
import FilterIcon from "@/components/icons/FilterIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import TableCard from "./TableCard";

// Add more driver data objects as needed

const Home: React.FC = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <>
      <div className="bg-gray-100 p-5">
        <h1 className="font-semibold text-md">PickUp Schedule Table</h1>
        <div className="flex gap-3 items-center   mt-2">
          <input
            className="bg-white h-10 text-sm focus:outline-none rounded-md outline-none"
            placeholder="Search by name,phone or email"
            onChange={(e) => {
              // searchHandler(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-between mt-3 pb-2">
          <div className="flex gap-5 items-start">
            <Button
              className="py-5 bg-gray-200 rounded-3xl text-black text-sm font-semibold"
              type="submit"
            >
              <div className="flex items-center">
                <LeftIcon />
                <span className="mx-2">December 2023</span>
                <RightArrowIcon />
              </div>
            </Button>
            <button
              className={`px-[40px] h-10 text-base font-regular e shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-xl ${
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
              className={`px-[40px] h-10 text-base font-regular e shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-xl ${
                tabIndex == 1
                  ? " text-white focus-visible:outline-primary bg-primary"
                  : " text-primary focus-visible:outline-white bg-white"
              } rounded-md`}
              onClick={() => {
                setTabIndex(1);
              }}
            >
              Month
            </button>
            <button
              className={`px-[40px] h-10 text-base font-regular e shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-xl${
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
          <div className="flex gap-5 items-end mt-2 ">
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
              className="py-5 bg-primary rounded-lg w-full text-white text-sm font-semibold"
              type="submit"
            >
              <div className="flex items-center">
                <span className="">+Assign New Task</span>
              </div>
            </Button>
          </div>
        </div>
        <div className=" rounded-md bg-white">
          <div className="mt-2">
            <p className="font-semibold text-sm pb-3 pl-10 ">Date: dd/mm/yy</p>
          </div>
          <TableCard />
            <TableCard />
            <TableCard />
        </div>
      </div>
    </>
  );
};

export default Home;
