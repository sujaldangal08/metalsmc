import { Badge } from "@/components/ui/badge";
import { PickupScheduleDetails } from "@/features/api/schedule-module/pickupRoute.type";

export interface ScheduleCardProps {
  scheduleDetails: PickupScheduleDetails;
}

export default function ScheduleCard({ scheduleDetails }: ScheduleCardProps) {
  const { id, customer, materials, coordinates, notes, rate, tare_weight } =
    scheduleDetails;

  const formattedTableData = materials.map((material, index) => {
    return {
      material,
      rate: `$${rate[index]}`,
      total_weight: `${tare_weight[index]} tons`,
    };
  });

  return (
    <div className="p-6 flex flex-col gap-5">
      <Badge className="bg-[#C6E7D9] w-fit text-black text-sm font-medium rounded px-2 py-1.5">
        Schedule: {id}
      </Badge>
      <div className="flex gap-5">
        <div className="flex flex-col gap-5 w-1/4">
          <h1 className="text-sm font-semibold leading-normal">
            Customer Details
          </h1>
          <p>Customer's Name: {customer.name}</p>
          <p>Pickup Location: {coordinates.join(", ")}</p>
          <p>Note: {notes}</p>
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
                {formattedTableData.map(
                  ({ material, rate, total_weight }, index) => (
                    <tr key={index} className="even:bg-[#C6E7D930]">
                      <td className="px-5 py-2">{material}</td>
                      <td className="px-5 py-2">{rate}</td>
                      <td className="px-5 py-2">{total_weight}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
