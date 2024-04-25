"use client";

import { api } from "@/config/api.config";
import Cookies from "js-cookie";
import { Account } from "next-auth";
import toast from "react-hot-toast";
import { AuthCookie } from "./enums/auth.enums";


interface GoogleOAuthResponse {
    access_token: string;
    refresh_token: string;
}
/**
 * Handles the Google Sign-in process and sets the session and refresh token cookies.
 *
 * @param {Account} account - The account object obtained from the Google Sign-in process.
 * @returns {Promise<boolean>} A promise that resolves to true if the operation is successful.
 */
export const handleGoogleSignin = async (account: Account) => {
    const id_token = account?.id_token;

    try {
        const response = await api.request<GoogleOAuthResponse, { token: string }>({
            endpoint: "/oauth/google", body: { token: id_token! }, method: "POST"
        });

        const { access_token, refresh_token } = response.data;

        setSessionCookie(access_token);
        setRefreshTokenCookie(refresh_token);

    } catch (err: any) {
        console.log(err);
        toast.error(err.message);

        return false;
    }

    return true;
};

export const handleFacebookSignin = async (account: Account) => {
    // Haven't got endpoint for it ====================
    return true;
}

/**
 * Logs out the user by clearing the session cookie.
 */
export async function logout() {
    Cookies.remove(AuthCookie.Session);
    Cookies.remove(AuthCookie.IssuedAt);
    Cookies.remove(AuthCookie.RefreshToken);
}

/**
 * Retrieves the current session and refreshes the access token if necessary.
 *
 * @returns {Promise<string | null>} A promise that resolves with the session object or null if the session is not valid.
 */
export async function getSession(): Promise<string | null> {
    const session = await Cookies.get(AuthCookie.Session);
    const issuedAt = await Cookies.get(AuthCookie.IssuedAt);
    const expiredAt = (Number(issuedAt) + AuthCookie.ExpireTime);

    if (!session) return null;

    if (Date.now() > expiredAt) {
        //Session is expired
        const newAccessToken = await refreshAccessToken();
        if (newAccessToken) {
            setSessionCookie(newAccessToken);
            return newAccessToken;
        } else {
            return null;
        }
    }

    return session;
}

export const setSessionCookie = (session: string) => {
    Cookies.set(AuthCookie.Session, session)
    Cookies.set(AuthCookie.IssuedAt, String(Date.now()));
}

export const setRefreshTokenCookie = (session: string) => {
    Cookies.set(AuthCookie.RefreshToken, session)
}


/**
 * Refreshes the access token using the refresh token.
 *
 * @returns {Promise<string|null>} A promise that resolves with the new access token or null if the refresh token is not available or the refresh fails.
 */
export const refreshAccessToken = async () => {
    const refreshToken = Cookies.get(AuthCookie.RefreshToken);

    if (!refreshToken) {
        return null;
    }

    try {
        const response = await api.request<GoogleOAuthResponse, { refresh_token: string }>({
            endpoint: "/api/v1/oauth/refresh", body: {
                refresh_token: refreshToken,
            }, method: "POST"
        });

        const { access_token, refresh_token: newRefreshToken } = response.data;

        if (newRefreshToken) {
            setRefreshTokenCookie(newRefreshToken);
        }

        return access_token;
    } catch (error) {
        console.error('Failed to refresh access token:', error);
        return null;
    }
};