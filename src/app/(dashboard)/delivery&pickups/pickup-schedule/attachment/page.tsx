"use client";

import { getOnePickupRoute } from "@/features/api/schedule-module/pickupRoute.api";
import { useParams } from "next/navigation";
import { useState } from "react";
import useSWR from "swr";
import Breadcrumb from "@/components/ui/breadcrumb";
import Description from "./description";
import Attachment from "./attachment";
import { Route } from "@/lib/enums/routes.enums";

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

  console.log("Pickup routes:", pickupRoutes);

  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb className="pl-2 mt-3">
        <Breadcrumb.Item href={Route.PickupSchedule}>
          Pickup Schedule
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/">View Attachment</Breadcrumb.Item>
      </Breadcrumb>
      <Description />
      <Attachment />
    </div>
  );
}
