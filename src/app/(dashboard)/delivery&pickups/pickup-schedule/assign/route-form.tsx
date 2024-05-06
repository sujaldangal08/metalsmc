import { Button, Input, Select, Textarea } from "rizzui";
import { DownIcon, BinIcon, CloseIcon } from "@public/assets/Icons";
import { Badge } from "rizzui";
import { Fragment, useState } from "react";
import cn from "@/utils/class-names";
import SearchInput from "@/components/input/search-input";
import { useForm } from "react-hook-form";
import assignPickupSchedule, {
  AssignPickupSchedule,
} from "@/utils/schema/delivery-pickups/asignPickupSchedule.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Status from "@/components/status/status";

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

interface Props {
  onDelete: (indx: number) => void;
  indx: number;
  isDeleteDisable: boolean;
}

export default function RouteForm({ onDelete, indx, isDeleteDisable }: Props) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AssignPickupSchedule>({
    resolver: zodResolver(assignPickupSchedule),
  });

  const [searched_driver, setSearchedDriver] = useState("");

  const material_options = [
    { value: "Material 1", label: "Material 2" },
    { value: "Material 2", label: "Material 2" },
    { value: "Material 3", label: "Material 4" },
  ];

  const [open, setOpen] = useState(true);

  const [material, setMaterial] = useState([0]);
  const [schedule, setSchedule] = useState([0]);

  const filterFunction = (value: string) => {
    return data
      ?.filter((curr) => {
        if (curr.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
          return curr;
        }
      })
      .slice(0, 5);
  };

  const deleteSchedule = (indx: number) => {
    if (schedule.length > 1) {
      // removeSchedule(indx);
      setSchedule((prev) => prev.filter((_, i) => i !== indx));
    }
  };

  const deleteMaterial = (indx: number) => {
    if (material.length > 1) {
      // removeSchedule(indx);
      setMaterial((prev) => prev.filter((_, i) => i !== indx));
    }
  };

  return (
    <form
      className="flex flex-col w-full overflow-clip shadow-sm rounded-t-md"
      onSubmit={handleSubmit(() => {
        console.log("o");
      })}
    >
      <div className="w-full flex bg-[#C6E7D9] px-4 py-3 items-center relative">
        <h2 className="font-medium text-md">Route Name :</h2>
        <Input
          placeholder="Enter route...."
          className="ml-4 sm:w-1/3 w-2/3 [&>div]:hidden"
          inputClassName="bg-white ring-gray-dark bg-white"
          {...register("route_name")}
          error={errors?.route_name?.message}
        />
        <span
          className={cn(
            "absolute right-4 cursor-pointer",
            "transition-all delay-200 ease-in",
            open ? "rotate-180" : "rotate-0"
          )}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <DownIcon />
        </span>
      </div>
      <div
        className={cn(
          "bg-white w-full px-4 flex flex-col overflow-hidden transition-all delay-200 ease-in",
          open ? "h-full py-4" : "h-0 py-0"
        )}
      >
        <div className="flex w-full">
          <div className="flex flex-col w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div className="flex md:flex-row flex-col md:items-end items-start md:gap-14 gap-1">
                <h2 className="text-md font-normal">
                  Driver's Name : <span className="text-gray">Jhon Doe</span>
                </h2>
                <h2 className="text-md font-normal">
                  Truck License Plate no :{" "}
                  <span className="text-gray">123456</span>
                </h2>
                <Status className="pb-1" status="success" title="Available" />
              </div>
            </div>
            {schedule.map((_, scheduleIndex) => (
              <Fragment key={scheduleIndex}>
                <div className="w-full bg-gray-300 h-[1px]" />
                <div className="w-full justify-between items-center flex">
                  <Badge className="bg-[#C6E7D9] text-md font-normal text-black w-36 rounded-md">
                    Schedule {scheduleIndex + 1}
                  </Badge>
                  <span
                    className={cn(
                      schedule.length === 1
                        ? "opacity-50 cursor-not-allowed"
                        : "opacity-100 cursor-pointer"
                    )}
                    onClick={() => {
                      //Function to delete schedule from schedule list
                      deleteSchedule(indx);
                    }}
                  >
                    <BinIcon className="fill-red-500" />
                  </span>
                </div>
                <div className="flex w-full gap-3 flex-col">
                  <div className="flex flex-col md:w-1/2 w-full gap-2">
                    <h2 className="text-md font-medium">Customer's Details</h2>
                    <SearchInput<{
                      avatar: string;
                      name: string;
                      truckNumber: string;
                    }>
                      placeholder="Choose Customer"
                      label="Customer"
                      className="w-full"
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
                                setSearchedDriver(driver.name);
                              }}
                            >
                              {driver.name}
                            </h2>
                          ))}
                        </>
                      )}
                    />
                    <Input
                      placeholder="Delivery Location"
                      inputClassName="ring-gray-dark"
                      {...register(
                        `schedules.${scheduleIndex}.customer.location`
                      )}
                      error={
                        errors?.schedules?.[scheduleIndex]?.customer?.location
                          ?.message
                      }
                    />
                  </div>
                  <div className="w-full h-[1px] bg-gray-300 my-2" />
                  <div className="flex flex-col w-full gap-2">
                    <div className="flex w-full items-center justify-between">
                      <div>
                        <h2 className="text-md font-medium">
                          Material’s Details
                        </h2>
                        <h2 className="text-sm font-normal">
                          Material Type & Weight
                        </h2>
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
                        <span className="text-md font-medium text-black">
                          Add Material
                        </span>
                      </Button>
                    </div>
                    <div className="grid grid-cols-7 gap-3 items-center max-h-[150px] overflow-y-auto">
                      {material.map((_, materialIndex) => (
                        <Fragment key={materialIndex}>
                          <div className="sm:col-span-2 col-span-6">
                            <Select
                              options={material_options}
                              placeholder="Select Material"
                              {...register(
                                `schedules.${scheduleIndex}.materials.${materialIndex}.material`
                              )}
                              error={
                                errors?.schedules?.[scheduleIndex]?.materials?.[
                                  materialIndex
                                ]?.material?.message
                              }
                            />
                          </div>
                          <div className="sm:col-span-2 col-span-6">
                            <Input
                              placeholder="Price / Unit"
                              type="number"
                              {...register(
                                `schedules.${indx}.materials.${indx}.rate`
                              )}
                              error={
                                errors?.schedules?.[indx]?.materials?.[indx]
                                  ?.rate?.message
                              }
                            />
                          </div>
                          <div className="sm:hidden block col-span-1">
                            <button
                              type="button"
                              disabled={material.length == 1}
                              className="mx-auto col-span-1 bg-gray-light rounded-full w-7 h-7 flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50"
                              onClick={() => {
                                deleteMaterial(materialIndex);
                              }}
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
                              {...register(
                                `schedules.${indx}.materials.${indx}.weight`
                              )}
                              error={
                                errors?.schedules?.[indx]?.materials?.[indx]
                                  ?.weight?.message
                              }
                            />
                          </div>
                          <div className="sm:block hidden col-span-1">
                            <button
                              type="button"
                              disabled={material.length == 1}
                              className="mx-auto col-span-1 bg-gray-light rounded-full w-7 h-7 flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50"
                              onClick={() => {
                                deleteMaterial(materialIndex);
                              }}
                            >
                              <CloseIcon />
                            </button>
                          </div>
                        </Fragment>
                      ))}
                    </div>
                  </div>
                  <Textarea
                    maxLength={80}
                    textareaClassName="resize-none h-[100px] ring-gray-dark"
                    placeholder="Note"
                    {...register(`schedules.${scheduleIndex}.customer.note`)}
                    error={
                      errors?.schedules?.[scheduleIndex]?.customer?.note
                        ?.message
                    }
                  />
                </div>
              </Fragment>
            ))}
            <Button
              className="w-1/3 mx-auto"
              variant="outline"
              onClick={() => {
                setSchedule([...schedule, schedule.length]);
              }}
            >
              <span className="bg-primary py-1/2 px-[6px] mr-3 text-white rounded-md text-md">
                +
              </span>
              <span className="text-md font-medium text-black">
                Add New Schedule
              </span>
            </Button>
            <div className="flex w-full justify-end gap-5">
              <Button
                className="bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:text-white w-1/4"
                onClick={() => {
                  onDelete(indx);
                }}
                disabled={isDeleteDisable}
              >
                Delete Route
              </Button>
              <Button className="w-1/4" type="submit">
                Assign Pickup Task
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
