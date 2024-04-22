import { api } from "@/features/api";
import {
  PermanentDeleteMaintenanceResponse,
  UpdateMaintenanceBody,
  UpdateMaintenanceResponse,
  CreateMaintenanceBody,
  CreateMaintenanceResponse,
  GetAllMaintenanceBody,
  GetMaintenanceBody,
  RestoreMaintenanceBody,
  RestoreMaintenanceResponse,
  DeleteMaintenanceResponse,
} from "./maintenance.type";

const baseEnd = "/maintenance";

//Post: Restore Maintenance
export async function restoreMaintenance({
  id,
  body,
}: {
  id: string;
  body: RestoreMaintenanceBody;
}) {
  const response = await api.post<
    RestoreMaintenanceResponse,
    RestoreMaintenanceBody
  >(`${baseEnd}/restore/${id}`, body);
  return response.data;
}

//Delete : Delete Maintenance
export async function deleteMaintenance({ id }: { id: string }) {
  const response = await api.delete<DeleteMaintenanceResponse>(
    `${baseEnd}/${id}`
  );
  return response.data;
}

//Patch: Update Maintenance
export async function updateMaintenance({
  id,
  body,
}: {
  id: string;
  body: UpdateMaintenanceBody;
}) {
  const response = await api.patch<
    UpdateMaintenanceResponse,
    UpdateMaintenanceBody
  >(`${baseEnd}/${id}`, body);
  return response.data;
}

//Delete: Permanent Delete Maintenance
export async function permanentDeleteMaintenance({ id }: { id: string }) {
  const response = await api.delete<PermanentDeleteMaintenanceResponse>(
    `${baseEnd}/delete/${id}`
  );
  return response.data;
}

//Post: Create Maintenance
export async function createMaintenance({
  body,
}: {
  body: CreateMaintenanceBody;
}) {
  const response = await api.post<
    CreateMaintenanceResponse,
    CreateMaintenanceBody
  >(`${baseEnd}`, body);
  return response.data;
}

//Get: Get All Maintenance
export async function getAllMaintenance() {
  const response = await api.get<GetAllMaintenanceBody>(`${baseEnd}`);
  return response.data;
}

//Get: Get One Maintenance
export async function getMaintenance() {
  const response = await api.get<GetMaintenanceBody>(`${baseEnd}`);
  return response.data;
}
