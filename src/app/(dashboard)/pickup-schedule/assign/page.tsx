"use client";

import { useState, Fragment } from "react";
import { Button, Input, Select, Textarea } from "rizzui";
import { DownIcon, BinIcon } from "@public/assets/Icons/index";
import SearchInput from "@/components/input/search-input";
import RecentAssigned from "./recent-assigned";
import { Badge } from "rizzui";

export default function Page() {
  const [searched_driver, setSearchedDriver] = useState("");

  const options = [
    { label: "Apple 🍎", value: "apple" },
    { label: "Banana 🍌", value: "banana" },
    { label: "Cherry 🍒", value: "cherry" },
  ];

  const material_options = [
    { value: "Material 1", label: "Material 2" },
    { value: "Material 2", label: "Material 2" },
    { value: "Material 3", label: "Material 4" },
  ];

  const items = [1, 2, 3, 4, 5, 6];

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
    <div className="flex flex-col py-4 gap-4">
      <div className="space-y-1">
        <h2 className="text-gray-dark font-semibold text-lg">
          Pickup Schedule
        </h2>
        <h4 className="text-gray-dark font-normal text-md">
          Assign Pickup Schedule
        </h4>
      </div>
      <div className="w-full flex relative">
        <div className="flex flex-col lg:w-3/4 w-full gap-4 pr-5">
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
            <Button className="absolute right-0">
              <span className="text-rg font-normal mr-2">+</span>
              <span className="text-md font-normal">Add Route</span>
            </Button>
          </div>
          <div className="flex flex-col w-full rounded-md overflow-clip shadow-sm">
            <div className="w-full flex bg-[#C6E7D9] px-4 py-3 items-center relative">
              <h2 className="font-medium text-md">Route Name :</h2>
              <Input
                placeholder="Enter route...."
                className="ml-4 w-1/3"
                inputClassName="bg-white ring-white"
              />
              <span className="absolute right-4 cursor-pointer">
                <DownIcon />
              </span>
            </div>
            <div className="bg-white w-full p-4 flex flex-col">
              <div className="flex w-full">
                <div className="flex flex-col w-full gap-4">
                  <div className="flex w-full items-center justify-between">
                    <div>
                      <h2 className="text-md font-normal">
                        Driver's Name :{" "}
                        <span className="text-gray">Jhon Doe</span>
                      </h2>
                      <h2 className="text-md font-normal">
                        Truck License Plate no :{" "}
                        <span className="text-gray">123456</span>
                      </h2>
                    </div>
                    <Badge className="text-md font-normal text-black px-8 bg-yellow-500">
                      Available for Pickup
                    </Badge>
                  </div>
                  <div className="w-full bg-gray-300 h-[1px]" />
                  <div className="w-full justify-between items-center flex">
                    <Badge className="bg-[#C6E7D9] text-md font-normal text-black w-36 rounded-md">
                      Schedule 1
                    </Badge>
                    <span className="cursor-pointer">
                      <BinIcon className="fill-red-500" />
                    </span>
                  </div>
                  <div className="flex w-full gap-4">
                    <div className="flex flex-col w-1/3 gap-4">
                      <h2 className="text-md font-medium">
                        Customer's Details
                      </h2>
                      <Select
                        options={options}
                        placeholder="Customer Name"
                        selectClassName="ring-gray-dark"
                      />
                      <Input
                        placeholder="Delivery Location"
                        inputClassName="ring-gray-dark"
                      />
                      <Textarea
                        maxLength={80}
                        textareaClassName="resize-none h-[150px] ring-gray-dark"
                        placeholder="Note"
                      />
                    </div>
                    <div className="w-[1px] h-full bg-gray-300"></div>
                    <div className="flex flex-col w-2/3 gap-4">
                      <div className="flex w-full items-center justify-between">
                        <div>
                          <h2 className="text-md font-medium">
                            Material’s Details
                          </h2>
                          <h2 className="text-sm font-normal">
                            Material Type & Weight
                          </h2>
                        </div>
                        <Button variant="outline">
                          <span className="bg-primary py-1/2 px-[6px] mr-3 text-white rounded-md text-md">
                            +
                          </span>
                          <span className="text-md font-medium text-black">
                            Add Material
                          </span>
                        </Button>
                      </div>
                      <div className="grid grid-cols-3 gap-4 max-h-[220px] overflow-y-auto">
                        {items.map((_, indx) => (
                          <Fragment key={indx}>
                            <Select
                              options={material_options}
                              placeholder="Select Material"
                            />
                            <Input
                              placeholder="Rate"
                              type="number"
                              prefix="$"
                            />
                            <Input
                              placeholder="Weight"
                              type="number"
                              prefix="KG"
                            />
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-300 h-[1px]" />
                  <div className="flex w-full justify-end gap-5">
                    <Button variant="outline">
                      <span className="bg-primary py-1/2 px-[6px] mr-3 text-white rounded-md text-md">
                        +
                      </span>
                      <span className="text-md font-medium text-black">
                        Assign Pickup Task
                      </span>
                    </Button>
                    <Button className="text-md font-semibold">
                      Assign Pickup Task
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full rounded-md overflow-clip shadow-sm">
            <div className="w-full flex bg-[#C6E7D9] px-4 py-3 items-center relative">
              <h2 className="font-medium text-md">Route Name :</h2>
              <Input
                placeholder="Enter route...."
                className="ml-4 w-1/3"
                inputClassName="bg-white ring-white"
              />
              <span className="absolute right-4 cursor-pointer">
                <DownIcon />
              </span>
            </div>
            <div className="bg-white w-full p-4 flex flex-col">
              <div className="flex w-full">
                <div className="flex flex-col w-full gap-4">
                  <div className="flex w-full items-center justify-between">
                    <div>
                      <h2 className="text-md font-normal">
                        Driver's Name :{" "}
                        <span className="text-gray">Jhon Doe</span>
                      </h2>
                      <h2 className="text-md font-normal">
                        Truck License Plate no :{" "}
                        <span className="text-gray">123456</span>
                      </h2>
                    </div>
                    <Badge className="text-md font-normal text-black px-8 bg-yellow-500">
                      Available for Pickup
                    </Badge>
                  </div>
                  <div className="w-full bg-gray-300 h-[1px]" />
                  <div className="w-full justify-between items-center flex">
                    <Badge className="bg-[#C6E7D9] text-md font-normal text-black w-36 rounded-md">
                      Schedule 1
                    </Badge>
                    <span className="cursor-pointer">
                      <BinIcon className="fill-red-500" />
                    </span>
                  </div>
                  <div className="flex w-full gap-4">
                    <div className="flex flex-col w-1/3 gap-4">
                      <h2 className="text-md font-medium">
                        Customer's Details
                      </h2>
                      <Select
                        options={options}
                        placeholder="Customer Name"
                        selectClassName="ring-gray-dark"
                      />
                      <Input
                        placeholder="Delivery Location"
                        inputClassName="ring-gray-dark"
                      />
                      <Textarea
                        maxLength={80}
                        textareaClassName="resize-none h-[150px] ring-gray-dark"
                        placeholder="Note"
                      />
                    </div>
                    <div className="w-[1px] h-full bg-gray-300"></div>
                    <div className="flex flex-col w-2/3 gap-4">
                      <div className="flex w-full items-center justify-between">
                        <div>
                          <h2 className="text-md font-medium">
                            Material’s Details
                          </h2>
                          <h2 className="text-sm font-normal">
                            Material Type & Weight
                          </h2>
                        </div>
                        <Button variant="outline">
                          <span className="bg-primary py-1/2 px-[6px] mr-3 text-white rounded-md text-md">
                            +
                          </span>
                          <span className="text-md font-medium text-black">
                            Add Material
                          </span>
                        </Button>
                      </div>
                      <div className="grid grid-cols-3 gap-4 max-h-[220px] overflow-y-auto">
                        {items.map((_, indx) => (
                          <Fragment key={indx}>
                            <Select
                              options={material_options}
                              placeholder="Select Material"
                            />
                            <Input
                              placeholder="Rate"
                              type="number"
                              prefix="$"
                            />
                            <Input
                              placeholder="Weight"
                              type="number"
                              prefix="KG"
                            />
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-300 h-[1px]" />
                  <div className="flex w-full justify-end gap-5">
                    <Button variant="outline">
                      <span className="bg-primary py-1/2 px-[6px] mr-3 text-white rounded-md text-md">
                        +
                      </span>
                      <span className="text-md font-medium text-black">
                        Assign Pickup Task
                      </span>
                    </Button>
                    <Button className="text-md font-semibold">
                      Assign Pickup Task
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full rounded-md overflow-clip shadow-sm">
            <div className="w-full flex bg-[#C6E7D9] px-4 py-3 items-center relative">
              <h2 className="font-medium text-md">Route Name :</h2>
              <Input
                placeholder="Enter route...."
                className="ml-4 w-1/3"
                inputClassName="bg-white ring-white"
              />
              <span className="absolute right-4 cursor-pointer">
                <DownIcon />
              </span>
            </div>
            <div className="bg-white w-full p-4 flex flex-col">
              <div className="flex w-full">
                <div className="flex flex-col w-full gap-4">
                  <div className="flex w-full items-center justify-between">
                    <div>
                      <h2 className="text-md font-normal">
                        Driver's Name :{" "}
                        <span className="text-gray">Jhon Doe</span>
                      </h2>
                      <h2 className="text-md font-normal">
                        Truck License Plate no :{" "}
                        <span className="text-gray">123456</span>
                      </h2>
                    </div>
                    <Badge className="text-md font-normal text-black px-8 bg-yellow-500">
                      Available for Pickup
                    </Badge>
                  </div>
                  <div className="w-full bg-gray-300 h-[1px]" />
                  <div className="w-full justify-between items-center flex">
                    <Badge className="bg-[#C6E7D9] text-md font-normal text-black w-36 rounded-md">
                      Schedule 1
                    </Badge>
                    <span className="cursor-pointer">
                      <BinIcon className="fill-red-500" />
                    </span>
                  </div>
                  <div className="flex w-full gap-4">
                    <div className="flex flex-col w-1/3 gap-4">
                      <h2 className="text-md font-medium">
                        Customer's Details
                      </h2>
                      <Select
                        options={options}
                        placeholder="Customer Name"
                        selectClassName="ring-gray-dark"
                      />
                      <Input
                        placeholder="Delivery Location"
                        inputClassName="ring-gray-dark"
                      />
                      <Textarea
                        maxLength={80}
                        textareaClassName="resize-none h-[150px] ring-gray-dark"
                        placeholder="Note"
                      />
                    </div>
                    <div className="w-[1px] h-full bg-gray-300"></div>
                    <div className="flex flex-col w-2/3 gap-4">
                      <div className="flex w-full items-center justify-between">
                        <div>
                          <h2 className="text-md font-medium">
                            Material’s Details
                          </h2>
                          <h2 className="text-sm font-normal">
                            Material Type & Weight
                          </h2>
                        </div>
                        <Button variant="outline">
                          <span className="bg-primary py-1/2 px-[6px] mr-3 text-white rounded-md text-md">
                            +
                          </span>
                          <span className="text-md font-medium text-black">
                            Add Material
                          </span>
                        </Button>
                      </div>
                      <div className="grid grid-cols-3 gap-4 max-h-[220px] overflow-y-auto">
                        {items.map((_, indx) => (
                          <Fragment key={indx}>
                            <Select
                              options={material_options}
                              placeholder="Select Material"
                            />
                            <Input
                              placeholder="Rate"
                              type="number"
                              prefix="$"
                            />
                            <Input
                              placeholder="Weight"
                              type="number"
                              prefix="KG"
                            />
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-300 h-[1px]" />
                  <div className="flex w-full justify-end gap-5">
                    <Button variant="outline">
                      <span className="bg-primary py-1/2 px-[6px] mr-3 text-white rounded-md text-md">
                        +
                      </span>
                      <span className="text-md font-medium text-black">
                        Assign Pickup Task
                      </span>
                    </Button>
                    <Button className="text-md font-semibold">
                      Assign Pickup Task
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full rounded-md overflow-clip shadow-sm">
            <div className="w-full flex bg-[#C6E7D9] px-4 py-3 items-center relative">
              <h2 className="font-medium text-md">Route Name :</h2>
              <Input
                placeholder="Enter route...."
                className="ml-4 w-1/3"
                inputClassName="bg-white ring-white"
              />
              <span className="absolute right-4 cursor-pointer">
                <DownIcon />
              </span>
            </div>
            <div className="bg-white w-full p-4 flex flex-col">
              <div className="flex w-full">
                <div className="flex flex-col w-full gap-4">
                  <div className="flex w-full items-center justify-between">
                    <div>
                      <h2 className="text-md font-normal">
                        Driver's Name :{" "}
                        <span className="text-gray">Jhon Doe</span>
                      </h2>
                      <h2 className="text-md font-normal">
                        Truck License Plate no :{" "}
                        <span className="text-gray">123456</span>
                      </h2>
                    </div>
                    <Badge className="text-md font-normal text-black px-8 bg-yellow-500">
                      Available for Pickup
                    </Badge>
                  </div>
                  <div className="w-full bg-gray-300 h-[1px]" />
                  <div className="w-full justify-between items-center flex">
                    <Badge className="bg-[#C6E7D9] text-md font-normal text-black w-36 rounded-md">
                      Schedule 1
                    </Badge>
                    <span className="cursor-pointer">
                      <BinIcon className="fill-red-500" />
                    </span>
                  </div>
                  <div className="flex w-full gap-4">
                    <div className="flex flex-col w-1/3 gap-4">
                      <h2 className="text-md font-medium">
                        Customer's Details
                      </h2>
                      <Select
                        options={options}
                        placeholder="Customer Name"
                        selectClassName="ring-gray-dark"
                      />
                      <Input
                        placeholder="Delivery Location"
                        inputClassName="ring-gray-dark"
                      />
                      <Textarea
                        maxLength={80}
                        textareaClassName="resize-none h-[150px] ring-gray-dark"
                        placeholder="Note"
                      />
                    </div>
                    <div className="w-[1px] h-full bg-gray-300"></div>
                    <div className="flex flex-col w-2/3 gap-4">
                      <div className="flex w-full items-center justify-between">
                        <div>
                          <h2 className="text-md font-medium">
                            Material’s Details
                          </h2>
                          <h2 className="text-sm font-normal">
                            Material Type & Weight
                          </h2>
                        </div>
                        <Button variant="outline">
                          <span className="bg-primary py-1/2 px-[6px] mr-3 text-white rounded-md text-md">
                            +
                          </span>
                          <span className="text-md font-medium text-black">
                            Add Material
                          </span>
                        </Button>
                      </div>
                      <div className="grid grid-cols-3 gap-4 max-h-[220px] overflow-y-auto">
                        {items.map((_, indx) => (
                          <Fragment key={indx}>
                            <Select
                              options={material_options}
                              placeholder="Select Material"
                            />
                            <Input
                              placeholder="Rate"
                              type="number"
                              prefix="$"
                            />
                            <Input
                              placeholder="Weight"
                              type="number"
                              prefix="KG"
                            />
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-300 h-[1px]" />
                  <div className="flex w-full justify-end gap-5">
                    <Button variant="outline">
                      <span className="bg-primary py-1/2 px-[6px] mr-3 text-white rounded-md text-md">
                        +
                      </span>
                      <span className="text-md font-medium text-black">
                        Assign Pickup Task
                      </span>
                    </Button>
                    <Button className="text-md font-semibold">
                      Assign Pickup Task
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RecentAssigned />
      </div>
    </div>
  );
}
