import { DeliverySchedule } from "@/features/api/schedule-module/deliverySchedule.type";
import Card from "./card";
import Table from "./table";

interface TableCardProps {
  deliveryData: DeliverySchedule;
}

function TableCard({ deliveryData }: TableCardProps) {
  // const { data: scheduleDetails, isLoading } = useSWR(
  //   () => (scheduleData.id ? ["delivery-schedule-details", scheduleData.id] : null),
  //   ([_, id]) => getOneDeliverySchedule(id)
  // );

  // const { data } = useSWR(
  //   () => (scheduleData.id ? ["pickup-route-details", scheduleData.driver_id] : null),
  //   ([_, id]) => getDriverDetails(id)
  // );

  return (
    <div className=" shadow-md first:rounded-t-none rounded-md overflow-hidden bg-white flex-row gap-8 border-t border-gray-200 ">
      <Card />
      <Table deliveryDetails={deliveryData} />
    </div>
  );
}

export default TableCard;
