import { CommonApiResponse } from "../types";

export interface GetAllDeliveryScheduleResponse extends CommonApiResponse {
  data: DeliverySchedule[];
  pagination: Pagination;
}

interface Pagination {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
}

export interface DeliverySchedule {
  id: number;
  name: string;
  image: string;
  delivery: DeliveryData[];
}

export interface DeliveryData {
  id: number;
  customer_id: number;
  driver_id: number;
  truck_id: number;
  name: string;
  coordinates: string[];
  materials: string[];
  rate: number[];
  amount: number[];
  n_trips: number;
  n_trips_done: number;
  interval: number;
  start_date: string;
  delivery_date: string[];
  end_date: string;
  delivery_notes: string;
  locale: string;
  meta: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  totalWeight: number;
  truck: { id: number; title: string; rego_number: string; image: string };
  customer: { id: number; name: string };
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
