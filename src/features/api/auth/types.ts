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