export interface RestoreMaintenanceBody {}

export interface RestoreMaintenanceResponse {}

export interface DeleteMaintenanceResponse {}

export interface UpdateMaintenanceBody {
  asset_id: number;
  maintenance_type: string;
  contact_meta: {
    name: string;
    contact: string;
  };
  service_date: string;
}

export interface UpdateMaintenanceResponse {}

export interface PermanentDeleteMaintenanceResponse {}

export interface CreateMaintenanceResponse {}

export interface CreateMaintenanceBody {
  asset_id: number;
  maintenance_type: string;
  conatct_meta: string;
  service_date: string;
}

export interface GetAllMaintenanceBody {}

export interface GetMaintenanceBody {}
