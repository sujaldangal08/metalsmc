"use client";

import Cookies from "js-cookie";
import { DisableTwoFactorAuthRequestBody, DisabledTwoFactorAuthResponse, GenerateQrRequestBody, GenerateQrResponse, UserLoginBody, UserRegisterBody, Verify2faRequestBody, Verify2faResponse, VerifyOtpBody } from "./types";
import axios from "axios";
import { api } from "@/config/api.config";

const baseURL = "http://20.192.30.237";

export async function signInFn(body: UserLoginBody) {
    const response = await axios.post(`${baseURL}/api/v1/login`,
        body
    );

    //save tokens in the cookies
    Cookies.set('session', response.data.access_token, { expires: new Date(Date.now() + 10 * 60 * 60 * 1000) });

    return response.data;
}

export async function registerUser(body: UserRegisterBody) {
    const response = await axios.post(`${baseURL}/api/v1/register`, body);
    return response.data;
}

export async function verifyOtp(body: VerifyOtpBody) {
    const response = await axios.post(`${baseURL}/api/v1/verify`, body);
    return response.data;
}


// Two factor auth functions ====================
export async function generateQrCodeFn<T = GenerateQrResponse, S = GenerateQrRequestBody>(body: S) {
    const response = await api.request<T, S>({
        endpoint: "/2fa/generate",
        method: "POST",
        body
    })

    return response;
}

export async function disableTwoFactorFn<S = DisableTwoFactorAuthRequestBody, T = DisabledTwoFactorAuthResponse>(body: S) {
    const response = await api.request<T, S>({
        endpoint: "/2fa/disable",
        method: "POST",
        body
    })

    return response;
}


export async function verifyQrFn<T = Verify2faResponse, S = Verify2faRequestBody>(body: S) {
    const response = await api.request<T, S>({
        endpoint: "/2fa/verify",
        method: "POST",
        body
    })

    return response;
}

