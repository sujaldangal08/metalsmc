"use client";

import { useState } from "react";
import { Button } from "rizzui";
import SearchInput from "@/components/input/search-input";
import RecentAssigned from "./recent-assigned";
import RouteForm from "./route-form";
import cn from "@/utils/class-names";
import BinIcon from "@public/assets/Icons/bin-icon";

export default function Page() {
  const [searched_driver, setSearchedDriver] = useState("");

  const data = [
    {
      avatar:
        "https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-6299533-5187865.png",
      name: "Joe Doe",
      truckNumber: "123455A5v",
    },
    {
      avatar:
        "https://cdn3d.iconscout.com/3d/premium/thumb/woman-avatar-6299541-5187873.png",
      name: "Emily Johnson",
      truckNumber: "6789ABC",
    },
    {
      avatar:
        "https://getillustrations.b-cdn.net//photos/pack/3d-avatar-male_lg.png",
      name: "John Smith",
      truckNumber: "XYZ123",
    },
    {
      avatar:
        "https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-6299533-5187865.png",
      name: "Joe Doe",
      truckNumber: "123455A5v",
    },
    {
      avatar:
        "https://cdn3d.iconscout.com/3d/premium/thumb/woman-avatar-6299541-5187873.png",
      name: "Emily Johnson",
      truckNumber: "6789ABC",
    },
    {
      avatar:
        "https://getillustrations.b-cdn.net//photos/pack/3d-avatar-male_lg.png",
      name: "John Smith",
      truckNumber: "XYZ123",
    },
    {
      avatar:
        "https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-6299533-5187865.png",
      name: "Joe Doe",
      truckNumber: "123455A5v",
    },
    {
      avatar:
        "https://cdn3d.iconscout.com/3d/premium/thumb/woman-avatar-6299541-5187873.png",
      name: "Emily Johnson",
      truckNumber: "6789ABC",
    },
    {
      avatar:
        "https://getillustrations.b-cdn.net//photos/pack/3d-avatar-male_lg.png",
      name: "John Smith",
      truckNumber: "XYZ123",
    },
  ];

  const [route, setRoute] = useState([0]);

  const filterFunction = (value: string) => {
    return data
      ?.filter((curr) => {
        if (curr.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
          return curr;
        }
      })
      .slice(0, 5);
  };

  return (
    <div className="flex flex-col py-4 gap-4 w-full">
      <div className="space-y-1">
        <h2 className="text-gray-dark font-semibold text-lg">
          Pickup Schedule
        </h2>
        <h4 className="text-gray-dark font-normal text-md">
          Assign Pickup Schedule
        </h4>
      </div>
      <div className="w-full flex relative">
        <div className="flex flex-col lg:w-3/4 w-full gap-4 lg:pr-5 pr-0">
          <div className="flex items-end gap-6 relative">
            <SearchInput<{
              avatar: string;
              name: string;
              truckNumber: string;
            }>
              placeholder="Choose Driver"
              label="Driver"
              value={searched_driver}
              setValue={(value: string | number) => {
                setSearchedDriver(value.toString());
              }}
              filterFunction={filterFunction}
              render={(data) => (
                <>
                  {data?.map((driver, indx) => (
                    <h2
                      key={indx}
                      className="text-sm font-medium text-gray-dark px-4 py-1 hover:bg-gray-50 cursor-pointer"
                      onClick={() => {
                        alert(driver.name);
                      }}
                    >
                      {driver.name}
                    </h2>
                  ))}
                </>
              )}
            />
            <SearchInput<{
              avatar: string;
              name: string;
              truckNumber: string;
            }>
              placeholder="Choose Truck"
              label="Truck"
              value={searched_driver}
              setValue={(value: string | number) => {
                setSearchedDriver(value.toString());
              }}
              filterFunction={filterFunction}
              render={(data) => (
                <>
                  {data?.map((driver, indx) => (
                    <h2
                      key={indx}
                      className="text-sm font-medium text-gray-dark px-4 py-1 hover:bg-gray-50 cursor-pointer"
                    >
                      {driver.name}
                    </h2>
                  ))}
                </>
              )}
            />
            <Button
              className="absolute right-0"
              onClick={() => {
                setRoute([...route, route.length]);
              }}
            >
              <span className="text-rg font-normal mr-2">+</span>
              <span className="text-md font-normal">Add Route</span>
            </Button>
          </div>
          {route?.map((_, indx) => (
            <RouteForm
              key={indx}
              deleteComponent={
                <span
                  className={cn(
                    "absolute right-14",
                    route.length === 1
                      ? "opacity-50 cursor-not-allowed"
                      : "opacity-100 cursor-pointer"
                  )}
                  onClick={() => {
                    if (route.length > 1) {
                      setRoute((prev) => prev.filter((_, i) => i !== indx));
                    }
                  }}
                >
                  <BinIcon className="fill-red-500" />
                </span>
              }
            />
          ))}
        </div>
        <RecentAssigned />
      </div>
    </div>
  );
}
