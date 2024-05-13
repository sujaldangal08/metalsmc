"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Select } from "rizzui";
import { FaPlus } from "react-icons/fa6";
import AssignForm from "./assign-form";

export default function Domestic() {
  const [driverValue, setDriverValue] = useState<string | null>(null);
  const [truckValue, setTruckValue] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  return (
    <div>
      <div className="flex justify-between items-center my-6">
        <div className="flex gap-3 flex-1">
          <Select
            placeholder="Driver"
            className="max-w-48"
            selectClassName="bg-white ring-gray-dark"
            value={driverValue}
            onChange={setDriverValue}
            options={[
              { label: "Driver 1", value: "driver1" },
              { label: "Driver 2", value: "driver2" },
              { label: "Driver 3", value: "driver3" },
            ]}
          />
          <Select
            placeholder="Truck"
            className="max-w-48"
            selectClassName="bg-white ring-gray-dark"
            value={truckValue}
            onChange={setTruckValue}
            options={[
              { label: "Truck 1", value: "truck1" },
              { label: "Truck 2", value: "truck2" },
              { label: "Truck 3", value: "truck3" },
            ]}
          />
        </div>
        <Button
          variant="solid"
          color="primary"
          onClick={() => driverValue && truckValue && setIsFormOpen(true)}
        >
          <FaPlus className="mr-2" /> <span>Assign Schedule</span>
        </Button>
      </div>
      {isFormOpen && <AssignForm />}
    </div>
  );
}
