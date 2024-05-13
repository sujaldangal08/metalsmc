"use client";

import SideImage from "@/components/ui/Signup/signup";
import { Route } from "@/lib/enums/routes.enums";
import ResetPasswordPhoto from "@public/assets/reset_password_photo_2.svg";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import EnterOTPForm from "./enter-otp-form";

export default function VerifyOtpPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email");

  useEffect(() => {
    if (!email) {
      router.push(Route.Home);
    }
  }, [email, router]);

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
