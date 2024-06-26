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

  //Delivery Shedule
  DeliverySchedule = "/delivery&pickups/delivery-schedule",
  AssignDeliverySchedule = "/delivery&pickups/delivery-schedule/assign",
  //Pickups Shedule
  PickupSchedule = "/delivery&pickups/pickup-schedule",
  ViewPickupSchedule = "/delivery&pickups/pickup-schedule/view",
  AssignPickupSchedule = "/delivery&pickups/pickup-schedule/assign",
  ViewPickupAttachment = "/delivery&pickups/pickup-schedule/attachment"
}
