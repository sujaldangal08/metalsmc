"use client";

import { useState } from "react";
import { Button, Input } from "rizzui";
import SearchInput from "@/components/input/search-input";
import RecentAssigned from "./recent-assigned";
import RouteForm from "./route-form";
import Breadcrumb from "@/components/ui/breadcrumb";
import { Route } from "@/lib/enums/routes.enums";
import { CreatePickupRouteBody } from "@/features/api/schedule-module/pickupRoute.type";
import { PiPlus } from "react-icons/pi";

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

export default function PickupAssignPage() {
  const [searched_driver, setSearchedDriver] = useState("");

  const [route, setRoute] = useState<Partial<CreatePickupRouteBody>>();
  const [routes, setRoutes] = useState<CreatePickupRouteBody[]>([]);

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
    if (routes.length > 1) {
      setRoutes((prev) => prev.filter((_, i) => i !== indx));
    }
  };

  return (
    <div className="flex flex-col py-4 gap-4 w-full">
      <Breadcrumb>
        <Breadcrumb.Item href={Route.PickupSchedule}>
          Pickup Schedule
        </Breadcrumb.Item>
        <Breadcrumb.Item href={Route.AssignPickupSchedule}>
          Assign Schedule
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="w-full flex mt-4">
        <div className="lg:w-4/5 w-full gap-4 lg:pr-5 pr-0">
          <div className="flex gap-4 w-full">
            <div className="grid grid-cols-4 gap-4 ">
              <Input
                placeholder="Enter route...."
                className=""
                inputClassName="bg-white ring-gray-dark bg-white"
                onChange={(e) => setRoute({ ...route, name: e.target.value })}
              />
              <Input
                inputClassName="bg-white ring-gray-dark"
                type="date"
                label=""
                className=""
                onChange={(e) =>
                  setRoute({ ...route, start_date: e.target.value })
                }
              />
              <SearchInput<{
                avatar: string;
                name: string;
                truckNumber: string;
              }>
                placeholder="Choose Driver"
                label=""
                value={searched_driver}
                setValue={(value: string | number) => {
                  setRoute({ ...route, driver_id: 1 });
                }}
                filterFunction={filterFunction}
                className="w-full"
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
                className="w-full"
                label=""
                value={searched_driver}
                setValue={(value: string | number) => {
                  setRoute({ ...route, asset_id: 1 });
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
            </div>
            <Button className="font-normal w-[180px] px-2 " onClick={() => {}}>
              <PiPlus className="text-rg"/>
              <span className="text-sm pl-2">Add Route</span>
            </Button>
          </div>

          {routes?.map((_, indx) => (
            <RouteForm
              indx={indx}
              onDelete={onDelete}
              key={"Route Form - " + indx}
              isDeleteDisable={routes.length <= 1}
            />
          ))}
        </div>
        <RecentAssigned />
      </div>
    </div>
  );
}
