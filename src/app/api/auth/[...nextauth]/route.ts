import { handleFacebookSignin, handleGoogleSignin } from "@/lib/auth";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

const authOptions: NextAuthOptions = {
    secret: "super-secret",
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: "consent",
                    response_type: "code",
                },
            },
        }),
        FacebookProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
    ],

    callbacks: {
        async signIn({ account }) {
            if (account?.provider === 'google') {
                return await handleGoogleSignin(account);
            } else if (account?.provider === 'facebook') {
                return await handleFacebookSignin(account);
            }

            return false;
        },
    }

};

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
