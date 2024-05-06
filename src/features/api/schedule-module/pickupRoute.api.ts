import { api } from "@/config/api.config";

import {
  GetAllPickupResponse,
  GetOnePickupRouteResponse
} from "./pickupRoute.type";

const baseEnd = "/route"

//Get All Routes
export async function getAllPickupRoutes() {
  const response = await api.get<GetAllPickupResponse>(`${baseEnd}`);
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
