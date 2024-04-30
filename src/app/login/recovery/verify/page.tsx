"use client";

import SideImage from "@/components/ui/Signup/signup";
import ResetPasswordPhoto from "@public/assets/reset_password_photo_2.svg";
import EnterOTPForm from "./enter-otp-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Route } from "@/lib/enums/routes.enums";

export default function VerifyOtpPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email");

  useEffect(() => {
    if (!email) {
      router.push(Route.Home);
    }
  }, [email]);

  if (!email) return null;

  return (
    <>
      <SideImage
        title="Enter OTP"
        titletext=""
        subtext={`One time password has been sent to ${email}`}
        sideDescription="Loorem Ipsum Loorem IpsumLoorem IpsumLoorem IpsumLoorem IpsumLoorem IpsumLoorem IpsumLoorem Ipsum"
        sideTitle="Easy password recovery "
        photo={ResetPasswordPhoto}
      >
        <EnterOTPForm email={email} />
      </SideImage>
    </>
  );
}
