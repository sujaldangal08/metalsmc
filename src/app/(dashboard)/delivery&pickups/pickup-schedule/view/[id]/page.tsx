"use client";

import Breadcrumb from "@/components/ui/breadcrumb";
import { LoadingSpinner } from "@/components/ui/file-upload/upload-zone";
import { getAllPickupRoutes } from "@/features/api/schedule-module/pickupRoute.api";
import { useParams } from "next/navigation";
import { useState } from "react";
import useSWR from "swr";
import PickupRoute from "../pickup-route";

export default function ViewPickupSchedulePage() {
  const [currentAccordion, setCurrentAccordion] = useState<number | null>(0);
  const params = useParams();
  const { data: pickupRoutes, isLoading } = useSWR(
    params.id ? ["pickup-route-details", params.id] : null,
    ([_, id]) => getAllPickupRoutes({ driver_id: id as string }),
    { revalidateOnFocus: false }
  );

  const handleAccordionClick = (index: number) => {
    if (currentAccordion === index) {
      setCurrentAccordion(null);
    } else {
      setCurrentAccordion(index);
    }
  };

  console.log("Pickup routes:", pickupRoutes);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const { name, image } = pickupRoutes?.data[0]!;

  return (
    <div className="flex flex-col gap-8 mt-3">
      <div className="text-[#706F6F]">
        <Breadcrumb className="pl-1">
          <Breadcrumb.Item href="/pickup-schedule">
            Pickup Schedule
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/">view</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {pickupRoutes?.data[0].routes.map((route, index) => (
        <PickupRoute
          key={index}
          id={route.id}
          isOpen={currentAccordion === index}
          onClick={() => handleAccordionClick(index)}
          driverDetails={{ name, image, contact: name }}
          routeDetails={route}
        />
      ))}
    </div>
  );
}
