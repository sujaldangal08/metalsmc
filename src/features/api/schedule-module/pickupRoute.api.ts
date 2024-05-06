import { api } from "@/config/api.config";

import {
  GetAllPickupResponse,
  GetOnePickupRouteResponse
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

//update a route

// delete a route

//permanently delete a route
