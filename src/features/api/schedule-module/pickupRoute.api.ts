import { api } from "@/config/api.config";

import {
  CreatePickupRouteBody,
  CreatePickupRouteResponse,
  UpdatePickupRouteResponse,
  updatePickupRouteBody,
  PermanentDeletePickupRouteResponse,
  DeletePickupRouteResponse,
  GetAllPickupResponse,
  GetOneRoute,
} from "./pickupRoute.type";

const baseEnd = "/route"

//Get All Routes

export async function getAllRoutes(){
    const response = await api.get <GetAllPickupResponse>(`${baseEnd}`)
}

//Get One Route

//create a route

//update a route

// delete a route

//permanently delete a route
