import { LoadingSpinner } from "@/components/ui/file-upload/upload-zone";
import { getAllPickupRoutes } from "@/features/api/schedule-module/pickupRoute.api";
import { PickupRouteData } from "@/features/api/schedule-module/pickupRoute.type";
import useSWR from "swr";
import Card from "./card";
import Table from "./table";

interface TableCardProps {
  routeData: PickupRouteData;
}

function TableCard({ routeData: { driver_id } }: TableCardProps) {
  const { data: routeDetails, isLoading } = useSWR(
    driver_id ? ["pickup-route-details", driver_id] : null,
    ([_, id]) => getAllPickupRoutes({ driver_id: id })
  );

  if (isLoading || !routeDetails) {
    return <LoadingSpinner />;
  }

  console.log("Table card:", routeDetails);

  return (
    <div className="flex shadow-md first:rounded-t-none rounded-md overflow-hidden bg-white flex-row gap-8 border-t border-gray-200 ">
      <Card driverDetails={routeDetails.routes.data[0]} />

      <Table routeDetails={routeDetails.routes} />
    </div>
  );
}

export default TableCard;
