import { CommonApiResponse } from "../types"
import { PickupMaterial } from "./pickupRoute.type"

export interface GetAllPickupScheduleResponse extends CommonApiResponse {
  total: number;
  data: PickupScheduleDetails[]
}

export interface GetOnePickupScheduleResponse { }

export interface PickupScheduleResponse { }

export interface PickupScheduleDetails {
  id: number
  route_id: number
  driver_id: number
  asset_id: number
  customer_id: number
  pickup_date: string
  status: string
  notes: string
  materials: PickupMaterial[]
  tare_weight: number[]
  n_bins: string
  image: string[]
  coordinates: string[]
  deleted_at: any
  created_at: string
  updated_at: string
}

export interface PickupScheduleBody {
  customer_id: number;
  pickup_date: string;
  status: string;
  notes: string;
  materials: Array<string>;
  amount: Array<number>;
  n_bins: string;
  tare_weight: Array<number>;
  weighing_type: Array<string>;
  coordinates: Array<number>;
}

export interface UpdatePickupScheduleResponse { }

export interface UpdatePickupScheduleBody {
  driver_id: number;
  customer_id: number;
}

export interface DeletePickupScheduleResponse { }

export interface RestorePickupScheduleResponse { }

export interface RestorePickupScheduleBody { }

export interface PermanentDeletePickupScheduleResponse { }
