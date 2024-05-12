import { DeliverySchedule } from "@/features/api/schedule-module/deliverySchedule.type";
import Card from "./card";
import Table from "./table";
import { formateDDMMYY } from "@/utils/format-date";

interface TableCardProps {
  deliverySchedule: DeliverySchedule;
}

function TableCard({ deliverySchedule }: TableCardProps) {
  return (
    <div>
      <div className="py-3 bg-white rounded-t-md">
        <p className="font-normal text-sm pl-4">
          {/* Date: {formateDDMMYY(deliverySchedule?.created_at)} */}
          Date: DD/MM/YY
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex 2xl:flex-row flex-col shadow-md first:rounded-t-none rounded-md bg-white 2xl:gap-2 gap-0 border-t border-gray-200 ">
          <Card
            driverDetails={{ name: "Ram Thapa", image: "" }}
            id={deliverySchedule.id}
            truckNumer={5}
          />
          <Table deliveryData={deliverySchedule.delivery} />
        </div>
      </div>
    </div>
  );
}

export default TableCard;
