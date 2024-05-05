"use client";

import { ScheduleCardProps } from "./schedule-card";
import PickupRoute from "./pickup-route";
import { useState } from "react";

interface Routes {
  route_name: string;
  driver_name: string;
  truck_license_plate_no: string;
  schedules: ScheduleCardProps[];
}

const routes: Routes[] = [
  {
    route_name: "Route 1",
    driver_name: "John Doe",
    truck_license_plate_no: "123456",
    schedules: [
      {
        schedule_name: "Schedule 1",
        customer_name: "John Doe",
        pickup_location: "1234 Main Street, New York",
        note: "Handle with care",
        materials: [
          {
            material: "Plastic",
            price_per_unit: 100,
            total_weight: 10,
          },
          {
            material: "Paper",
            price_per_unit: 50,
            total_weight: 5,
          },
          {
            material: "Glass",
            price_per_unit: 150,
            total_weight: 15,
          },
        ],
      },
      {
        schedule_name: "Schedule 2",
        customer_name: "Jane Smith",
        pickup_location: "5678 Elm Street, Los Angeles",
        note: "Fragile items",
        materials: [
          {
            material: "Metal",
            price_per_unit: 200,
            total_weight: 20,
          },
          {
            material: "Cardboard",
            price_per_unit: 75,
            total_weight: 8,
          },
          {
            material: "Plastic",
            price_per_unit: 100,
            total_weight: 12,
          },
        ],
      },
    ],
  },
  {
    route_name: "Route 2",
    driver_name: "Jane Doe",
    truck_license_plate_no: "654321",
    schedules: [
      {
        schedule_name: "Schedule 1",
        customer_name: "Michael Johnson",
        pickup_location: "9876 Oak Street, Chicago",
        note: "Handle with care",
        materials: [
          {
            material: "Plastic",
            price_per_unit: 100,
            total_weight: 10,
          },
          {
            material: "Paper",
            price_per_unit: 50,
            total_weight: 5,
          },
          {
            material: "Glass",
            price_per_unit: 150,
            total_weight: 15,
          },
        ],
      },
      {
        schedule_name: "Schedule 2",
        customer_name: "Emily Davis",
        pickup_location: "5432 Pine Street, San Francisco",
        note: "Fragile items",
        materials: [
          {
            material: "Metal",
            price_per_unit: 200,
            total_weight: 20,
          },
          {
            material: "Cardboard",
            price_per_unit: 75,
            total_weight: 8,
          },
          {
            material: "Plastic",
            price_per_unit: 100,
            total_weight: 12,
          },
        ],
      },
    ],
  },
];

export default function ViewPickupSchedulePage() {
  const [currentAccordion, setCurrentAccordion] = useState<number | null>(null);

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
      {routes.map((route, index) => (
        <PickupRoute
          key={index}
          route_name={route.route_name}
          driver_name={route.driver_name}
          truck_license_plate_no={route.truck_license_plate_no}
          schedules={route.schedules}
          isOpen={currentAccordion === index}
          onClick={() => handleAccordionClick(index)}
        />
      ))}
    </div>
  );
}
