import { PickupRouteData } from "@/features/api/schedule-module/pickupRoute.type";
import cn from "@/utils/class-names";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Fragment } from "react";
import { Button } from "rizzui";
import {
  PenOutlineIcon,
  ThreeDotIcon,
  BinOutlineIcon,
} from "@public/assets/Icons";
import { Dropdown } from "rizzui";
import Status from "@/components/status/status";
import Link from "next/link";
import { Route } from "@/lib/enums/routes.enums";
import { PiLinkSimpleHorizontalBold } from "react-icons/pi";

interface TableProps {
  routeDetails: PickupRouteData[];
}

function Table({ routeDetails }: TableProps) {
  return (
    <div className="flex flex-col  bg-white w-full h-[250px] mt-10 rounded-md pr-4">
      <TabGroup defaultIndex={0}>
        <TabList className="flex gap-2 ">
          {routeDetails.map((route) => (
            <Tab key={route.id} as={Fragment}>
              {({ selected }) => (
                <Button
                  key={route.id}
                  className={cn(
                    "py-5 bg-gray-200 w-fit rounded-b-none rounded-t-md text-gray-700 text-sm font-medium hover:bg-gray-300",
                    selected &&
                      "bg-primary text-white focus:ring-0 hover:bg-primary"
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
        </TabList>
        <TabPanels>
          {routeDetails.map((route) => (
            <TabPanel key={route.id}>
              <table className="w-full border border-gray-300  rounded-md relative border-separate border-spacing-0">
                <thead>
                  <tr className="text-base h-[40px] text-[#434343] bg-[#C6E7D9] sticky top-0 left-0 z-10 rounded-md">
                    {[
                      "Customer Name",
                      "Material",
                      "Unit Price",
                      "Total Weight",
                      "Status",
                    ].map((header) => (
                      <th
                        key={header}
                        className="font-medium first:pl-5 px-2 text-start border-t-[1px] border-gray-200"
                      >
                        {header}
                      </th>
                    ))}
                    <th className="font-medium first:pl-5 px-2 text-center border-t-[1px] border-gray-200">
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
                          .map((material) => "$" + material.rate)
                          .join(", ")}
                      </td>
                      <td className="px-2 py-4">
                        {schedule.materials
                          .map((material) => material.amount)
                          .join(", ")}
                        (tons)
                      </td>
                      <td className="px-2 py-4">
                        <Status
                          status={schedule?.status}
                          dotSize="small"
                          title={schedule.status}
                        />
                      </td>
                      <td className="px-2 py-4 flex items-center justify-center">
                        <Dropdown
                          placement="bottom-start"
                          className={"cursor-pointer"}
                        >
                          <Dropdown.Trigger>
                            <ThreeDotIcon w="20" h="20" />
                          </Dropdown.Trigger>
                          <Dropdown.Menu>
                            <Dropdown.Item className="flex gap-3">
                              <PenOutlineIcon w="16" h="16" />
                              <h2 className="text-sm font-medium text-gray-dark">
                                Edit
                              </h2>
                            </Dropdown.Item>
                            <Dropdown.Item className="flex gap-3">
                              <BinOutlineIcon w="16" h="16" />
                              <h2 className="text-sm font-medium text-gray-dark">
                                Delete
                              </h2>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="px-4 py-2.5">
                      <Link
                        href={Route.ViewPickupAttachment}
                        className="text-primary flex gap-0.5 items-center underline leading-6"
                      >
                        <PiLinkSimpleHorizontalBold className="rotate-90 text-md" />{" "}
                        View attachments
                      </Link>
                    </td>

                    <td colSpan={5} className="text-right pr-4">
                      <p>Pickup Unloading</p>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default Table;
