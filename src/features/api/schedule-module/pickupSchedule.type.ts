import { CommonApiResponse } from "../types"
import { PickupMaterial } from "./pickupRoute.type"

export interface GetAllPickupScheduleResponse extends CommonApiResponse {
  total: number;
  data: PickupScheduleDetails[]
}

export interface GetOnePickupScheduleResponse { }

export interface PickupScheduleResponse extends CommonApiResponse {
  data: Omit<PickupScheduleDetails, "driver_id" | "asset_id">
  route: {
    name: string
    description: string
    status: string
    start_date: string
  }
  customer: {
    name: string
    email: string
    phone: any
    image: string
  }
}

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
  n_bins: number
  image: string[]
  coordinates: string[]
  created_at: string
  updated_at: string
}

export interface CreatePickupScheduleBody {
  customer_id: number;
  route_id: number;
  asset_id: number
  driver_id: number;
  notes?: string;
  materials: string[];
  rate: number[];
  amount: number[];
  weighing_type: string[]
  n_bins: number;
  tare_weight: Array<number>;
  coordinates: Array<number>;
  meta?: { name: string, contact: string, extra?: string }
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
