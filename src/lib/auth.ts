"use client";

import axios from "axios";
import { Account } from "next-auth";
import Cookies from "js-cookie";
import { AuthTokenExpireTime } from "./enums/auth.enums";
import toast from "react-hot-toast";

/**
 * Handles the Google Sign-in process and sets the session and refresh token cookies.
 *
 * @param {Account} account - The account object obtained from the Google Sign-in process.
 * @returns {Promise<boolean>} A promise that resolves to true if the operation is successful.
 */
export const handleGoogleSignin = async (account: Account) => {
    const id_token = account?.id_token;

    try {
        const response = await axios.post(`${process.env.API_URL}/api/v1/oauth/google`, {
            token: id_token,
        });

        const { access_token, refresh_token } = response.data;

        const accessTokenExpireDate = new Date(Date.now() + AuthTokenExpireTime.SESSION);
        const refreshTokenExpireDate = new Date(Date.now() + AuthTokenExpireTime.REFRESH_TOKEN);

        Cookies.set('session', access_token, { expires: accessTokenExpireDate });
        Cookies.set('refresh_token', refresh_token, { expires: refreshTokenExpireDate, httpOnly: true });

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
    Cookies.set("session", "", { expires: new Date(0) });
}

/**
 * Retrieves the current session and refreshes the access token if necessary.
 *
 * @returns {Promise<string | null>} A promise that resolves with the session object or null if the session is not valid.
 */
export async function getSession(): Promise<string | null> {
    const session = await Cookies.get("session");
    if (!session) return null;

    const accessTokenExpireDate = new Date(Date.now() + AuthTokenExpireTime.SESSION);
    const newAccessToken = await refreshAccessToken();

    if (newAccessToken) {
        Cookies.set('session', newAccessToken, { expires: accessTokenExpireDate, httpOnly: true });
        return newAccessToken;
    }

    return session;
}

/**
 * Refreshes the access token using the refresh token.
 *
 * @returns {Promise<string|null>} A promise that resolves with the new access token or null if the refresh token is not available or the refresh fails.
 */
export const refreshAccessToken = async () => {
    const refreshToken = Cookies.get('refresh_token');

    if (!refreshToken) {
        return null;
    }

    try {
        const response = await axios.post(`${process.env.API_URL}/api/v1/oauth/refresh`, {
            refresh_token: refreshToken,
        });

        const { access_token, refresh_token: newRefreshToken } = response.data;

        if (newRefreshToken) {
            const refreshTokenExpires = new Date(Date.now() + AuthTokenExpireTime.REFRESH_TOKEN);
            Cookies.set('refresh_token', newRefreshToken, { expires: refreshTokenExpires, httpOnly: true });
        }

        return access_token;
    } catch (error) {
        console.error('Failed to refresh access token:', error);
        return null;
    }
};