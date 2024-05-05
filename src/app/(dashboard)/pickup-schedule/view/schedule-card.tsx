import { Badge } from "@/components/ui/badge";

export interface ScheduleCardProps {
  schedule_name: string;
  customer_name: string;
  pickup_location: string;
  note: string;
  materials: {
    material: string;
    price_per_unit: number | string;
    total_weight: number | string;
  }[];
}

export default function ScheduleCard({
  schedule_name,
  customer_name,
  pickup_location,
  note,
  materials,
}: ScheduleCardProps) {
  return (
    <div className="p-6 flex flex-col gap-5">
      <Badge className="bg-[#C6E7D9] w-fit text-black text-sm font-medium rounded px-2 py-1.5">
        {schedule_name}
      </Badge>
      <div className="flex gap-5">
        <div className="flex flex-col gap-5 w-1/4">
          <h1 className="text-sm font-semibold leading-normal">
            Customer Details
          </h1>
          <p>Customer's Name: {customer_name}</p>
          <p>Pickup Location: {pickup_location}</p>
          <p>Note: {note}</p>
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
                {materials.map((material, index) => (
                  <tr key={index} className="even:bg-[#C6E7D930]">
                    <td className="px-5 py-2">{material.material}</td>
                    <td className="px-5 py-2">${material.price_per_unit}</td>
                    <td className="px-5 py-2">{material.total_weight} Tons</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
