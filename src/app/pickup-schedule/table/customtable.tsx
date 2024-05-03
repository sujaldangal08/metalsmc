'use client'
import {
  Column,
  ColumnDef,

  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,

  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import React, { HTMLProps, useState } from "react";


interface CustomTableProps<TData> {

  data: TData[];
  columnsData: ColumnDef<TData>[];


}



function CustomTable<T>({

  data,
  columnsData,



}: CustomTableProps<T>) {
  const [rowSelection, setRowSelection] = React.useState({});
  
 

  //Enquiry table columns =====================
  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [

      ...columnsData,
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,



    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),

    debugTable: true,
  });

 

  return (
    <div className="p-1">
      {/* Table section ========================= */}
      <div className="flex flex-col rounded-md  shadow-md bg-white w-full py-1">


        {/* Table ========================== */}
        <div className="w-full overflow-auto max-h-[55vh] min-h-[50.6vh]">
          <table className="w-full relative border-separate border-spacing-0">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  className="text-base h-[50px] text-black bg-gray-200 sticky top-0 left-0 z-10"
                  key={headerGroup.id}
                >
                  {headerGroup.headers.map((header) => {
                    const headerTitle = header.column.columnDef.header;

                    return (
                      <th
                        className="font-regular text-start border-y-primary border-y-[1px] pl-4"
                        key={header.id}
                        colSpan={header.colSpan}
                      >
                        {header.isPlaceholder ? null : (
                          <>{flexRender(headerTitle, header.getContext())}</>
                        )}
                      </th>
                    );
                  })}

             {/*}     <th className="font-regular text-start border-y-primary border-y-[1px] pl-4">
                    Action
                </th> */}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row, idx) => {
                const dataId = String(
  /*                (data[idx] as AdmissionEnquiryResponse).id */
                );

                return (
                  <tr
                    className={classNames(
                      "h-[45px] text-[#424242] font-regular text-base text-start ",
                      idx % 2 != 0 ? "bg-[#E9EBED]" : ""
                    )}
                    key={row.id}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td className="pl-4" key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}

   
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="h-2" />
      </div>


    </div>
  );
}





export default CustomTable;
