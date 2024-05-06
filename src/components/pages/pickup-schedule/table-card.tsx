import { LoadingSpinner } from "@/components/ui/file-upload/upload-zone";
import { getOnePickupRoute } from "@/features/api/schedule-module/pickupRoute.api";
import { PickupRouteData } from "@/features/api/schedule-module/pickupRoute.type";
import useSWR from "swr";
import Card from "./card";
import Table from "./table";

interface TableCardProps {
  routeData: PickupRouteData;
}

function TableCard({ routeData }: TableCardProps) {
  const { data: routeDetails, isLoading } = useSWR(
    () => (routeData.id ? ["pickup-route-details", routeData.id] : null),
    ([_, id]) => getOnePickupRoute(id)
  );

  // const { data } = useSWR(
  //   () => (routeData.id ? ["pickup-route-details", routeData.driver_id] : null),
  //   ([_, id]) => getDriverDetails(id)
  // );

  if (isLoading || !routeDetails) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex shadow-md first:rounded-t-none rounded-md overflow-hidden bg-white flex-row gap-8 border-t border-gray-200 ">
      <Card driverDetails={routeDetails.data} />

      <Table routeDetails={routeDetails} />
    </div>
  );
}

export default TableCard;
