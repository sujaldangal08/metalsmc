"use server";

import { cookies } from "next/headers";
import { UserLoginBody, UserRegisterBody, VerifyOtpBody } from "./types";
import axios from "axios";

const baseURL = process.env.API_URL;

export async function signInFn(body: UserLoginBody) {
    const response = await axios.post(`${baseURL}/api/v1/login`,
        body
    );

    //save tokens in the cookies
    cookies().set('session', response.data.access_token, { httpOnly: true, expires: new Date(Date.now() + 10 * 60 * 60 * 1000) });

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


