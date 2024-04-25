import { LoginSchema } from "@/utils/validators/login.schema";

export interface UserRegisterBody {
    name: string;
    email: string;
    password: string;
}

export interface UserLoginBody extends LoginSchema { }

export interface VerifyOtpBody {
    email: string;
    otp: string;
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
export interface DisabledTwoFactorAuthResponse {
    status: string;
    message: string;
    data: any;
}

export interface Verify2faResponse {
    status: string;
    message: string;
    token: string;
}

export interface Verify2faRequestBody {
    otp: string;
    user: string;
}