import SideImage from "@/components/ui/Signup/signup";
import ResetPasswordPhoto from "@public/assets/reset_password_photo.svg";
import ResetPasswordForm from "./reset-password-form";

export default function page() {
  return (
    <>
      <SideImage
        title="Forgotten your Password?"
        titletext=""
        subtext="Enter the email that you want to use to reset your password. "
        photo={ResetPasswordPhoto}
        sideDescription="Loorem Ipsum Loorem IpsumLoorem IpsumLoorem IpsumLoorem IpsumLoorem IpsumLoorem IpsumLoorem Ipsum"
        sideTitle="Forgotten your Password?"
      >
        <ResetPasswordForm />
      </SideImage>
    </>
  );
}
