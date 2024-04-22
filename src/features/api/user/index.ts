import { api } from "@/config/api.config"
import { ApiResponseType } from "../types";
import { IUser, UpdateUserResponse } from "./types";

export const getUserDetails = async () => {
    const response = await api.get<ApiResponseType<IUser>>("/user");
    return response.data;
}

export const updateUserDetails = async <T = Partial<IUser>>(body: T) => {
    const response = await api.patch<UpdateUserResponse, T>("/profile", body);
    return response.data;
}