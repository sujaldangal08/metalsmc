import { api } from "@/config/api.config";
import { GetAllDeliveryTripResponse } from "./deliveryTrip.type";

const baseEnd = "/delivery-trip";

//Get: Get All Delivery Trip
export async function getAllDeliveryTrip() {
  const response = await api.get<GetAllDeliveryTripResponse>(`${baseEnd}`);
  return response.data;
}
