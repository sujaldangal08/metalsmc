import { api } from "@/config/api.config";
import {
  GetAllDeliveryScheduleResponse,
  GetOneDeliveryScheduleResponse,
  DeliveryScheduleBody,
  DeliveryScheduleResponse,
} from "./deliverySchedule.type";

const baseEnd = "/delivery";

//Get: Get All Delivery Schedule
export async function getAllDeliverySchedule() {
  const response = await api.get<GetAllDeliveryScheduleResponse>(`${baseEnd}`);
  return response.data;
}

//Get: Get One Delivery Schedule
export async function getOneDeliverySchedule(id: string) {
  const response = await api.get<GetOneDeliveryScheduleResponse>(
    `${baseEnd}/${id}`
  );
  return response.data;
}

//Post: Create Delivery Schedule
export async function createDeliverySchedule(body: DeliveryScheduleBody) {
  const response = await api.request<
    DeliveryScheduleResponse,
    DeliveryScheduleBody
  >({
    endpoint: `${baseEnd}`,
    method: "POST",
    body,
  });
  return response.data;
}
