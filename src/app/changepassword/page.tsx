import SideImage from "@/components/ui/Signup/signup";
import ChangePasswordForm from "./change-password-form";
import ChnagePasswordPhoto from "@public/assets/change_password_photo.svg";

export default function page() {
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
        <ChangePasswordForm />
      </SideImage>
    </>
  );
}
