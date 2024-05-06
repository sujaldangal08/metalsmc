"use client";
import { Form } from "@/components/ui/form";
import Spinner from "@/components/ui/spinner";
import { signInFn } from "@/features/api/auth";
import { UserLoginBody } from "@/features/api/auth/types";
import { setSessionCookie } from "@/lib/auth";
import { Route } from "@/lib/enums/routes.enums";
import useMutation from "@/lib/hooks/useMutation";
import { handleGoogleSignin } from "@/lib/oauth-helpers";
import { formatErrorMessage } from "@/utils/format-errors";
import { LoginSchema, loginSchema } from "@/utils/validators/login.schema";
import FacebookLogin from "@greatsumini/react-facebook-login";
import FacebookIcon from "@public/assets/facebook_icon.png";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { Button, Checkbox, Input, Password } from "rizzui";

const initialValues: LoginSchema = {
  email: "user1@example.com",
  password: "password",
  rememberMe: true,
};

export default function SignInForm() {
  const [reset, setReset] = useState();
  const router = useRouter();
  const { mutate: signInMn, isLoading } = useMutation<UserLoginBody>({
    mutateFn: (body) => signInFn(body),
  });

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    try {
      const res = await signInMn({
        email: data.email,
        password: data.password,
      });

      setSessionCookie(res.data.access_token);
      toast.success(res.data.message);
      router.push(Route.Home);
    } catch (err: any) {
      toast.error(formatErrorMessage(err));
    }
  };

  const handleGoogleAuthResponse = async (res: CredentialResponse) => {
    try {
      await handleGoogleSignin(res.credential!);
      console.log(res.credential);
      router.push(Route.Home);
    } catch (err: any) {
      toast.error(formatErrorMessage(err));
    }
  };

  const handleFacebookResponse = (res: any) => {
    console.log(res);
  };

  return (
    <Form<LoginSchema>
      validationSchema={loginSchema}
      resetValues={reset}
      onSubmit={onSubmit}
      useFormProps={{
        defaultValues: initialValues,
      }}
      className="mt-5"
    >
      {({ register, formState: { errors } }) => (
        <div className="space-y-8">
          <div className="flex flex-col gap-6">
            <Input
              type="email"
              size="lg"
              label="Email"
              placeholder="Enter your email"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              {...register("email")}
              error={errors.email?.message}
            />
            <Password
              label="Password"
              placeholder="Enter your password"
              size="lg"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              {...register("password")}
              error={errors.password?.message}
            />
            <div className="flex w-full justify-between items-center">
              <Checkbox
                {...register("rememberMe")}
                label="Remember Me"
                className="[&>label>span]:font-normal"
              />
              <Link href={Route.ForgotPassword}>Forgot password?</Link>
            </div>
          </div>
          <div className="flex flex-col md:gap-6 gap-4">
            <Button
              disabled={isLoading}
              className="py-6 bg-primary hover:bg-primary-dark flex disabled:opacity-75"
              type="submit"
            >
              {isLoading ? (
                <Spinner tag="span" color="white" />
              ) : (
                <span>Sign in</span>
              )}
            </Button>

            <div className="flex w-full items-center gap-4">
              <div className="w-1/2 h-[1px] bg-gray-light"></div>
              <p className="text-xs text-gray">or</p>
              <div className="w-1/2 h-[1px] bg-gray-light"></div>
            </div>
            <div className="flex md:flex-row flex-col w-full justify-between md:gap-10 gap-3">
              <div className="flex-1">
                <GoogleLogin
                  onSuccess={handleGoogleAuthResponse}
                  onError={() => toast.error("Google signin failed!!")}
                  containerProps={{
                    style: {
                      width: "100% !important",
                    },
                  }}
                />
              </div>

              <FacebookLogin
                appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}
                fields="name,email,picture"
                scope="public_profile,email"
                onSuccess={handleFacebookResponse}
                render={({ onClick }) => (
                  <Button
                    onClick={onClick}
                    variant="outline"
                    className="md:w-1/2 w-full"
                  >
                    <div className="flex items-center md:gap-4 gap-8 py-5">
                      <Image
                        src={FacebookIcon}
                        alt="Google Photo"
                        width={200}
                        height={200}
                        className="w-[25px]"
                      />
                      <h3 className="text-sm font-normal text-gray-dark">
                        Sign up with Facebook
                      </h3>
                    </div>
                  </Button>
                )}
              />
            </div>
          </div>
        </div>
      )}
    </Form>
  );
}
