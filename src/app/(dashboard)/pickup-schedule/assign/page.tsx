"use client";

import { useState } from "react";
import { Button, Input } from "rizzui";
import SearchInput from "@/components/input/search-input";
import RecentAssigned from "./recent-assigned";
import RouteForm from "./route-form";
import Breadcrumb from "@/components/ui/breadcrumb";

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

  const onDelete = (indx: number) => {
    if (route.length > 1) {
      setRoute((prev) => prev.filter((_, i) => i !== indx));
    }
  };

  return (
    <div className="flex flex-col py-4 gap-4 w-full">
      <Breadcrumb>
        <Breadcrumb.Item href="/pickup-schedule">
          Pickup Schedule
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/">Assign Schedule</Breadcrumb.Item>
      </Breadcrumb>
      <h4 className="text-gray-dark font-normal text-md">
        Assign Pickup Schedule
      </h4>
      <div className="w-full flex relative">
        <div className="flex flex-col lg:w-4/5 w-full gap-4 lg:pr-5 pr-0">
          <div className="flex items-end gap-4 relative">
            <Input
              inputClassName="bg-white ring-gray-dark"
              type="date"
              label="Date"
              className="w-1/4"
            />
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
              className="w-1/4"
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
              className="w-1/4"
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
              indx={indx}
              onDelete={onDelete}
              key={"Route Form - " + indx}
              isDeleteDisable={route.length <= 1}
            />
          ))}
        </div>
        <RecentAssigned />
      </div>
    </div>
  );
}
