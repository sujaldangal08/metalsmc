import Status from "@/components/status/status";
import { Button } from "@/components/ui/button";
import { CreatePickupRouteResponse } from "@/features/api/schedule-module/pickupRoute.type";

import cn from "@/utils/class-names";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { DownIcon } from "@public/assets/Icons/index";
import { uniqueId } from "lodash";
import { Fragment, useState } from "react";
import { PiPlus } from "react-icons/pi";
import ScheduleForm, { ScheduleFormData } from "./schedule-form";

interface PickupRouteFormProps {
  onDelete: (indx: number) => void;
  indx: number;
  isDeleteDisable: boolean;
  routeDetails: CreatePickupRouteResponse["data"];
}

export default function PickupRouteForm({
  onDelete,
  indx,
  isDeleteDisable,
  routeDetails: { driver, asset, name, id: route_id },
}: PickupRouteFormProps) {
  const [open, setOpen] = useState(true);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const defaultFormValues: ScheduleFormData = {
    driver_id: driver.id,
    asset_id: asset.id,
    route_id: route_id,
    customer_id: 0,
    coordinates: [20.04433, 23.12102],
    materials: [
      { name: "tire", amount: 20, rate: 120, weighing_type: "bridge" },
    ],
    n_bins: 2,
    tare_weight: "30, 40",
    meta: { name: "sunil", contact: "9811008987", extra: "hello" },
    notes: "So this is the first schedule",
  };

  const [scheduleFormData, setScheduleFormData] = useState([
    {
      id: "0",
      formData: defaultFormValues,
    },
  ]);

  const handleDeleteSchedule = (index: string) => {
    if (scheduleFormData.length <= 1) return;

    const updatedForms = scheduleFormData.filter((form) => form.id !== index);
    setScheduleFormData(updatedForms);

    if (updatedForms.length > 0) {
      setSelectedTabIndex(updatedForms.length - 1);
    } else {
      setSelectedTabIndex(0);
    }
  };

  const addNewSchedule = () => {
    const id = uniqueId();
    setScheduleFormData([
      ...scheduleFormData,
      {
        id,
        formData: defaultFormValues,
      },
    ]);
  };

  return (
    <div className="flex flex-col w-full shadow-sm rounded-t-md overflow-hidden">
      <div className="w-full flex bg-[#C6E7D9] px-4 py-3 items-center relative">
        <h2 className="font-medium text-sm">Route Name: {name}</h2>

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
                  Driver's Name : {driver.name}
                  <span className="text-gray"></span>
                </h2>
                <h2>
                  Truck License Plate no : {asset.rego_number}
                  <span className="text-gray"></span>
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
            <TabGroup
              selectedIndex={selectedTabIndex}
              onChange={setSelectedTabIndex}
            >
              <div className="flex justify-between items-center">
                <TabList className="w-fit items-center flex gap-1.5 bg-primary-lighter/60 border border-primary p-1.5 rounded-md">
                  {scheduleFormData.map((_, id) => (
                    <Tab key={id} as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={cn(
                            "text-[15px] font-normal py-1.5 px-5 text-black rounded-md hover:bg-primary/20",
                            selected && "bg-primary text-white hover:bg-primary"
                          )}
                        >
                          Schedule {id + 1}
                        </button>
                      )}
                    </Tab>
                  ))}
                </TabList>

                {/* Add new schedule button ===================================== */}
                {/* <Button
                  className="w-[220px] ml-auto"
                  variant="outline"
                  onClick={addNewSchedule}
                >
                  <span className="bg-primary py-1 px-1 mr-3 text-white rounded-md text-sm">
                    <PiPlus />
                  </span>
                  <span className="text-sm font-medium text-black">
                    Add New Schedule
                  </span>
                </Button> */}
              </div>

              {/* Customer details ======================================= */}
              <TabPanels className="mt-5">
                {scheduleFormData.map(({ id, formData }) => (
                  <TabPanel key={id}>
                    <ScheduleForm
                      key={id}
                      onDelete={handleDeleteSchedule}
                      index={id}
                      formData={formData}
                      onAddNewSchedule={addNewSchedule}
                    />
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
