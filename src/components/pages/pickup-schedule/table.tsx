import { GetOnePickupRouteResponse } from "@/features/api/schedule-module/pickupRoute.type";
import { Button } from "rizzui";

interface TableProps {
  routeDetails: GetOnePickupRouteResponse;
}

function Table({ routeDetails }: TableProps) {
  return (
    <div className="flex flex-col  bg-white w-full h-[250px] mt-7 rounded-md pr-4">
      <Button
        className="py-5 bg-primary w-fit rounded-b-none rounded-t-md text-white text-sm font-semibold"
        type="submit"
      >
        <div className="flex items-center">
          <span className="mx-2">{routeDetails.data.name}</span>
        </div>
      </Button>
      <table className="w-full border border-gray-300  rounded-md relative border-separate border-spacing-0 ">
        <tr className="text-base h-[40px] text-[#434343] bg-[#C6E7D9] sticky top-0 left-0 z-10 rounded-md">
          {[
            "Customer Name",
            "Material",
            "Total Rate",
            "Total Weight",
            "Delivery Location",
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
        <tbody>
          {routeDetails.pickup?.map((curr, indx: number) => (
            <tr
              className={`h-[30px] text-[#424242] font-normal text-sm text-start ${
                indx % 2 !== 0 ? "bg-[#ebeef0]" : ""
              }`}
              key={indx}
            >
              <td className="pl-5 py-4">{curr.id}</td>
              <td className="px-2 py-4">{curr?.materials.join(", ")}</td>
              <td className="px-2 py-4">{curr?.rate.join(", ")}</td>
              <td className="px-2 py-4">{curr?.tare_weight.join(", ")}</td>
              <td className="px-2 py-4">{curr?.coordinates.join(", ")}</td>
              <td className="px-2 py-4">{curr?.status}</td>
              <td className="px-2 py-4"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
