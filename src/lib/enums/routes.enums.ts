export enum Route {
  Home = "/",
  Login = "/login",
  Register = "/register",
  ForgotPassword = "/login/recovery/forgot-password",
  VerifyOtp = "/login/recovery/verify",
  NewPassword = "/login/recovery/new-password",

  TwoFactorAuth = "/2fa",
  TwoFactorAuthVerify = "/2fa/verify",
  TwoFactorAuthGenerate = "/2fa/generate",
  TwoFactorAuthDisable = "/2fa/disable",

  XeroConnect = "/xero-connect",
  XeroConnectCallback = "/xero-connect/callback",
  XeroAuthorize = "/xero-authorize",
  XeroAuthorizeCallback = "/xero-authorize/callback",
  XeroCallback = "/xero-callback",
  XeroCallbackCallback = "/xero-callback/callback",
  XeroCallbackCallbackCallback = "/xero-callback/callback/callback",

  //Delivery and Pickups
  //Pickups Shedule
  DeliverySchedule = "/delivery-schedule",
  PickupSchedule = "/pickup-schedule",
  AssignPickupSchedule = "/pickup-schedule/assign",
}
