"use client";

import Status from "@/components/status/status";
import { Input } from "@/components/ui/input";
import { CloseIcon } from "@public/assets/Icons";
import { Fragment, useState } from "react";
import { Select, Button, Textarea } from "rizzui";

export default function AssignForm() {
  const [material, setMaterial] = useState([0]);

  const material_options = [
    { value: "Material 1", label: "Material 2" },
    { value: "Material 2", label: "Material 2" },
    { value: "Material 3", label: "Material 4" },
  ];

  const deleteMaterial = (indx: number) => {
    if (material.length > 1) {
      setMaterial((prev) => prev.filter((_, i) => i !== indx));
    }
  };

  return (
    <form className="bg-white rounded-md shadow border border-[#DADADA]">
      <div className="flex items-center gap-2 px-4 py-3">
        <label className="font-medium text-md text-black">Schedule :</label>
        <Input
          className="ml-4 w-1/4 [&>div]:hidden"
          inputClassName="bg-white ring-gray-dark bg-white"
          placeholder=" "
        />
      </div>
      <hr className="border-[#DADADA]" />
      <div className="flex w-full items-center justify-between px-4 py-3">
        <div className="flex md:flex-row flex-col md:items-end items-start md:gap-14 gap-1">
          <h2 className="text-md font-normal">
            {`Driver's Name`} : <span className="text-gray">Jhon Doe</span>
          </h2>
          <h2 className="text-md font-normal">
            Truck License Plate no : <span className="text-gray">123456</span>
          </h2>
          <Status className="pb-1" status="success" title="Available" />
        </div>
      </div>
      <hr className="border-[#DADADA]" />
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-md font-medium">{`Customer's Data`}</h2>
        <div className="flex gap-5">
          <Select
            placeholder="Customer's Name"
            className="max-w-56"
            selectClassName="ring-gray-dark"
            options={[
              { label: "Customer 1", value: "customer1" },
              { label: "Customer 2", value: "customer2" },
              { label: "Customer 3", value: "customer3" },
            ]}
          />
          <Input
            className="max-w-56"
            inputClassName="ring-gray-dark w-56"
            placeholder="Pickup Location"
          />
        </div>
      </div>
      <hr className="border-[#DADADA]" />
      <div className="p-4 flex flex-col gap-5">
        <div className="flex w-full items-center justify-between">
          <div>
            <h2 className="text-md font-medium">Material’s Details</h2>
            <h2 className="text-sm font-normal">Material Type & Weight</h2>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              setMaterial([...material, material.length]);
            }}
          >
            <span className="bg-primary py-1/2 px-[6px] mr-3 text-white rounded-md text-md">
              +
            </span>
            <span className="text-md font-medium text-black">Add Material</span>
          </Button>
        </div>
        <div className="grid grid-cols-7 gap-3 items-center max-h-[150px] overflow-y-auto">
          {material.map((_, materialIndex) => (
            <Fragment key={materialIndex}>
              <div className="sm:col-span-2 col-span-6">
                <Select
                  options={material_options}
                  placeholder="Select Material"
                />
              </div>
              <div className="sm:col-span-2 col-span-6">
                <Input placeholder="Price / Unit" type="number" />
              </div>
              <div className="sm:hidden block col-span-1">
                <button
                  type="button"
                  disabled={material.length == 1}
                  className="mx-auto col-span-1 bg-gray-light rounded-full w-7 h-7 flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={() => deleteMaterial(materialIndex)}
                >
                  <CloseIcon />
                </button>
              </div>
              <div className="sm:col-span-2 col-span-6">
                <Input
                  placeholder="Weight"
                  type="number"
                  prefix="Tons"
                  prefixClassName="text-xs"
                />
              </div>
              <div className="sm:block hidden col-span-1">
                <button
                  type="button"
                  disabled={material.length == 1}
                  className="mx-auto col-span-1 bg-gray-light rounded-full w-7 h-7 flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <CloseIcon />
                </button>
              </div>
            </Fragment>
          ))}
        </div>
        <Textarea
          maxLength={80}
          textareaClassName="resize-none h-[100px] ring-gray-dark"
          placeholder="Note"
        />
        <div className="flex w-full justify-end gap-5">
          <Button
            className="bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:text-white w-1/4"
            disabled={false}
          >
            Delete Route
          </Button>
          <Button className="w-1/4" type="submit">
            Assign Pickup Task
          </Button>
        </div>
      </div>
    </form>
  );
}
