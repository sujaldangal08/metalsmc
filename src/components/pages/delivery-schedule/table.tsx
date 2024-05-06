import { DeliverySchedule } from "@/features/api/schedule-module/deliverySchedule.type";
import { Button } from "rizzui";

interface TableProps {
  deliveryDetails: DeliverySchedule;
}

function Table({deliveryDetails }: TableProps) {
  const {locale, materials, customer_id,start_date, amount,status, interval, coordinates, n_trips, end_date, rate} = deliveryDetails;


  return (
    <div className="flex flex-col  bg-white  h-[250px] mt-7 rounded-md pr-4  ">
      <Button
        className="py-5 bg-primary w-fit  rounded-b-none rounded-t-md text-white text-sm font-semibold"
        type="submit"
      >
        <div className="flex items-center">
          <span className="mx-2 capitalize">{locale} schedule</span>
        </div>
      </Button>
      <table className="  border border-gray-300  rounded-md relative border-separate border-spacing-0 ">

             <thead>
          <tr className="text-base h-[40px] text-[#434343] bg-[#C6E7D9] sticky top-0 left-4 z-10 rounded-md whitespace-nowrap">
            {[
              "Customer Name",
              "Material",
              "unit Price",
              "Total Weight",
              "Location",
              "Start Date",
              "No.of Trips",
              "Interval",
              "Status",
            ].map((header) => (
              <th
                key={header}
                className=" flex-1  font-medium first:pl-5 px-2 text-center border-y-[1px] border-y-primary"
              >
                {header}
              </th>
            ))}
            <th className=" flex-auto font-medium px-2 text-start w-[80px] border-y-primary border-y-[1px]">
              Action  
            </th>
          </tr>
        </thead>
        <tbody>
        
            <tr
              className={`h-[30px] text-[#424242] font-normal text-sm text-start whitespace-nowrap overflow-x-auto `}
             
            >
              <td className="px-6 py-4 whitespace-nowrap">{customer_id}</td>
              <td className="px-2 py-4 whitespace-nowrap">{materials.join(", ")}</td>
              <td className="px-2 py-4 whitespace-nowrap">{rate.join(", ")}</td>
              <td className="px-2 py-4 whitespace-nowrap">{amount.join(", ")}</td>
              <td className="px-2 py-4 whitespace-nowrap">{coordinates.join(", ")}</td>
              <td className="px-2 py-4 whitespace-nowrap">{start_date}</td>
              <td className="px-2 py-4 whitespace-nowrap ">{end_date}</td>
              <td className="px-2 py-4 whitespace-nowrap">{n_trips}</td>
              <td className="px-2 py-4 whitespace-nowrap text-center">{interval}</td>
              <td className="px-2 py-4 whitespace-nowrap">{status}</td>

            </tr>
        
        </tbody>
      </table>
    </div>
  );
}

export default Table;
