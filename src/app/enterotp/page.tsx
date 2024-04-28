import SideImage from "@/components/ui/Signup/signup";
import ResetPasswordPhoto from "@public/assets/reset_password_photo_2.svg";
import EnterOTPForm from "./enter-otp-form";

export default function page() {
  return (
    <>
      <SideImage
        title="Enter OTP"
        titletext=""
        subtext="One time password has been sent to example@gmail.com "
        sideDescription="Loorem Ipsum Loorem IpsumLoorem IpsumLoorem IpsumLoorem IpsumLoorem IpsumLoorem IpsumLoorem Ipsum"
        sideTitle="Easy password recovery "
        photo={ResetPasswordPhoto}
      >
        <EnterOTPForm />
      </SideImage>
    </>
  );
}
