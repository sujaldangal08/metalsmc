import axios from "axios";
import { SignJWT, jwtVerify } from "jose";
import { Account } from "next-auth";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const handleGoogleSignin = async (account: Account) => {
    const id_token = account?.id_token;
    const response = await axios.post(`${process.env.API_URL}/api/v1/oauth/google`, {
        token: id_token,
    })

    const user = { token: response.data.token };

    // Create the session
    const expires = new Date(Date.now() + 10 * 60 * 60 * 1000);
    const encryptedSession = await encrypt({ user, expires });

    // Save the session
    cookies().set('session', encryptedSession, { expires, httpOnly: true });

    console.log(response.data);
    return true;
}

export const handleFacebookSignin = async (account: Account) => {
    // Haven't got facebook signin endpoint yet
    return true;
}


const secretKey = process.env.NEXTAUTH_SECRET;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("10 hr from now")
        .sign(key);
}

export async function decrypt(input: string): Promise<any> {
    try {
        const { payload } = await jwtVerify(input, key, {
            algorithms: ["HS256"],
        });

        return payload;
    } catch (err) {
        console.log(err);
    }

    return undefined;
}

export async function logout() {
    // Destroy the session
    cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
    const session = cookies().get("session")?.value;
    if (!session) return null;
    return await decrypt(session);
}


export async function updateSession(request: NextRequest) {
    const session = request.cookies.get("session")?.value;
    if (!session) return;

    // Refresh the session so it doesn't expire
    const parsed = await decrypt(session);
    parsed.expires = new Date(Date.now() + 10 * 1000);
    const res = NextResponse.next();
    res.cookies.set({
        name: "session",
        value: await encrypt(parsed),
        httpOnly: true,
        expires: parsed.expires,
    });
    return res;
}