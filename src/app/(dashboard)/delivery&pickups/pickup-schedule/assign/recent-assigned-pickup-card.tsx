import cn from "@/utils/class-names";
import { EyeIcon, PenIcon, BinIcon } from "@public/assets/Icons";
import { Avatar } from "rizzui";

interface Props {
  curr: {
    avatar: string;
    truckNumber: string;
    name: string;
  };
}

export default function RecentAssignedPickupCard({ curr }: Props) {
  return (
    <div className="bg-white flex flex-col items-center p-4 mr-2 rounded-[6px]">
      <Avatar
        src={curr.avatar}
        name="John Doe"
        className={cn("!w-[70px] !h-[70px] border border-green")}
      />
      <h3 className="text-md font-medium mt-4">Driver's Name</h3>
      <h3 className="text-md font-medium truncate text-green">{curr.name}</h3>
      <h3 className="text-sm font-medium mt-1 text-gray-dark">
        Truck Number: {curr.truckNumber}
      </h3>
      <div className="flex items-center  justify-between bg-gray-100 w-[55%] h-10 rounded-full mt-4 px-5 [&>svg]:w-5 [&>svg]:h-5">
        <EyeIcon />
        <PenIcon />
        <BinIcon />
      </div>
    </div>
  );
}
