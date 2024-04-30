// pages/index.tsx
"use client";
import React from "react";
import Card from "./card";
import Table from "./table";
import { Button } from "rizzui";

// Add more driver data objects as needed

const Home: React.FC = () => {


  return (
    <>
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
