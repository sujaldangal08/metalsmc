"use client";

import { getAllPickupRoutes } from "@/features/api/schedule-module/pickupRoute.api";
import { useState } from "react";
import useSWR from "swr";
import PickupRoute from "../pickup-route";

export default function ViewPickupSchedulePage() {
  const [currentAccordion, setCurrentAccordion] = useState<number | null>(0);
  const { data: allPickupRoutes } = useSWR("pickup-data", getAllPickupRoutes);

  const handleAccordionClick = (index: number) => {
    if (currentAccordion === index) {
      setCurrentAccordion(null);
    } else {
      setCurrentAccordion(index);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="text-[#706F6F]">
        <h1 className="text-[#706F6F] font-semibold text-rg leading-[31px] mb-2">
          Pickup Schedule
        </h1>
        <p>View Pickup Schedule</p>
      </div>
      {allPickupRoutes?.routes.data.map((route, index) => (
        <PickupRoute
          key={index}
          id={route.id}
          route_name={route.name}
          isOpen={currentAccordion === index}
          onClick={() => handleAccordionClick(index)}
        />
      ))}
    </div>
  );
}
