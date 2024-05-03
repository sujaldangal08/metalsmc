import cn from "@/utils/class-names";
import DownArrowIcon from "@public/assets/Icons/downarrow-icon";
import ScheduleCard, { ScheduleCardProps } from "./schedule-card";
import DisLikeIcon from "@public/assets/Icons/dislike-icon";
import { Badge } from "@/components/ui/badge";

interface PickupRouteProps {
  route_name: string;
  driver_name: string;
  truck_license_plate_no: string;
  schedules: ScheduleCardProps[];
  isOpen: boolean;
  onClick: () => void;
}

export default function PickupRoute({
  route_name,
  driver_name,
  truck_license_plate_no,
  schedules,
  isOpen,
  onClick,
}: PickupRouteProps) {
  return (
    <div className="rounded overflow-hidden">
      <div className="bg-[#C6E7D9] flex justify-between items-center px-6 py-1">
        <h1 className="text-sm font-medium">Route Name : {route_name}</h1>
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
            <div className="flex flex-col gap-2">
              <p className="text-black">
                Driver’s Name :{" "}
                <span className="text-[#706F6F]">{driver_name}</span>
              </p>
              <p className="text-black">
                Truck License Plate no :{" "}
                <span className="text-[#706F6F]">{truck_license_plate_no}</span>
              </p>
            </div>
            <Badge className="bg-[#DADADA] text-black text-sm font-normal flex gap-2 w-fit px-5 py-2">
              <DisLikeIcon height="17" width="18" />
              <p>Unavailable for Pickup</p>
            </Badge>
          </div>
          {schedules.map((schedule, index) => (
            <div key={index}>
              <hr />
              <ScheduleCard
                schedule_name={schedule.schedule_name}
                customer_name={schedule.customer_name}
                pickup_location={schedule.pickup_location}
                note={schedule.note}
                materials={schedule.materials}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
