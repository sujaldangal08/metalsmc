import { PickupRouteData } from "@/features/api/schedule-module/pickupRoute.type";
import cn from "@/utils/class-names";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import { Button } from "rizzui";

interface TableProps {
  routeDetails: PickupRouteData[];
}

function Table({ routeDetails }: TableProps) {
  return (
    <div className="flex flex-col  bg-white w-full h-[250px] mt-10 rounded-md pr-4">
      <Tab.Group defaultIndex={0}>
        <Tab.List className="flex gap-2 ">
          {routeDetails.map((route) => (
            <Tab as={Fragment}>
              {({ selected }) => (
                <Button
                  key={route.id}
                  className={cn(
                    "py-5 bg-gray-200 w-fit rounded-b-none rounded-t-md text-gray-700 text-sm font-medium hover:bg-gray-300",
                    selected && "bg-primary text-white focus:ring-0 hover:bg-primary"
                  )}
                  type="submit"
                >
                  <div className="flex items-center">
                    <span className="mx-2">{route.name}</span>
                  </div>
                </Button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {routeDetails.map((route) => (
            <Tab.Panel key={route.id}>
              <table className="w-full border border-gray-300  rounded-md relative border-separate border-spacing-0 ">
                <thead>
                  <tr className="text-base h-[40px] text-[#434343] bg-[#C6E7D9] sticky top-0 left-0 z-10 rounded-md">
                    {[
                      "Customer Name",
                      "Material",
                      "Total Rate",
                      "Total Weight",

                      "Status",
                    ].map((header) => (
                      <th
                        key={header}
                        className="font-medium first:pl-5 px-2 text-start border-y-[1px] border-y-primary"
                      >
                        {header}
                      </th>
                    ))}
                    <th className="font-medium px-2 text-start w-[80px] border-y-primary border-y-[1px]">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {route.schedule.map((schedule, indx) => (
                    <tr
                      className={`h-[30px] text-[#424242] font-normal text-sm text-start ${
                        indx % 2 !== 0 ? "bg-[#ebeef0]" : ""
                      }`}
                      key={indx}
                    >
                      <td className="pl-5 py-4">{schedule.customer.name}</td>
                      <td className="px-2 py-4">
                        {schedule.materials
                          .map((material) => material.name)
                          .join(", ")}
                      </td>
                      <td className="px-2 py-4">
                        {schedule.materials
                          .map((material) => '$' +material.rate)
                          .join(", ")}
                      </td>
                      <td className="px-2 py-4">
                        {schedule.materials
                          .map((material) => material.amount)
                          .join(", ")} (tons)
                      </td>

                      <td className="px-2 py-4">{schedule?.status}</td>
                      <td className="px-2 py-4"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default Table;
