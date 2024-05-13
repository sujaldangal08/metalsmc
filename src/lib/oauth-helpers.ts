"use client";

import { api } from "@/config/api.config";
import { setRefreshTokenCookie, setSessionCookie } from "./auth";

export interface GoogleOAuthResponse {
    access_token: string;
    refresh_token: string;
    "expires_at": string
}

/**
 * Handles the Google Sign-in process and sets the session and refresh token cookies.
 *
 * @param {string} id_token - The account object obtained from the Google Sign-in process.
 * @returns {Promise<boolean>} A promise that resolves to true if the operation is successful.
 */
export const handleGoogleSignin = async (id_token: string) => {
    try {
        const response = await api.request<GoogleOAuthResponse, { token: string }>({
            endpoint: "/oauth/google",
            body: { token: id_token },
            method: "POST",
            withHeaders: false
        });

        const { access_token, refresh_token } = response.data;

        setSessionCookie(access_token);
        setRefreshTokenCookie(refresh_token);

    } catch (err: any) {
        throw new Error(err.response.data.message);
    }
};

export const handleFacebookSignin = async (token: string) => {
    try {
        const response = await api.request<GoogleOAuthResponse, { token: string }>({
            endpoint: "/oauth/facebook",
            body: { token },
            method: "POST",
            withHeaders: false
        });

        const { access_token } = response.data;

        setSessionCookie(access_token);

    } catch (err: any) {
        throw new Error(err.response.data.message);
    }
}