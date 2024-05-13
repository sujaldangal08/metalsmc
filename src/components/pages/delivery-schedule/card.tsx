"use client";
import React from "react";

import EditIcon from "@/components/icons/EditIcon";
import TrashIcon from "@/components/icons/TrashIcon";
import ViewIcon from "@/components/icons/viewIcon";
import { Route } from "@/lib/enums/routes.enums";
import Link from "next/link";
import { Avatar, Button } from "rizzui";

interface CardProps {
  driverDetails: { name: string; image: string };
  id: number;
  truckNumer: number;
}

const Card: React.FC<CardProps> = ({
  driverDetails: { name, image },
  id,
  truckNumer,
}) => {
  return (
    <div className="flex 2xl:flex-col flex-row bg-white overflow-hidden 2xl:min-w-[230px] min-w-full py-5 border-r border-gray-300">
      <div className="flex 2xl:flex-col 2xl:gap-0 gap-4 flex-row items-center px-6 py-2">
        <Avatar className="w-40 h-40 mt-2" name={name} src={image} size="xl" />
        <div className="flex flex-col 2xl:items-center items-start">
          <div className="flex 2xl:flex-col 2xl:gap-0 gap-2 flex-row items-center justify-center">
            <p className="text-sm font-medium text-gray-800 text-center 2xl:mt-2 mt-0">
              Driver Name :
            </p>
            <h2 className="text-sm font-medium text-center text-green-500">
              {name}
            </h2>
          </div>
          <div className="flex 2xl:flex-col 2xl:gap-0 gap-2 flex-row items-center justify-center">
            <p className="text-sm font-medium text-gray-800 text-center 2xl:mt-2 mt-0">
              Truck Number:
            </p>
            <h2 className="text-sm font-medium text-center text-green-500">
              {truckNumer}
            </h2>
          </div>
        </div>
      </div>
      <div className="flex-col 2xl:w-full w-1/3">
        <div className="flex justify-center mt-3">
          <Button className="py-3 bg-primary rounded-3xl  w-3/5" type="submit">
            <span>Reassign</span>
          </Button>
        </div>
        <div className="flex justify-center items-center gap-5 mx-auto bg-gray-100 rounded-3xl py-2 px-3 [&>a>svg]:w-5 [&>a>svg]:h-5 w-[55%] mt-3">
          <Link href={`${Route.ViewPickupSchedule}/${id}`}>
            <ViewIcon />
          </Link>
          <EditIcon />
          <TrashIcon />
        </div>
      </div>
    </div>
  );
};

export default Card;
