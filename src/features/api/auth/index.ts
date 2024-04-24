"use client";

import Cookies from "js-cookie";
import { UserLoginBody, UserRegisterBody, VerifyOtpBody } from "./types";
import axios from "axios";

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


