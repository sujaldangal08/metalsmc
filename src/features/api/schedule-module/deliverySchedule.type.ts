import { CommonApiResponse } from "../types";

export interface GetAllDeliveryScheduleResponse extends CommonApiResponse {
  data: DeliverySchedule[];
}

export interface DeliverySchedule {
  id: number;
  name: string;
  image: string;
  delivery: Trip[];
}

export interface Trip {
  id: number;
  customer_id: number;
  driver_id: number;
  truck_id: number;
  name: string;
  coordinates: string[];
  materials: string[];
  amount: string[];
  rate: string[];
  n_trips: number;
  n_trips_done: number;
  interval: number;
  start_date: string;
  delivery_date: string[];
  end_date: string;
  status: string;
  delivery_notes: string;
  locale: string;
  meta: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  truck: {
    id: number;
    title: string;
    rego_number: string;
    image: string;
  };
  delivery_trips: DeliveryTrip[];
}

interface DeliveryTrip {
  id: number;
  schedule_id: number;
  status: string;
  trip_date: string;
  trip_number: string;
  virtual_fields: {
    type: string;
    weight: number;
  }[];
}

export interface GetOneDeliveryScheduleResponse extends CommonApiResponse {
  data: DeliverySchedule;
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
