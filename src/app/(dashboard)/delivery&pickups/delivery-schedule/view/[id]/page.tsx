import { Badge } from "@/components/ui/badge";
import { PickupScheduleDetails } from "@/features/api/schedule-module/pickupRoute.type";
import DeliveryIcon from "@public/assets/Icons/DeliveryIcon";
import Breadcrumb from "@/components/ui/breadcrumb";
import { Avatar } from "rizzui";

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
      <Avatar
        name="John Doe"
        src="https://randomuser.me/api/portraits/women/40.jpg"
        size="xl"
      />
  <div className="flex flex-col items-start">

    <div className="flex flex-row items-center mb-2">
      <p className="text-sm font-semibold text-black mr-2">Driver's Name:</p>
      <span className="text-[#585858]">Siddartha Shakya</span>
    </div>
    <div className="flex flex-row items-center">
      <p className="text-sm font-semibold text-black mr-2">Truck Driver's Plate no:</p>
      <span>123456</span>
    </div>
  </div>
  <div className="flex flex-col items-start">
    <div className="flex flex-row items-center mb-2">
      <p className="text-sm font-semibold text-black mr-2">Email:</p>
      <span className="text-[#585858]">sid.sdk@gmail.com</span>
    </div>
    <div className="flex flex-row items-center">
      <p className="text-sm font-semibold text-black mr-2">Phone:</p>
      <span>(+977) 9876543210</span>
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
<Avatar
        name="John Doe"
        src="https://randomuser.me/api/portraits/women/40.jpg"
        size="xl"
      />

      
<div className="flex flex-row gap-60 w-1/2">
<div className="inline-flex flex-col space-y-2">
    <p className="text-sm font-semibold text-black mr-32">Customer Details</p>
    <p>Customer's Name : John Doe</p>
    <p>Pickup Location: Auburn</p>
    <p>Note: Fragile Material </p>
  </div>
<div className="inline-flex flex-col space-y-2">
    <p className="text-sm font-semibold text-black ml-32">Trip Details</p>
    <p>Start Date: dd/mm/yy</p>
    <p>Interval: 5 Days</p>
    <p>Number of Days: 3 </p>
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
    </>
  );
}

/*



import cn from "@/utils/class-names";
import DownArrowIcon from "@public/assets/Icons/downarrow-icon";
import ScheduleCard, { ScheduleCardProps } from "./schedule-card";
import DisLikeIcon from "@public/assets/Icons/dislike-icon";
import { Badge } from "@/components/ui/badge";
import useSWR from "swr";
import { getOnePickupRoute } from "@/features/api/schedule-module/pickupRoute.api";
import { LoadingSpinner } from "@/components/ui/file-upload/upload-zone";
import DeliveryTruckIcon from "@/components/icons/delivery-truck";
;
import { Avatar } from "rizzui";
import PhoneIcon from "@public/assets/Icons/phoneIcon";
import EmailIcon from "@public/assets/Icons/emailIcon";

interface PickupRouteProps {
  id: number;
  isOpen: boolean;
  onClick: () => void;
}

export default function PickupRoute({ id, isOpen, onClick }: PickupRouteProps) {
  const { data: routeDetails, isLoading } = useSWR(
    () => (id ? ["pickup-route-details", id] : null),
    ([_, id]) => getOnePickupRoute(id)
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="rounded overflow-hidden">
      <div className="bg-[#C6E7D9] flex justify-between items-center px-6 py-1">
        <h1 className="text-sm font-medium">{routeDetails?.data.name}</h1>
        <DownArrowIcon
          height="20"
          width="20"
          onClick={onClick}
          className={cn(
            "transform transition-all duration-300 cursor-pointer hover:bg-[#dafff0] rounded",
            isOpen && "-rotate-180"
          )}
        />
      </div>
      {isOpen && (
        <div className="bg-white w-full">
          <div className="p-6 flex justify-between items-center">
          <Avatar
        name="John Doe"
        src="https://randomuser.me/api/portraits/women/40.jpg"
        size="xl"
      />

            <div className="flex flex-col gap-2">

              <p className="text-black">
                
                Driver’s Name :{" "}
                <span className="text-[#706F6F]">
                  {routeDetails?.data.driver.name}
                </span>
              </p>
              <p className="text-black">
                Truck License Plate no :{" "}
                <span className="text-[#706F6F]">
                  {routeDetails?.data.asset.rego_number}
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-2">

<div className=" flex items-center text-black">
<div className=" bg-green-200 rounded-full p-1 mr-2">
  <EmailIcon className="text-black" />
  </div>
  Email :{" "}
  <span className="text-black text-normal">
    {routeDetails?.data.driver.name}
  </span>
</div>
<div className="flex items-center text-black">
  <div className=" bg-green-100 rounded-full p-1 mr-2">
  <PhoneIcon className="text-black" />
  </div>
 
  Phone: <span className="text-[#706F6F]">{routeDetails?.data.asset.rego_number}</span>
</div>
</div>
<div className="border-2 border-yellow-600 rounded-md p-3 bg-orange-400/20">
    <div className="flex flex-row">
   
    <p className="text-yellow-500 text-md font-normal pl-4"> 2 Pickup in Queue</p>
    </div>

  </div>
          </div>
          {routeDetails?.data.schedule.map((schedule, index) => (
            <div key={index}>
              <hr />
              <ScheduleCard scheduleDetails={schedule} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

*/