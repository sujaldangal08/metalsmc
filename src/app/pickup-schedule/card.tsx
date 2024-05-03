// components/Card.tsx
"use client";
import React from "react";

import { Button, Avatar } from "rizzui";
import TrashIcon from "@/components/icons/TrashIcon";
import EditIcon from "@/components/icons/EditIcon";
import ViewIcon from "@/components/icons/viewIcon";

interface CardProps {

}

const Card: React.FC<CardProps> = ({

}) => {
  return (
    <div className="bg-white  shadow-md overflow-hidden w-52 h-80 border-r border-gray-300">
      <div className="flex flex-col items-center px-6 py-2">
        <Avatar
        className="w-40 h-40 mt-2"
          name="Jane Doe"
          src="https://randomuser.me/api/portraits/women/40.jpg"
         size="xl"
        />
        <div className=" flex flex-col ml-4">
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-gray-800 text-center mt-2">Driver Name</p>
            <h2 className="text-sm font-semibold text-center text-green-500">
              John Doe</h2>
          </div>

          <p className="text-gray-500 text-sm font-semibold mt-2 ">Truck Number:1234</p>
        </div>
      </div>

      <div className="flex justify-center mt-3">
        <Button className="py-3 bg-primary rounded-3xl  w-3/5" type="submit">
          <span>Reassign</span>
        </Button>
      </div>
      <div className="flex justify-center mx-auto bg-gray-100 rounded-3xl p-2 w-3/5 mt-3">
        <ViewIcon className="mr-4" />
        <EditIcon className="mx-4" />
        <TrashIcon className="ml-4" />
      </div>
    </div>
  );
};

export default Card;

/* 


<* className="border border-gray-300 rounded-md border-b-4 border-b-blue-500">
  {/* ... */