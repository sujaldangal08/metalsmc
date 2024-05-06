import { CommonApiResponse } from "../types";

export interface GetAllDeliveryScheduleResponse extends CommonApiResponse {
  data: {
    schedule: DeliverySchedule[]
  }
}


export interface DeliverySchedule {
  id: number
  customer_id: number
  driver_id: number
  truck_id: number
  name: string
  coordinates: string[]
  materials: string[]
  rate: number[]
  amount: number[]
  n_trips: number
  n_trips_done: number
  interval: number
  start_date: string
  delivery_date: string[]
  end_date: string
  status: string
  delivery_notes: string
  locale: string
  meta: string
  deleted_at: any
  created_at: string
  updated_at: string
  total_amount: number
}

export interface GetOneDeliveryScheduleResponse  extends CommonApiResponse{
  data: DeliverySchedule
}

export interface DeliveryScheduleResponse {}

export interface DeliveryScheduleBody {
  customer_id: number;
  driver_id: number;
  truck_id: number;
  coordinates: Array<number>;
  locale: string;
  materials: Array<string>;
  amount: Array<number>;
  n_trips: number;
  interval: number;
  start_date: string;
  status: string;
  delivery_notes: string;
  meta: {
    additional_info: string;
  };
}

