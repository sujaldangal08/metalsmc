import { api } from "@/config/api.config";
import { GetAllDriversResponse, UpdateUserResponse, UserResponse } from "./types";

export const getUserDetails = async () => {
    const response = await api.get<UserResponse>("/user");
    return response.data;
}

export const updateUserDetails = async <T = Partial<Pick<UserResponse, 'data'>>>(body: T) => {
    const response = await api.request<UpdateUserResponse, T>({ endpoint: "/profile", body: body, method: "PATCH" });
    return response.data;
}

export const getAllDrivers = async () => {
    const response = await api.get<GetAllDriversResponse>("/drivers");
    return response.data;
}