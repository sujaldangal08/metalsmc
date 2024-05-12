import { Badge } from "@/components/ui/badge";
import { PickupSchedule } from "@/features/api/schedule-module/pickupRoute.type";
import { Avatar } from "rizzui";

export interface ScheduleCardProps {
  scheduleDetails: PickupSchedule;
}

export default function ScheduleCard({ scheduleDetails }: ScheduleCardProps) {
  const { id, customer, materials, notes, coordinates } = scheduleDetails;

  return (
    <div className="p-6 flex flex-col gap-5">
      <Badge className="bg-[#C6E7D9] w-fit text-black text-sm font-medium rounded px-2 py-1.5 border-2 border-[#37A05F]">
        Schedule: {id}
      </Badge>
      <div className="flex gap-5">
        <div className="flex flex-col gap-2 w-1/4">
          <Avatar name="John Doe" src={customer.name} size="xl" />
          <h1 className="text-sm font-semibold leading-normal">
            Customer Details
          </h1>
          <div className="grid grid-cols-2 gap-x-12 gap-y-2">
            <span className="font-normal w-36">Customer's Name:</span>
            <span>{customer.name}</span>

            <span className="font-normal">Email:</span>
            <span>{customer.email}</span>

            <span className="font-normal">Phone:</span>
            <span>{customer.contact}</span>

            <span className="font-normal w-32">Pickup Location:</span>
            <span>{coordinates.join(", ")}</span>

            <span className="font-normal">Note:</span>
            <span>{notes}</span>
          </div>
        </div>
        <div className="flex flex-col flex-1 ml-16">
          <h1 className="text-sm font-semibold leading-normal mb-2">
            Material Details
          </h1>

          <div className="border rounded-md">
            <table className="w-full">
              <thead>
                <tr className="bg-[#C6E7D9]">
                  {[
                    "Material",
                    "total weight",
                    "total weight",
                    "total weight",
                    "no of bins",
                    "unit price",
                  ].map((item) => (
                    <th className="first:pl-4 px-2 py-2 font-normal w-1/6 text-start text-black">
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {materials.map(({ rate, amount, name }, index) => (
                  <tr key={index} className="even:bg-[#C6E7D930]">
                    <td className="px-2 py-2">{name}</td>
                    <td className="px-2 py-2">{rate}</td>
                    <td className="px-2 py-2">{amount}</td>
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
