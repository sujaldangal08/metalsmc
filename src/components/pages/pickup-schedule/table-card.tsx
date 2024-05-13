import { GetAllPickupResponse } from "@/features/api/schedule-module/pickupRoute.type";
import Card from "./card";
import Table from "./table";
import { formateDDMMYY } from "@/utils/format-date";

interface TableCardProps {
  driverData: GetAllPickupResponse["data"][0];
}

function TableCard({ driverData }: TableCardProps) {
  return (
    <div className="py-3 bg-white rounded-md shadow-md overflow-hidden">
      <p className="font-normal text-sm pl-4 pb-2">
        Date: {formateDDMMYY(driverData?.routes[0]?.created_at)}
      </p>

      <div className="flex overflow-hidden flex-row gap-8 border-t border-gray-200 ">
        <Card driverDetails={driverData} />
        <Table routeDetails={driverData.routes} />
      </div>
    </div>
  );
}

export default TableCard;
