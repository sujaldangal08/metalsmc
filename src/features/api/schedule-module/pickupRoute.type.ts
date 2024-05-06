import { CommonApiResponse } from "../types";

export interface CreatePickupRouteBody {
    name: string;
    description: string;
    status: string;
    start_date: string
}
export interface CreatePickupRouteResponse { }

export interface UpdatePickupRouteResponse { }

export interface updatePickupRouteBody {
    name: string;
    description: string;
    status: string;
}

export interface PermanentDeletePickupRouteResponse { }
export interface DeletePickupRouteResponse { }

export interface GetAllPickupResponse extends CommonApiResponse {
    total: number
    routes: PickupRoutes
}

interface PickupRoutes {
    current_page: number
    data: PickupRouteData[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: Link[]
    next_page_url: any
    path: string
    per_page: number
    prev_page_url: any
    to: number
    total: number
}


export interface Link {
    url?: string
    label: string
    active: boolean
}

export interface GetOnePickupRouteResponse extends CommonApiResponse {
    data: PickupRouteData & {
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
    schedule: PickupSchedule[]
}

export interface PickupSchedule {
    id: number
    route_id: number
    customer_id: number
    materials: string[]
    amount: number[]
    rate: number[]
    status: string
    customer: {
        id: number
        name: string
    }
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
    materials: string[]
    rate: number[]
    amount: number[]
    weighing_type: string[]
    n_bins: string
    tare_weight: number[]
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
