import { api } from "@/config/api.config";
import Cookies from "js-cookie";
import {
  ChangePasswordRequestBody,
  ChangePasswordResponse,
  DisableTwoFactorAuthRequestBody,
  DisabledTwoFactorAuthResponse,
  ForgotPasswordRequestBody,
  ForgotPasswordResponse,
  GenerateQrRequestBody,
  GenerateQrResponse,
  LoginResponse,
  UserLoginBody,
  Verify2faRequestBody,
  Verify2faResponse,
  VerifyOtpBody,
  VerifyOtpResponse
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

  return response;
}

export async function verifyOtpFn<R = VerifyOtpBody>(body: R) {
  const response = await api.request<VerifyOtpResponse, R>({
    endpoint: "/verify-otp",
    body,
    method: "POST",
    withHeaders: false,
  });

  return response;
}

export async function forgotPasswordFn<R = ForgotPasswordRequestBody>(body: R) {
  const response = await api.request<ForgotPasswordResponse, R>({
    endpoint: "/forgot-password",
    body,
    method: "POST",
    withHeaders: false,
  })

  return response;
}

export async function changePasswordFn<R = ChangePasswordRequestBody>(body: R) {
  const response = await api.request<ChangePasswordResponse, R>({
    endpoint: "/change-password",
    method: "PATCH",
    body,
    withHeaders: false,
  })

  return response;
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
