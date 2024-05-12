import { CommonApiResponse } from "../types"

export interface UserResponse extends CommonApiResponse {
    data: {
        id: number
        name: string
        email: string
        role_id: number
        login_attempts: number
        status: string
        image: string
        phone_number: any
        city: any
        state: any
        country: any
        zip_code: any
        language: string
        tfa_secret: any
        is_tfa: number
        otp_hash: string
        created_at: string
        updated_at: string
    }
}

export interface UpdateUserResponse {
    message: string,
    user: {
        name: string
        email: string
        phone_number: any
        city: any
        state: any
        country: any
        zip_code: any
        language: string
        image: string
    }
}

export interface GetAllDriversResponse extends CommonApiResponse {
    total: number
    data: DriverData[]
}

export interface DriverData {
    id: number
    name: string
    email: string
    role_id: number
    status: string
    image: string
    phone_number: any
    city: any
    state: any
    country: any
    zip_code: any
    language: string
    tfa_secret: any
    is_tfa: number
    otp_hash: any
    device_token: any
    created_at: string
    updated_at: string
}

export interface GetAllCustomersResponse extends CommonApiResponse {
    total: number
    data: CustomerData[]
}

export interface GetAllVehiclesResponse extends CommonApiResponse {
    total: number
    data: VehicleData[]
}

export interface CustomerData {
    id: number
    name: string
    email: string
    image: string
    phone_number: any
    city: any
    state: any
    country: any
    zip_code: any
    language: string
    created_at: string
    updated_at: string
}


export interface VehicleData {
    id: number
    title: string
    image: string
    rego_number: string
    asset_type: string
    meta: string
    branch_id: number
    deleted_at: any
    created_at: string
    updated_at: string
}