import { GetAllPickupResponse } from "@/features/api/schedule-module/pickupRoute.type";
import Card from "./card";
import Table from "./table";
import { formateDDMMYY } from "@/lib/formateDate";

interface TableCardProps {
  driverData: GetAllPickupResponse["data"][0];
}

function TableCard({ driverData }: TableCardProps) {
  return (
    <div>
      <div className="py-3 bg-white rounded-t-md">
        <p className="font-normal text-sm pl-4">
          Date: {formateDDMMYY(driverData?.routes[0]?.created_at)}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex shadow-md first:rounded-t-none rounded-md overflow-hidden bg-white flex-row gap-8 border-t border-gray-200 ">
          <Card driverDetails={driverData} />
          <Table routeDetails={driverData.routes} />
        </div>
      </div>
    </div>
  );
}

export default TableCard;
