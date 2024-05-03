import { Button, Input, Select, Textarea, Accordion } from "rizzui";
import { DownIcon, BinIcon } from "@public/assets/Icons/index";
import { Badge } from "rizzui";
import { Fragment } from "react";
import { Collapse } from "rizzui";

export default function RouteForm() {
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

  return (
    <Accordion className="flex flex-col w-full rounded-md overflow-clip shadow-sm">
      <Accordion.Header>
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
      </Accordion.Header>
      <Accordion.Body className="bg-white w-full p-4 flex flex-col">
        <div className="flex w-full">
          <div className="flex flex-col w-full gap-4">
            <div className="flex w-full items-center justify-between">
              <div>
                <h2 className="text-md font-normal">
                  Driver's Name : <span className="text-gray">Jhon Doe</span>
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
                <h2 className="text-md font-medium">Customer's Details</h2>
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
                    <h2 className="text-md font-medium">Material’s Details</h2>
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
                      <Input placeholder="Rate" type="number" prefix="$" />
                      <Input placeholder="Weight" type="number" prefix="KG" />
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
      </Accordion.Body>
    </Accordion>
  );
}
