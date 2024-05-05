import { api } from "@/config/api.config";
import { Account } from "next-auth";
import { setRefreshTokenCookie, setSessionCookie } from "./auth";

export interface GoogleOAuthResponse {
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
            endpoint: "/oauth/google",
            body: { token: id_token! },
            method: "POST",
            withHeaders: false
        });

        const { access_token, refresh_token } = response.data;

        setSessionCookie(access_token);
        setRefreshTokenCookie(refresh_token);

    } catch (err: any) {
        console.log(err);
        return false;
    }

    return true;
};

export const handleFacebookSignin = async (account: Account) => {
    // Haven't got endpoint for it ====================
    return true;
}