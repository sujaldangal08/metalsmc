import CustomSelectBox from "@/components/input/select-box";
import Status from "@/components/status/status";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/file-upload/upload-zone";
import { Input } from "@/components/ui/input";
import { CreatePickupRouteResponse } from "@/features/api/schedule-module/pickupRoute.type";
import { getAllCustomers } from "@/features/api/user";
import cn from "@/utils/class-names";
import {
  CreatePickupScheduleSchema,
  createPickupScheduleSchema,
} from "@/utils/schema/delivery-pickups/asignPickupSchedule.schema";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { BinIcon, DownIcon } from "@public/assets/Icons/index";
import { Fragment, useState } from "react";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { PiPlus } from "react-icons/pi";
import { Textarea } from "rizzui";
import useSWR from "swr";
import MaterialForm from "./material-form";
import MetadataTable from "./metadata-table";

interface Props {
  onDelete?: (indx: number) => void;
  indx?: number;
  isDeleteDisable?: boolean;
  routeDetails?: CreatePickupRouteResponse["data"];
}

export default function RouteForm({
  onDelete,
  indx,
  isDeleteDisable,
  // routeDetails: { driver, asset, name },
}: Props) {
  const defaultFormValues = {
    driver_id: 1,
    asset_id: 2,
    route_id: 3,
    coordinates: [20.04433, 23.12102],
    materials: [{ name: "", amount: 0, rate: 0, weighing_type: "bridge" }],
    n_bins: 0,
  };

  const methods = useForm<CreatePickupScheduleSchema>({
    defaultValues: defaultFormValues,
    resolver: zodResolver(createPickupScheduleSchema),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    watch,
  } = methods;

  const { data: listOfCustomers, isLoading } = useSWR(
    "customers-list",
    getAllCustomers
  );

  const [open, setOpen] = useState(true);

  // const deleteSchedule = (indx: number) => {
  //   if (schedule.length > 1) {
  //     // removeSchedule(indx);
  //     setSchedule((prev) => prev.filter((_, i) => i !== indx));
  //   }
  // };

  const onSubmit: SubmitHandler<CreatePickupScheduleSchema> = (data) => {
    console.log("Schedule form", data);
  };

  const onError = (err: any) => {
    console.log(err);
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col w-full shadow-sm rounded-t-md overflow-hidden"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div className="w-full flex bg-[#C6E7D9] px-4 py-3 items-center relative">
          <h2 className="font-medium text-sm">Route Name: </h2>

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
                <div className="flex *:!text-[15px] *:!font-normal md:flex-row flex-col md:items-end items-start md:gap-14 gap-1">
                  <h2>
                    Driver's Name : <span className="text-gray"></span>
                  </h2>
                  <h2>
                    Truck License Plate no : <span className="text-gray"></span>
                  </h2>
                  <Status
                    className="pb-1 text-xs"
                    status="success"
                    title="Available"
                  />
                </div>
              </div>
              <div className="w-full bg-gray-300 h-[1px]" />

              {/* schedule tab group =================================== */}
              <TabGroup defaultIndex={0}>
                <div className="flex justify-between items-center">
                  <TabList className="w-fit items-center flex gap-1.5 bg-primary-lighter/60 border border-primary p-1.5 rounded-md">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={cn(
                            "text-[15px] font-normal py-1.5 px-5 text-black rounded-md hover:bg-primary/20",
                            selected && "bg-primary text-white hover:bg-primary"
                          )}
                        >
                          Schedule 1
                        </button>
                      )}
                    </Tab>
                  </TabList>

                  {/* Add new schedule button ===================================== */}
                  <Button
                    className="w-[220px] ml-auto mr-3"
                    variant="outline"
                    onClick={() => {}}
                  >
                    <span className="bg-primary py-1 px-1 mr-3 text-white rounded-md text-sm">
                      <PiPlus />
                    </span>
                    <span className="text-sm font-medium text-black">
                      Add New Schedule
                    </span>
                  </Button>
                  <span
                    className={cn(
                      true
                        ? "opacity-50 cursor-not-allowed"
                        : "opacity-100 cursor-pointer"
                    )}
                    onClick={() => {}}
                  >
                    <BinIcon className="fill-red-500" />
                  </span>
                </div>

                {/* Customer details ======================================= */}
                <TabPanels className="mt-5">
                  <TabPanel className="flex w-full gap-3 flex-col">
                    <h2 className="text-md font-medium">Customer's Details</h2>

                    <div className="flex gap-4">
                      <Controller
                        name="customer_id"
                        control={control}
                        render={({
                          field: { onChange, value },
                          formState: { errors },
                        }) => (
                          <CustomSelectBox
                            items={listOfCustomers?.data!}
                            placeholder="Choose customer"
                            value={
                              listOfCustomers?.data.filter(
                                (data) => data.id === value
                              )[0]
                            }
                            setValue={(value) => onChange(value?.id)}
                            getDisplayItem={(item) => item?.name!}
                            error={errors.customer_id}
                          />
                        )}
                      />
                      <Input
                        placeholder="Pickup Location"
                        register={register}
                        name="location"
                        className="w-52"
                      />
                    </div>
                    <div className="w-full h-[1px] bg-gray-300 my-2" />

                    {/* Material details ==================================== */}
                    <MaterialForm />

                    {/* Number of bins and tare weight select box ======================= */}
                    <div className="grid grid-cols-4 gap-3 pt-4 pb-6 border-b border-gray-300">
                      <Controller
                        name="n_bins"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <Input
                            type="number"
                            label="Number of bins"
                            placeholder="Number of bins"
                            onChange={(e) => onChange(parseInt(e.target.value))}
                            value={value}
                            error={errors.n_bins}
                          />
                        )}
                      />

                      <Input
                        label="Tare weight"
                        name="tare_weight"
                        placeholder="30, 40, 50"
                        register={register}
                        error={errors.tare_weight}
                      />
                    </div>

                    {/* meta table fields ================================================ */}
                    <MetadataTable />

                    {/* Notes ============================================================= */}
                    <Textarea
                      maxLength={80}
                      textareaClassName="resize-none h-[100px] border border-gray-300"
                      placeholder="Note"
                    />
                  </TabPanel>
                </TabPanels>
              </TabGroup>

              <div className="flex w-full justify-end gap-5 mt-4">
                <Button
                  onClick={() => reset(defaultFormValues)}
                  variant="solid"
                  color="secondary"
                  type="button"
                >
                  Reset
                </Button>
                <Button
                  className="bg-red-500 hover:bg-red-600 disabled:bg-red-400 text-white w-52"
                  onClick={() => {
                    // onDelete(indx);
                  }}
                  disabled={isDeleteDisable}
                >
                  Delete Route
                </Button>
                <Button
                  className="w-52"
                  variant="solid"
                  color="primary"
                  type="submit"
                >
                  Assign Pickup Task
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
