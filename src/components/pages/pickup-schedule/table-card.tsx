import { PickupRouteData } from "@/features/api/schedule-module/pickupRoute.type";
import Card from "./card";
import Table from "./table";
import useSWR from "swr";
import { getOnePickupRoute } from "@/features/api/schedule-module/pickupRoute.api";
import { LoadingSpinner } from "@/components/ui/file-upload/upload-zone";
import { getUserDetails as getDriverDetails } from "@/features/api/user";

interface TableCardProps {
  routeData: PickupRouteData;
}

function TableCard({ routeData }: TableCardProps) {
  const { data: routeDetails, isLoading } = useSWR(
    () => (routeData.id ? ["pickup-route-details", routeData.id] : null),
    ([_, id]) => getOnePickupRoute(id)
  );

  const { data } = useSWR(
    () => (routeData.id ? ["pickup-route-details", routeData.driver_id] : null),
    ([_, id]) => getDriverDetails(id)
  );

  if (isLoading || !routeDetails) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex shadow-md first:rounded-t-none rounded-md overflow-hidden bg-white flex-row gap-8 border-t border-gray-200 ">
      <Card />

      <Table routeDetails={routeDetails} />
    </div>
  );
}

export default TableCard;
