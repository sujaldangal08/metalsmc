export interface IUser {
    id: number
    name: string
    email: string
    email_verified_at: any
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
    created_at: string
    updated_at: string
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