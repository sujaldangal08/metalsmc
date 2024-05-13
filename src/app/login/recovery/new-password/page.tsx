"use client";

import SideImage from "@/components/ui/Signup/signup";
import { Route } from "@/lib/enums/routes.enums";
import ChnagePasswordPhoto from "@public/assets/change_password_photo.svg";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ChangePasswordForm from "./change-password-form";

export default function ChangePasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const hash = searchParams.get("hash");

  useEffect(() => {
    if (!hash) {
      router.push(Route.Home);
    }
  }, [hash, router]);

  if (!hash) return null;

  return (
    <>
      <SideImage
        title="Set a new password"
        titletext=""
        subtext=""
        photo={ChnagePasswordPhoto}
        sideDescription="Loorem Ipsum Loorem IpsumLoorem IpsumLoorem IpsumLoorem IpsumLoorem IpsumLoorem IpsumLoorem Ipsum"
        sideTitle="The simplest way to manage your workspace."
      >
        <ChangePasswordForm password_hash={hash} />
      </SideImage>
    </>
  );
}
