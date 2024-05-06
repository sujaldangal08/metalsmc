"use client";
import React from "react";

import { Button, Avatar } from "rizzui";
import TrashIcon from "@/components/icons/TrashIcon";
import EditIcon from "@/components/icons/EditIcon";
import ViewIcon from "@/components/icons/viewIcon";
import { GetOnePickupRouteResponse } from "@/features/api/schedule-module/pickupRoute.type";
import Link from "next/link";

interface CardProps {
  driverDetails: GetOnePickupRouteResponse["data"];
}

const Card: React.FC<CardProps> = ({
  driverDetails: { id, driver, asset },
}) => {
  return (
    <div className="bg-white  overflow-hidden w-1/4 h-80 pt-3 border-r border-gray-300">
      <div className="flex flex-col items-center px-6 py-2">
        <Avatar
          className="w-40 h-40 mt-2"
          name={driver.name}
          src={driver.image}
          size="xl"
        />
        <div className=" flex flex-col">
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-gray-800 text-center mt-2">
              Driver Name
            </p>
            <h2 className="text-sm font-semibold text-center text-green-500">
              {driver.name}
            </h2>
          </div>

          <p className="text-gray-500 text-sm font-semibold mt-2 ">
            Truck Number: {asset.rego_number}
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-3">
        <Button className="py-3 bg-primary rounded-3xl  w-3/5" type="submit">
          <span>Reassign</span>
        </Button>
      </div>
      <div className="flex justify-center gap-5 mx-auto bg-gray-100 rounded-3xl py-2 px-3 [&>svg]:w-5 [&>svg]:h-5 w-3/5 mt-3">
        <Link href={`/pickup-schedule/view/${id}`}>
          <ViewIcon />
        </Link>
        <EditIcon />
        <TrashIcon />
      </div>
    </div>
  );
};

export default Card;

/* 


<* className="border border-gray-300 rounded-md border-b-4 border-b-blue-500">
  {/* ... */
