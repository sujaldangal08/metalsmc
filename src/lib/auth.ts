import axios from "axios";
import { Account } from "next-auth";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const accessTokenExpireTime = 10 * 60 * 60 * 1000;
const refreshTokenExpireTime = 7 * 24 * 60 * 60 * 1000;

export const handleGoogleSignin = async (account: Account) => {
    const id_token = account?.id_token;
    const response = await axios.post(`${process.env.API_URL}/api/v1/oauth/google`, {
        token: id_token,
    })

    const { access_token, refresh_token } = response.data;

    // Create the session
    const accessTokenExpireDate = new Date(Date.now() + accessTokenExpireTime);
    const refreshTokenExpireDate = new Date(Date.now() + refreshTokenExpireTime);

    // Save the session
    cookies().set('session', access_token, { expires: accessTokenExpireDate, httpOnly: true });
    cookies().set('refresh_token', refresh_token, { expires: refreshTokenExpireDate, httpOnly: true });

    console.log(id_token, response.data);
    return true;
}

export const handleFacebookSignin = async (account: Account) => {
    // Haven't got facebook signin endpoint yet
    return true;
}

export async function logout() {
    // Destroy the session
    cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
    const session: any = cookies().get("session");
    if (!session) return null;

    if (session.expires < new Date()) {
        const newAccessToken = await refreshAccessToken();
        if (newAccessToken) {
            session.access_token = newAccessToken;
        } else {
            return null;
        }
    }

    return session;
}

export const refreshAccessToken = async () => {
    const refreshToken = cookies().get('refresh_token')?.value;
    if (!refreshToken) {
        return null; // No refresh token available
    }

    try {
        // Call the API to refresh the access token using the refresh token
        const response = await axios.post(`${process.env.API_URL}/api/v1/oauth/refresh`, {
            refresh_token: refreshToken,
        });

        const { access_token, refresh_token: newRefreshToken } = response.data;

        // Save the updated session
        cookies().set('session', access_token, { expires: new Date(Date.now() + accessTokenExpireTime), httpOnly: true });


        // Update the refresh token cookie if a new refresh token was issued
        if (newRefreshToken) {
            const refreshTokenExpires = new Date(Date.now() + refreshTokenExpireTime); // 7 days
            cookies().set('refresh_token', newRefreshToken, { expires: refreshTokenExpires, httpOnly: true });
        }

        return access_token;
    } catch (error) {
        console.error('Failed to refresh access token:', error);
        return null;
    }
};


export async function updateSession(request: NextRequest) {
    const session = request.cookies.get("session")?.value;
    if (!session) return;

    const res = NextResponse.next();
    res.cookies.set({
        name: "session",
        value: session,
        httpOnly: true,
        expires: accessTokenExpireTime,
    });
    return res;
}