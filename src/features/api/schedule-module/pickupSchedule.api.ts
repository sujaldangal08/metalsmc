import { api } from "@/config/api.config";
import {
  GetAllPickupScheduleResponse,
  GetOnePickupScheduleResponse,
  PickupScheduleResponse,
  PickupScheduleBody,
  UpdatePickupScheduleResponse,
  UpdatePickupScheduleBody,
  DeletePickupScheduleResponse,
  RestorePickupScheduleResponse,
  RestorePickupScheduleBody,
  PermanentDeletePickupScheduleResponse,
} from "./pickupSchedule.type";

const baseEnd = "/schedule/pickup";

//Get: Get All Pickup Schedule
export async function getAllPickupSchedule() {
  const response = await api.get<GetAllPickupScheduleResponse>(`${baseEnd}`);
  return response.data;
}

//Get: Get One Pickup Schedule
export async function getOnePickupSchedule(id: string) {
  const response = await api.get<GetOnePickupScheduleResponse>(
    `${baseEnd}/${id}`
  );
  return response.data;
}

//Post: Create Pickup Schedule
export async function createPickupSchedule(body: PickupScheduleBody) {
  const response = await api.request<
    PickupScheduleResponse,
    PickupScheduleBody
  >({
    endpoint: `${baseEnd}`,
    method: "POST",
    body,
  });
  return response.data;
}

//Patch: Update Pickup Schedule
export async function updatePickupSchedule({
  id,
  body,
}: {
  id: string;
  body: UpdatePickupScheduleBody;
}) {
  const response = await api.request<
    UpdatePickupScheduleResponse,
    UpdatePickupScheduleBody
  >({
    endpoint: `${baseEnd}/${id}`,
    body,
    method: "PATCH",
  });
  return response.data;
}

//Delete: Delete Pickup Schedule
export async function deletePickupSchedule(id: string) {
  const response = await api.request<DeletePickupScheduleResponse, any>({
    method: "DELETE",
    endpoint: `${baseEnd}/${id}`,
    body: {}
  }
  );
  return response.data;
}

//Post: Restore Pickup Schedule
export async function restorePickupSchedule({
  id,
  body,
}: {
  id: string;
  body: RestorePickupScheduleBody;
}) {
  const response = await api.request<
    RestorePickupScheduleResponse,
    RestorePickupScheduleBody
  >({
    endpoint: `${baseEnd}/${id}`,
    body: body,
    method: "POST",
  });
  return response.data;
}

//Delete: Permanent Delete Pickup Schedule
export async function permanentDeletePickupSchedule(id: string) {
  const response = await api.request<PermanentDeletePickupScheduleResponse, any>(
    { endpoint: `${baseEnd}/${id}`, method: "DELETE", body: {} }
  );
  return response.data;
}
