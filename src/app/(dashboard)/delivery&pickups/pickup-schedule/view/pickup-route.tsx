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

<p className="text-black">
  Email :{" "}
  <span className="text-black text-normal">
    {routeDetails?.data.driver.name}
  </span>
</p>
<p className="text-black">
  Phone :{" "}
  <span className="text-[#706F6F]">
    {routeDetails?.data.asset.rego_number}
  </span>
</p>
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
