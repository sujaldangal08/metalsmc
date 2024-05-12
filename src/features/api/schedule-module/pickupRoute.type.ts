import { CommonApiResponse } from "../types";
import { PickupScheduleDetails } from "./pickupSchedule.type";

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
        driver: {
            id: number
            name: string
            image: string
        }
        asset: {
            id: number
            title: string
            rego_number: string
            image: string
        }
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
    tare_weight: number[]
    status: string
    coordinates: string[]
    notes: string
    customer: {
        id: number
        name: string
        email: string
        contact: string
    }
}

export interface PickupMaterial {
    name: string
    amount: number
    rate: number
    weighing_type: string
}

