import { api } from "@/config/api.config";
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
  const response = await api.request<
    RestoreMaintenanceResponse,
    RestoreMaintenanceBody
  >({ endpoint: `${baseEnd}/restore/${id}`, method: "POST", body });
  return response.data;
}

//Delete : Delete Maintenance
export async function deleteMaintenance({ id }: { id: string }) {
  const response = await api.request<DeleteMaintenanceResponse, any>(
    { endpoint: `${baseEnd}/${id}`, method: "POST", body: {} }
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
  const response = await api.request<
    UpdateMaintenanceResponse,
    UpdateMaintenanceBody
  >({ endpoint: `${baseEnd}/${id}`, body, method: "PATCH" });
  return response.data;
}

//Delete: Permanent Delete Maintenance
export async function permanentDeleteMaintenance({ id }: { id: string }) {
  const response = await api.request<PermanentDeleteMaintenanceResponse, any>({
    endpoint: `${baseEnd}/delete/${id}`,
    method: "DELETE",
    body: {}
  }
  );
  return response.data;
}

//Post: Create Maintenance
export async function createMaintenance({
  body,
}: {
  body: CreateMaintenanceBody;
}) {
  const response = await api.request<
    CreateMaintenanceResponse,
    CreateMaintenanceBody
  >({ endpoint: `${baseEnd}`, method: "POST", body });
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
