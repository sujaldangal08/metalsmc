import { api } from "@/config/api.config"

export const handleXeroCallback = async() => {
    const response = await api.get('/xero/callback');
    
    //response -> {access_token, refresh_token}
    
}

export const getXeroTenant = async() => {
    const response = await api.get('/xero/tenant');
    return response.data;
}