import { api } from "@/config/api.config";
import {
  CreateInsuranceBody,
  CreateInsuranceResponse,
  DeleteInsuranceResponse,
  PermanentDeleteInsuranceResponse,
  RestoreInsuranceResponse,
  RestoreInsuranceBody,
  UpdateInsuranceResponse,
  UpdateInsuranceBody,
  GetAllInsuranceResponse,
  GetOneInsurance,
} from "./insurance.type";

const baseEnd = "/insurance";

//Delete: Permanent Delete Insurance
export async function permanentDeleteInsurance({ id }: { id: string }) {
  const response = await api.request<PermanentDeleteInsuranceResponse, any>({
    endpoint: `${baseEnd}/delete${id}`,
    method: "DELETE",
    body: {}
  }
  );
  return response.data;
}

//Delete: Delete Insurance
export async function deleteInsurance({ id }: { id: string }) {
  const response = await api.request<DeleteInsuranceResponse, any>({
    endpoint: `${baseEnd}/${id}`,
    method: "DELETE",
    body: {}
  });
  return response.data;
}

//Post: Create Insurance
export async function createInsurance({
  id,
  body,
}: {
  id: string;
  body: CreateInsuranceBody;
}) {
  const response = await api.request<
    CreateInsuranceResponse,
    CreateInsuranceBody
  >({
    endpoint: `${baseEnd}/restore/${id}`,
    method: "POST",
    body,
    options: {
      isFileUpload: true,
    },
  });
  return response.data;
}

//Post: Restore Insurance
export async function restoreInsurance({
  id,
  body,
}: {
  id: string;
  body: RestoreInsuranceBody;
}) {
  const response = await api.request<
    RestoreInsuranceResponse,
    RestoreInsuranceBody
  >({
    endpoint: `${baseEnd}/restore/${id}`,
    body: body,
    method: "POST",
  });
  return response.data;
}

//Patch: Update Insurance
export async function updateInsurance({
  id,
  body,
}: {
  id: string;
  body: UpdateInsuranceBody;
}) {
  const response = await api.request<
    UpdateInsuranceResponse,
    UpdateInsuranceBody
  >({
    endpoint: `${baseEnd}/${id}`,
    body,
    method: "PATCH",
  });
  return response.data;
}

//Get: Get All Insurance
export async function getAllInsurance() {
  const response = await api.get<GetAllInsuranceResponse>(`${baseEnd}`);
  return response.data;
}

//Get: Get One Insurance
export async function getOneInsurance({ id }: { id: string }) {
  const response = await api.get<GetOneInsurance>(`${baseEnd}/${id}`);
  return response.data;
}
