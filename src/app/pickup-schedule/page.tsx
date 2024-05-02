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



// Add more driver data objects as needed

const Home: React.FC = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <>
            <div className="flex gap-3 items-center px-4 rounded-md border-[1px] border-gray-200">
            
            <input 
            
              className="bg-transparent h-10 text-md focus:outline-none rounded-md outline-none"
              placeholder="Search by name,phone or email"
              onChange={(e) => {
                // searchHandler(e.target.value);
              }}
            />
          </div>
      <div className="flex w-full gap-5 items-start mt-10 pb-10">
        <Button className="py-5 bg-gray-200 rounded-3xl  w-1/6 text-black  text-sm font-semibold"  type="submit">
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
              : " text-primary focus-visible:outline-white bg-gray-100"
          } rounded-md`}
          onClick={() => {
            setTabIndex(0);
          }}
        >
          Day
        </button>
        <button
          className={`px-[40px] h-10 text-base font-regular e shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  rounded-xl ${
            tabIndex == 1
              ? " text-white focus-visible:outline-primary bg-primary"
              : " text-primary focus-visible:outline-white bg-gray-100"
          } rounded-md`}
          onClick={() => {
            setTabIndex(1);
          }}
        >
          Month
        </button>
        <button
          className={`px-[40px] h-10 text-base font-regular e shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  rounded-xl${
            tabIndex == 2
              ? " text-white focus-visible:outline-primary bg-primary"
              : " text-primary focus-visible:outline-white bg-gray-100"
          } rounded-md`}
          onClick={() => {
            setTabIndex(2);
          }}
        >
          Year
        </button>

        <Button className="py-5 bg-gray-200 rounded-lg  w-1/6 text-black  text-sm font-semibold"  type="submit">
        <div className="flex items-center">
          <FilterIcon/>
     
      <span className="mx-2">Filter</span>
   
    </div>
        </Button>

      </div>
      
      <div className="border-4 border-gray-300  rounded-md ">
        <div className="mt-10">
          <p className="font-semibold text-sm pb-3 pl-10 border-b border-gray-200">
            Date: dd/mm/yy
          </p>
          <div className="flex flex-row">
            <div className="pr-10 pl-8">
              <Card />
            </div>
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
