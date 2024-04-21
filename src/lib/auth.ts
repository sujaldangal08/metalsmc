import axios from "axios";
import { Account, NextAuthOptions } from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";

export const authOptions: NextAuthOptions = {
    secret: "super-secret",
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: "consent",
                    response_type: "code",
                },
            },
        }),
        AppleProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
    ],

    callbacks: {
        async signIn({ account }) {
            if (account?.provider === 'google') {
                return await handleGoogleSignin(account);
            } else if (account?.provider === 'apple') {
                return await handleAppleSignin(account);
            }

            return false;
        },
    }

};


// To handle google signin ===================
const handleGoogleSignin = async (account: Account) => {
    const id_token = account?.id_token;
    const response = await axios.post(`${process.env.API_URL}/api/v1/oauth/google`, {
        token: id_token,
    })

    cookies().set('access_token', response.data.token, { expires: new Date(Date.now() + 60 * 60 * 1000), httpOnly: true });

    console.log(response.data);
    return true;
}

// To handle apple sign in  =============
const handleAppleSignin = async (account: Account) => {
    // Haven't got apple signin endpoint yet
    return true;
}
