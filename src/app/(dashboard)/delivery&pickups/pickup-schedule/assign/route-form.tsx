import { Button, Input, Select, Textarea } from "rizzui";
import { DownIcon, BinIcon } from "@public/assets/Icons/index";
import { Badge } from "rizzui";
import { Fragment, useState } from "react";
import cn from "@/utils/class-names";
import SearchInput from "@/components/input/search-input";
import { useForm } from "react-hook-form";
import assignPickupSchedule, {
  AssignPickupSchedule,
} from "@/utils/schema/delivery-pickups/asignPickupSchedule.schema";
import { zodResolver } from "@hookform/resolvers/zod";

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
  deleteComponent: React.ReactNode;
}

export default function RouteForm({ deleteComponent }: Props) {
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

  return (
    <form
      className="flex flex-col w-full rounded-md overflow-clip shadow-sm py-4"
      onSubmit={handleSubmit(() => {
        console.log("o");
      })}
    >
      <div className="w-full flex bg-[#C6E7D9] px-4 py-3 items-center relative">
        <h2 className="font-medium text-md">Route Name :</h2>
        <Input
          placeholder="Enter route...."
          className="ml-4 w-1/3"
          inputClassName="bg-white ring-white"
          {...register("route_name")}
          error={errors?.route_name?.message}
        />
        {deleteComponent}
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
            {schedule.map((_, indx) => (
              <Fragment key={indx}>
                <div className="w-full justify-between items-center flex">
                  <Badge className="bg-[#C6E7D9] text-md font-normal text-black w-36 rounded-md">
                    Schedule {indx + 1}
                  </Badge>
                  <span
                    className={cn(
                      schedule.length === 1
                        ? "opacity-50 cursor-not-allowed"
                        : "opacity-100 cursor-pointer"
                    )}
                    onClick={() => {
                      if (schedule.length > 1) {
                        setSchedule((prev) =>
                          prev.filter((_, i) => i !== indx)
                        );
                      }
                    }}
                  >
                    <BinIcon className="fill-red-500" />
                  </span>
                </div>
                <div className="flex w-full gap-4">
                  <div className="flex flex-col w-1/3 gap-4">
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
                                alert(driver.name);
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
                      {...register(`schedules.${indx}.customer.location`)}
                      error={
                        errors?.schedules?.[indx]?.customer?.location?.message
                      }
                    />
                    <Textarea
                      maxLength={80}
                      textareaClassName="resize-none h-[150px] ring-gray-dark"
                      placeholder="Note"
                      {...register(`schedules.${indx}.customer.note`)}
                      error={errors?.schedules?.[indx]?.customer?.note?.message}
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
                    <div className="grid grid-cols-3 gap-4 max-h-[220px] overflow-y-auto">
                      {material.map((_, indx) => (
                        <Fragment key={indx}>
                          <Select
                            label="Material"
                            options={material_options}
                            placeholder="Select Material"
                            {...register(
                              `schedules.${indx}.materials.${indx}.material`
                            )}
                            error={
                              errors?.schedules?.[indx]?.materials?.[indx]
                                ?.material?.message
                            }
                          />
                          <Input
                            placeholder="Price / Unit"
                            type="number"
                            label="Rate"
                            {...register(
                              `schedules.${indx}.materials.${indx}.rate`
                            )}
                            error={
                              errors?.schedules?.[indx]?.materials?.[indx]?.rate
                                ?.message
                            }
                          />
                          <Input
                            placeholder="Weight"
                            type="number"
                            prefix="Tons"
                            label="Weight"
                            prefixClassName="text-xs"
                            {...register(
                              `schedules.${indx}.materials.${indx}.weight`
                            )}
                            error={
                              errors?.schedules?.[indx]?.materials?.[indx]
                                ?.weight?.message
                            }
                          />
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-300 h-[1px]" />
              </Fragment>
            ))}

            <div className="flex w-full justify-end gap-5">
              <Button
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
              <Button className="text-md font-semibold" type="submit">
                Assign Pickup Task
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
