// env.d.ts
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_GOOGLE_MAP_API_KEY: string

            NEXTAUTH_SECRET: string
            NEXTAUTH_URL: string

            GOOGLE_CLIENT_ID: string
            GOOGLE_CLIENT_SECRET: string

            VITE_REACT_VERSION: 'dev'
            VITE_REACT_API_URL: 'http://localhost:5173'

            API_URL: "http://20.192.30.237"
        }
    }
}

export { };