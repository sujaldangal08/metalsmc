import { LoadingSpinner } from "@/components/ui/file-upload/upload-zone";
import { getAllPickupRoutes } from "@/features/api/schedule-module/pickupRoute.api";
import { GetAllPickupResponse } from "@/features/api/schedule-module/pickupRoute.type";
import useSWR from "swr";
import Card from "./card";
import Table from "./table";

interface TableCardProps {
  driverData: GetAllPickupResponse["data"][0];
}

function TableCard({ driverData }: TableCardProps) {
  return (
    <div className="flex shadow-md first:rounded-t-none rounded-md overflow-hidden bg-white flex-row gap-8 border-t border-gray-200 ">
      <Card driverDetails={driverData} />

      <Table routeDetails={driverData.routes} />
    </div>
  );
}

export default TableCard;
