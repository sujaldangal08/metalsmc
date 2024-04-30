import { api } from "@/config/api.config";
import Cookies from "js-cookie";
import {
  DisableTwoFactorAuthRequestBody,
  DisabledTwoFactorAuthResponse,
  GenerateQrRequestBody,
  GenerateQrResponse,
  LoginResponse,
  UserLoginBody,
  UserRegisterBody,
  Verify2faRequestBody,
  Verify2faResponse,
  VerifyOtpBody,
} from "./types";

export async function signInFn<R = UserLoginBody>(body: R) {
  const response = await api.request<LoginResponse, R>({
    endpoint: "/login",
    body,
    method: "POST",
    withHeaders: false,
  });

  //save tokens in the cookies
  Cookies.set("session", response.data.access_token, {
    expires: new Date(Date.now() + 10 * 60 * 60 * 1000),
  });

  return response.data;
}

export async function verifyOtp(body: VerifyOtpBody) {
  const response = await api.request({
    endpoint: "/verify",
    body,
    method: "POST",
    withHeaders: false,
  });
  return response.data;
}

// Two factor auth functions ====================
export async function generateQrCodeFn<
  T = GenerateQrResponse,
  S = GenerateQrRequestBody,
>(body: S) {
  const response = await api.request<T, S>({
    endpoint: "/2fa/generate",
    method: "POST",
    body,
    withHeaders: false,
  });

  return response;
}

export async function disableTwoFactorFn<
  S = DisableTwoFactorAuthRequestBody,
  T = DisabledTwoFactorAuthResponse,
>(body: S) {
  const response = await api.request<T, S>({
    endpoint: "/2fa/disable",
    method: "POST",
    body,
    withHeaders: false,
  });

  return response;
}

export async function verifyQrFn<
  T = Verify2faResponse,
  S = Verify2faRequestBody,
>(body: S) {
  const response = await api.request<T, S>({
    endpoint: "/2fa/verify",
    method: "POST",
    body,
    withHeaders: false,
  });

  return response;
}
