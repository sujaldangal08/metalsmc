export interface GetAllPickupScheduleResponse {}

export interface GetOnePickupScheduleResponse {}

export interface PickupScheduleResponse {}

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

export interface UpdatePickupScheduleResponse {}

export interface UpdatePickupScheduleBody {
  driver_id: number;
  customer_id: number;
}

export interface DeletePickupScheduleResponse {}

export interface RestorePickupScheduleResponse {}

export interface RestorePickupScheduleBody {}

export interface PermanentDeletePickupScheduleResponse {}
