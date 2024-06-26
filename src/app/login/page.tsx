"use client";

import SideImage from "@/components/ui/Signup/signup";
import withoutAuth from "@/lib/hoc/withoutAuth";
import LoginPhoto from "@public/assets/login_photo.svg";
import SignInForm from "./signin-form";
import { GoogleOAuthProvider } from "@react-oauth/google";

function Loginpage() {
  return (
    <>
      <SideImage
        title="Welcome Back!"
        titletext="Please Sign in to continue "
        subtext="By signing up, you will gain access to exclusive content"
        photo={LoginPhoto}
        sideDescription="Loorem Ipsum Loorem IpsumLoorem IpsumLoorem IpsumLoorem IpsumLoorem IpsumLoorem IpsumLoorem Ipsum"
        sideTitle="The simplest way to manage your workspace."
      >
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
        >
          <SignInForm />
        </GoogleOAuthProvider>
      </SideImage>
    </>
  );
}

export default withoutAuth(Loginpage);
