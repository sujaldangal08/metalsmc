// env.d.ts
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_GOOGLE_MAP_API_KEY: string

            NEXT_PUBLIC_NEXTAUTH_SECRET: string

            NEXT_PUBLIC_GOOGLE_CLIENT_ID: string
            NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: string

            NEXT_PUBLIC_FACEBOOK_APP_ID: string
            NEXT_PUBLIC_FACEBOOK_APP_SECRET: string

            NEXT_PUBLIC_VITE_REACT_VERSION: string
            NEXT_PUBLIC_VITE_REACT_API_URL: string

            NEXT_PUBLIC_API_URL: string
        }
    }
}

export { };