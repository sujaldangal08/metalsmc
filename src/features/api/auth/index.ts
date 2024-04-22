"use server";

import { cookies } from "next/headers";

const baseURL = process.env.API_URL;

export async function signInFn(body: { email: string, password: string }) {
    const response = await fetch(`${baseURL}/api/v1/login`, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(body)
    });

    const jsonResponse = await response.json();

    //save tokens in the cookies
    cookies().set('session', jsonResponse.access_token, { httpOnly: true, expires: new Date(Date.now() + 10 * 60 * 60 * 1000) });

    return jsonResponse;
}
