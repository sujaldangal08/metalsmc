import { Badge } from "@/components/ui/badge";
import { PickupScheduleDetails } from "@/features/api/schedule-module/pickupRoute.type";
import { Avatar } from "rizzui";
import EmailIcon from "@public/assets/Icons/emailIcon";
import PhoneIcon from "@public/assets/Icons/phoneIcon";


export interface ScheduleCardProps {
  scheduleDetails: PickupScheduleDetails;
}




export default function ScheduleCard({ scheduleDetails }: ScheduleCardProps) {
  const { id, customer, materials, coordinates, notes } = scheduleDetails;

  return (
    <div className="p-6 flex flex-col gap-5">
      <Badge className="bg-[#C6E7D9] w-fit text-black text-sm font-medium rounded px-2 py-1.5 border-2 border-[#37A05F]">
        Schedule: {id}
      </Badge>
      <div className="flex gap-5">
      <div className="flex flex-col gap-2 w-1/4">
  <Avatar
    name="John Doe"
    src="https://randomuser.me/api/portraits/women/40.jpg"
    size="xl"
  />
  <h1 className="text-sm font-semibold leading-normal">Customer Details</h1>
  <div className="grid grid-cols-2 gap-x-12 gap-y-2">
  <span className="font-normal w-36">Customer's Name:</span>
  <span>{customer.name}</span>

  <span className="font-normal">Email:</span>
  <span>johndoe@gmail.com</span>

  <span className="font-normal">Phone:</span>
  <span>9876543210</span>

  <span className="font-normal w-32">Pickup Location:</span>
  <span>Auburn</span>

  <span className="font-normal">Note:</span>
  <span>{notes}</span>
</div>
</div>
        <div className="flex flex-col flex-1">
          <h1 className="text-sm font-semibold leading-normal ml-16">
            Material Details
          </h1>

          <div className="border rounded ml-16">
            <table className="w-full">
              <thead>
                <tr className="bg-[#C6E7D9]">
                  <th className="px-2 py-2 font-normal w-1/6 text-start text-black">
                    Material
                  </th>
                  <th className="px-2 py-2 font-normal w-1/6 text-start text-black">
                    Total Weight
                  </th>
                  <th className="px-2 py-2 font-normal w-1/6 text-start text-black">
                    Total Weight
                  </th>
                  <th className="px-2 py-2 font-normal w-1/6 text-start text-black">
                    Tare Weight
                  </th>
                  <th className="px-2 py-2 font-normal w-1/6 text-start text-black">
                    No. of Bins
                  </th>
                  <th className="px-2 py-2 font-normal w-1/6 text-start text-black">
                    Unit Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {materials.map(({ rate, weight, name }, index) => (
                  <tr key={index} className="even:bg-[#C6E7D930]">
                    <td className="px-2 py-2">{name}</td>
                    <td className="px-2 py-2">{rate}</td>
                    <td className="px-2 py-2">{weight}</td>
                    <td className="px-2 py-2">{weight}</td>
                    <td className="px-2 py-2">{weight}</td>
                    <td className="px-2 py-2">{weight}</td>
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
