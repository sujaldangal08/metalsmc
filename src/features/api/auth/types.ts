import { LoginSchema } from "@/utils/validators/login.schema";
import { CommonApiResponse } from "../types";

export interface LoginResponse {
    status: string,
    message: string,
    "f2fa": boolean
    "2fa": boolean,
    access_token: string,
    token_type: string
}


export interface UserRegisterBody {
    name: string;
    email: string;
    password: string;
}

export interface UserLoginBody extends LoginSchema { token: string }

export interface VerifyOtpBody {
    email: string;
    otp: string;
}

export interface VerifyOtpResponse extends CommonApiResponse {
    hash: string
    data: any;
}

export type ForgotPasswordRequestBody = Pick<LoginSchema, 'email'>;

export interface ForgotPasswordResponse extends CommonApiResponse {
    data: any
}

export interface ChangePasswordRequestBody {
    password_hash: string;
    new_password: string;
    confirm_password: string;
}

export interface ChangePasswordResponse extends CommonApiResponse {
    data: any
}

export interface GenerateQrRequestBody {
    user: number;
}

export interface GenerateQrResponse {
    message: string;
    qr_code_url: string;
    secret_key: string;
}


export interface DisableTwoFactorAuthRequestBody extends GenerateQrRequestBody { }
export interface DisabledTwoFactorAuthResponse extends CommonApiResponse {
    data: any;
}

export interface Verify2faResponse extends CommonApiResponse {
    token: string;
}

export interface Verify2faRequestBody {
    otp: string;
    user: string;
}