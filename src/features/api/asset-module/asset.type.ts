export interface PermanentDeleteAssetResponse {}

export interface DeleteAssetResponse {}

export interface RestoreAssetResponse {}

export interface RestoreAssetBody {}

export interface CreateAssetResponse {}

export interface CreateAssetBody {
  title: string;
  asset_type: string;
  meta: {
    brand: string;
    model: string;
    tare_weight: string;
  };
}

export interface UpdateAssetResponse {}

export interface UpdateAssetBody {
  title: string;
  asset_type: string;
  meta: {
    brand: string;
    model: string;
    tare_weight: string;
  };
  fuel_tank: string;
}
