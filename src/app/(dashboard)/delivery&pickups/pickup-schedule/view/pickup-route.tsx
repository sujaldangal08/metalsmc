import cn from "@/utils/class-names";
import DeliveryIcon from "@public/assets/Icons/deliveryIcon";
import DownArrowIcon from "@public/assets/Icons/downarrow-icon";
import EmailIcon from "@public/assets/Icons/emailIcon";
import Icon from "@public/assets/Icons/icon";
import PhoneIcon from "@public/assets/Icons/phoneIcon";
import { Avatar } from "rizzui";
import ScheduleCard from "./schedule-card";

import { PickupRouteData } from "@/features/api/schedule-module/pickupRoute.type";
import DeliveryTruck from "@public/assets/Icons/truck.icon";

interface PickupRouteProps {
  id: number;
  isOpen: boolean;
  driverDetails: { name: string; image: string; contact: string };
  routeDetails: PickupRouteData;
  onClick: () => void;
}

export default function PickupRoute({
  driverDetails: { name: driverName, image, contact },
  routeDetails,
  isOpen,
  onClick,
}: PickupRouteProps) {
  const { name, asset, schedule } = routeDetails;

  return (
    <div className="rounded overflow-hidden">
      <div
        className="bg-[#C6E7D9] flex justify-between items-center px-6 py-1 "
        onClick={onClick}
      >
        <h1 className="text-sm font-medium">{name}</h1>
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
            <Avatar name={driverName} src={image} size="xl" />

            <div className="flex flex-col gap-2">
              <div className="flex items-center text-black">
                <div className=" bg-green-100 rounded-full p-1 mr-2">
                  <Icon />
                </div>
                Driver's Name:{" "}
                <span className="text-[#706F6F] ml-20">{driverName}</span>
              </div>

              <div className="flex items-center text-black">
                <div className=" bg-green-100 rounded-full p-1 mr-2">
                  <DeliveryIcon />
                </div>
                Truck License Plate no:{" "}
                <span className="text-[#706F6F] ml-6">{asset.rego_number}</span>
              </div>
            </div>
            <div className="h-14 w-px bg-gray-200"></div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center text-black">
                <div className=" bg-green-100 rounded-full p-1 mr-2">
                  <EmailIcon />
                </div>
                Email:
                <span className="text-[#706F6F] ml-10">
                  {asset.rego_number}
                </span>
              </div>
              <div className="flex items-center text-black">
                <div className=" bg-green-100 rounded-full p-1 mr-2">
                  <PhoneIcon className="text-black" />
                </div>
                Phone: <span className="text-[#706F6F] ml-9">{contact}</span>
              </div>
            </div>
            <div className="h-14 w-px bg-gray-200"></div>
            <div className="border-2 border-yellow-500 rounded-md p-2 bg-orange-400/20">
              <div className="flex items-center">
                <DeliveryTruck className="w-6 h-6" />

                <p className="text-yellow-500 text-sm font-normal pl-2">
                  {" "}
                  2 Pickup in Queue
                </p>
              </div>
            </div>
          </div>
          {schedule.map((schedule, index) => (
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
