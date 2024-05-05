import { api } from "@/config/api.config";
import { UpdateUserResponse, UserResponse } from "./types";

export const getUserDetails = async () => {
    const response = await api.get<UserResponse>("/user");
    return response.data;
}

export const updateUserDetails = async <T = Partial<Pick<UserResponse, 'data'>>>(body: T) => {
    const response = await api.request<UpdateUserResponse, T>({ endpoint: "/profile", body: body, method: "PATCH" });
    return response.data;
}

