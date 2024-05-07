import { api } from "@/config/api.config";

import {
  CreatePickupRouteBody,
  CreatePickupRouteResponse,
  DeletePickupRouteResponse,
  GetAllPickupResponse,
  GetOnePickupRouteResponse,
  UpdatePickupRouteBody,
  UpdatePickupRouteResponse
} from "./pickupRoute.type";

const baseEnd = "/route"

interface PickupRouteQueryParams {
  driver_id?: number;
  asset_id?: number;
  status?: string;
  branch_id?: number;
  start_date?: string;
  paginate?: boolean;
  page?: number;
}

//Get All Routes
export async function getAllPickupRoutes(queryParams?: PickupRouteQueryParams) {
  const response = await api.get<GetAllPickupResponse>(`${baseEnd}`, { ...queryParams });
  return response.data;
}

//Get One Route
export async function getOnePickupRoute(id: number) {
  const response = await api.get<GetOnePickupRouteResponse>(`${baseEnd}/${id}`)

  return response.data;
}

//create a route
export async function createPickupRoute<T = CreatePickupRouteBody>(body: T) {
  const response = await api.request<CreatePickupRouteResponse, T>({
    endpoint: `${baseEnd}`,
    method: "POST",
    body
  })

  return response;
}

//update a route
export async function updatePickupRoute<T = UpdatePickupRouteBody>(id: number, body: T) {
  const response = await api.request<UpdatePickupRouteResponse, T>({
    endpoint: `${baseEnd}/${id}`,
    method: "PATCH",
    body
  })

  return response;
}

// delete a route
export async function deletePickupRoute(id: number) {
  const response = await api.request<DeletePickupRouteResponse, any>({ endpoint: `${baseEnd}/${id}`, method: "DELETE", body: {} })

  return response;
}

//permanently delete a route
