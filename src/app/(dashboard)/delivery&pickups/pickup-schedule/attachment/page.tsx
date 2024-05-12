"use client";

import { getOnePickupRoute } from "@/features/api/schedule-module/pickupRoute.api";
import { useParams } from "next/navigation";
import { useState } from "react";
import useSWR from "swr";

import Breadcrumb from "@/components/ui/breadcrumb";
import Description from "./description";
import Attachment from "./attachment";

export default function ViewPickupSchedulePage() {
  const [currentAccordion, setCurrentAccordion] = useState<number | null>(0);
  const params = useParams();
  const { data: pickupRoutes } = useSWR(
    params.id ? ["pickup-route-details", params.id] : null,
    ([_, id]) => getOnePickupRoute(Number(id))
  );

  const handleAccordionClick = (index: number) => {
    if (currentAccordion === index) {
      setCurrentAccordion(null);
    } else {
      setCurrentAccordion(index);
    }
  };

  console.log("Pickup routes:",pickupRoutes)

  return (
    <div className="flex flex-col gap-10">
      <div className="text-[#706F6F]">
      <Breadcrumb className="pl-2 ">
        <Breadcrumb.Item href="/pickup-schedule">
          Pickup Schedule
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/">view</Breadcrumb.Item>
      </Breadcrumb>
      </div>
        <Description/>
        <Attachment/>
    </div>
  );
}
