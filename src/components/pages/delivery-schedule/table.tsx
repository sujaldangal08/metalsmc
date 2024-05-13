"use client";

import { DeliveryData } from "@/features/api/schedule-module/deliverySchedule.type";
import cn from "@/utils/class-names";
import { formateDDmmYY } from "@/utils/format-date";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Fragment } from "react";
import { Button } from "rizzui";

interface TableProps {
  deliveryData: DeliveryData[];
}

function DeliveryTabel({ deliveryData }: TableProps) {
  const columnHelper = createColumnHelper<DeliveryData>();

  const columns = [
    columnHelper.accessor("customer", {
      cell: (info) => info.getValue().name,
      header: "Customer Name",
      size: 220,
    }),
    columnHelper.accessor("materials", {
      cell: (info) => info.getValue().join(", "),
      header: "Material",
      size: 200,
    }),
    columnHelper.accessor("rate", {
      cell: (info) =>
        info
          .getValue()
          .map((rate) => "$" + rate)
          .join(", "),
      header: "Unit Price",
    }),
    columnHelper.accessor("totalWeight", {
      cell: (info) => `${info.getValue()} (tons)`,
      header: "Total Weight",
    }),
    columnHelper.accessor("coordinates", {
      cell: (info) => {
        // const data = await getLocationFromCoordinates({
        //   latitude: info.getValue()[0],
        //   longitude: info.getValue()[1],
        // });
        // console.log(data);
        return "Hey";
      },
      header: "Location",
      size: 220,
    }),
    columnHelper.accessor("start_date", {
      cell: (info) => formateDDmmYY(info.getValue()),
      header: "Start Date",
      size: 200,
    }),
    columnHelper.accessor("end_date", {
      cell: (info) => formateDDmmYY(info.getValue()),
      header: "End Date",
      size: 200,
    }),
    columnHelper.accessor("n_trips", {
      cell: (info) => info.getValue(),
      header: "No. of Trips",
    }),
  ];

  const table = useReactTable({
    data: deliveryData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col bg-white 2xl:w-full 2xl:mt-10 mt-0 rounded-md pl-2 pr-4 2xl:pb-0 pb-5">
      <TabGroup defaultIndex={0}>
        <TabList className="flex gap-2">
          {deliveryData.map((delivery) => (
            <Tab key={delivery.id} as={Fragment}>
              {({ selected }) => (
                <Button
                  key={delivery.id}
                  className={cn(
                    "py-5 bg-gray-200 w-fit rounded-b-none rounded-t-md text-gray-700 text-sm font-medium hover:bg-gray-300",
                    selected &&
                      "bg-primary text-white focus:ring-0 hover:bg-primary"
                  )}
                  type="submit"
                >
                  <div className="flex items-center">
                    <span className="mx-2">{delivery.name}</span>
                  </div>
                </Button>
              )}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {deliveryData.map((deliver) => (
            <TabPanel key={deliver.id}>
              <div className="rounded-b-lg rounded-tr-lg border border-gray-200 overflow-clip">
                {table && (
                  <table className="w-full">
                    <thead className="bg-[#C6E7D999]">
                      {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                          {headerGroup.headers.map((header) => (
                            <th
                              key={header.id}
                              className="px-2 py-1 font-normal"
                              style={{
                                width: `${header.column.columnDef.size}px`,
                              }}
                            >
                              {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                  )}
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody>
                      {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                          {row.getVisibleCells().map((cell) => (
                            <td key={cell.id} className="text-center py-1">
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default DeliveryTabel;
