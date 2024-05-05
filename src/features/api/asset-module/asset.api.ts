import { api } from "@/config/api.config";
import {
  CreateAssetBody,
  CreateAssetResponse,
  DeleteAssetResponse,
  PermanentDeleteAssetResponse,
  RestoreAssetBody,
  RestoreAssetResponse,
  UpdateAssetBody,
  UpdateAssetResponse,
  GetOneAsset,
  GetAllAssetResponse 
} from "./asset.type";

const baseEnd = "/asset";

//Delete: Permanent Delete Asset
export async function permanentDeleteAsset({ id }: { id: string }) {
  const response = await api.delete<PermanentDeleteAssetResponse>(
    `${baseEnd}/delete${id}`
  );
  return response.data;
}

//Delete: Delete Asset
export async function deleteAsset({ id }: { id: string }) {
  const response = await api.delete<DeleteAssetResponse>(`${baseEnd}/${id}`);
  return response.data;
}

//Post: Restore Asset
export async function restoreAsset({
  id,
  body,
}: {
  id: string;
  body: RestoreAssetBody;
}) {
  const response = await api.request<RestoreAssetResponse, RestoreAssetBody>({
    endpoint: `${baseEnd}/restore${id}`,
    method: "POST",
    body,
  });
  return response.data;
}

//Post: Create Asset
export async function createAsset({ body }: { body: CreateAssetBody }) {
  const response = await api.request<CreateAssetResponse, CreateAssetBody>({
    endpoint: `${baseEnd}`,
    method: "POST",
    body: body,
  });
  return response.data;
}

//Patch: Update Asset
export async function updateAsset({
  id,
  body,

}:{
  id:string;
  body:UpdateAssetBody
}) {
  const response = await api.request<UpdateAssetResponse, UpdateAssetBody>({
    endpoint: `${baseEnd}/${id}`,
    body,
    method: "PATCH",
  });
  return response.data;
}


//Get: Get All Assets
export async function getAllAssets(){
  const response = await api.get<GetAllAssetResponse>(`${baseEnd}`);
  return response.data;
}

//Get: Get One Asset

export async function getOneAsset({ id }: { id: string }) {
  const response = await api.get<GetOneAsset>(`${baseEnd}/${id}`);
  return response.data;
} 

