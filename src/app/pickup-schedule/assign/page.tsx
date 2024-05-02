"use client";

import { useState } from "react";
import { Select } from "rizzui";

export default function Page() {
  const options = [
    { label: "Apple 🍎", value: "apple" },
    { label: "Banana 🍌", value: "banana" },
    { label: "Cherry 🍒", value: "cherry" },
  ];

  const [value, setValue] = useState(null);

  return (
    <div className="flex flex-col py-4 gap-4">
      <div className="space-y-1">
        <h2 className="text-gray-dark font-semibold text-lg">
          Pickup Schedule
        </h2>
        <h4 className="text-gray-dark font-normal text-md">
          Assign Pickup Schedule
        </h4>
      </div>
      <div className="w-full flex items-center">
        <Select
          color="primary"
          options={options}
          value={value}
          onChange={setValue}
          placeholder="Driver"
          className={"text-primary"}
        />
      </div>
    </div>
  );
}
