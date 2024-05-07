import { Badge } from "@/components/ui/badge";
import { PickupScheduleDetails } from "@/features/api/schedule-module/pickupRoute.type";
import DeliveryIcon from "@public/assets/Icons/DeliveryIcon";
import Breadcrumb from "@/components/ui/breadcrumb";

export interface ScheduleCardProps {
  scheduleDetails: PickupScheduleDetails;
}

export default function ScheduleCard({ scheduleDetails }: ScheduleCardProps) {
  /*const { id, customer, materials, coordinates, notes, rate, tare_weight } =
    scheduleDetails;

  const formattedTableData = materials.map((material, index) => {
    return {
      material,
      rate: `$${rate[index]}`,
      total_weight: `${tare_weight[index]} tons`,
    };
  }); */

  return (
    <>
          <Breadcrumb className="pl-2 mt-4 mb-4">
        <Breadcrumb.Item href="/delivery-schedule">
          Delivery Schedule
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/">view</Breadcrumb.Item>
      </Breadcrumb>

      <div className="bg-[#C6E7D9]  text-black  font-medium text-md rounded-t-lg w-full py-4 px-6">
        Schedule
      </div>
    <div className="p-6 flex flex-col gap-5 bg-white rounded-md rounded-t-none border-2">


      <div className="flex flex-row items-center justify-between">
  <div className="flex flex-col items-start">
    <div className="flex flex-row items-center mb-2">
      <p className="text-sm font-semibold text-black mr-2">Driver's Name:</p>
      <span className="text-[#585858]">John Doe</span>
    </div>
    <div className="flex flex-row items-center">
      <p className="text-sm font-semibold text-black mr-2">Truck Driver's Plate no:</p>
      <span>123456</span>
    </div>
  </div>
  <div className="border-2 border-yellow-600 rounded-md p-3 bg-orange-400/20">
    <div className="flex flex-row">
    <DeliveryIcon/>
    <p className="text-yellow-500 text-md font-normal pl-4">Delivery in Queue</p>
    </div>

  </div>
</div>

<div className="pt-4">
  <div className="border-b-2 border-gray-300 "></div>
</div>

      <div className="flex gap-5">
        <div className="flex flex-col gap-5 w-1/4">
        <div className="flex flex-col items-start space-y-2">
  <p className="text-sm font-semibold text-black">Trip Details</p>
  <p>Start Date: dd/mm/yy</p>
  <p>Interval: 5 Days</p>
  <p>Number of Days: 3 </p>
</div>
<div className="flex flex-col items-start space-y-2">
  <p className="text-sm font-semibold text-black">Customer Details</p>
  <p>Customer's Name : John Doe</p>
  <p>Pickup Location: Auburn</p>
  <p>Note: Fragile Material </p>
</div>
         
          
          
        </div>

        <div className="flex flex-col gap-5 flex-1">
          <h1 className="text-sm font-semibold leading-normal">
            Material Details
          </h1>
          <p className="text-black">Material Type & Weight</p>
          <div className="border rounded">
            <table className="w-full">
              <thead>
                <tr className="bg-[#C6E7D9]">
                  <th className="px-5 py-2 font-normal w-1/3 text-start text-black">
                    Material
                  </th>
                  <th className="px-5 py-2 font-normal w-1/3 text-start text-black">
                    Price/Unit
                  </th>
                  <th className="px-5 py-2 font-normal w-1/3 text-start text-black">
                    Total Weight
                  </th>
                </tr>
              </thead>
              <tbody>

                    <tr className="even:bg-[#C6E7D930]">
                      <td className="px-5 py-2">material</td>
                      <td className="px-5 py-2">rate</td>
                      <td className="px-5 py-2">total_weight</td>
                    </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
