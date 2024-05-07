import { CommonApiResponse } from "../types";

export interface CreatePickupRouteBody {
    name: string;
    description?: string;
    status: string;
    start_date: string
    driver_id: number;
    asset_id: number;
}
export interface CreatePickupRouteResponse extends CommonApiResponse {
    data: {
        name: string
        description: string
        driver_id: number
        asset_id: number
        status: string
        start_date: string
        updated_at: string
        created_at: string
        id: number
    }
}

export interface UpdatePickupRouteResponse extends CreatePickupRouteResponse { }

export interface UpdatePickupRouteBody extends CreatePickupRouteBody { }

export interface PermanentDeletePickupRouteResponse { }
export interface DeletePickupRouteResponse extends CommonApiResponse { }

export interface GetAllPickupResponse extends CommonApiResponse {
    data: {
        id: number
        name: string
        image: string
        routes: PickupRouteData[]
    }[]
}


export interface Link {
    url?: string
    label: string
    active: boolean
}

export interface GetOnePickupRouteResponse extends CommonApiResponse {
    data: Omit<PickupRouteData, 'schedule'> & {
        driver: {
            id: string
            name: string
            image: string
        },
        schedule: PickupScheduleDetails[]
    }
}

export interface PickupRouteData {
    id: number
    name: string
    driver_id: number
    asset_id: number
    description: string
    status: string
    start_date: string
    deleted_at: any
    created_at: string
    updated_at: string
    asset: {
        id: number
        title: string
        rego_number: string
        image: string
    }
    schedule: PickupSchedule[]
}

export interface PickupSchedule {
    id: number
    route_id: number
    customer_id: number
    materials: PickupMaterial[]
    status: string
    customer: {
        id: number
        name: string
    }
}

interface PickupMaterial {
    name: string
    amount: number
    rate: number
    weight: string
    tare_weight: number
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
    n_bins: string
    image: string[]
    coordinates: string[]
    deleted_at: any
    created_at: string
    updated_at: string
    customer: {
        id: number
        name: string
        phone_number: any
        image: string
    }
}
