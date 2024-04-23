export interface PermanentDeleteInsuranceResponse {}

export interface DeleteInsuranceResponse {}

export interface CreateInsuranceResponse {}

export interface CreateInsuranceBody {
  asset_id: number;
  insurance_type: string;
  provider: string;
  amount: number;
  start_date: string;
  end_date: string;
  purchase_date: string;
  attachment: File[];
  contact_meta: string;
}

export interface RestoreInsuranceResponse {}

export interface RestoreInsuranceBody {}

export interface UpdateInsuranceBody {
  asset_id: number;
  insurance_type: string;
  provider: string;
  amount: number;
  start_date: string;
  end_date: string;
  purchase_date: string;
  attachment: File[];
  contact_meta: string;
}

export interface UpdateInsuranceResponse {}

export interface GetAllInsuranceResponse {}

export interface GetOneInsurance {}
