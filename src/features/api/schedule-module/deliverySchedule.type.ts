export interface GetAllDeliveryScheduleResponse {}

export interface GetOneDeliveryScheduleResponse {}

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
