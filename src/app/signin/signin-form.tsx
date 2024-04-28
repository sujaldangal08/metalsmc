"use client";
import { Button, Checkbox, Input, Password } from "rizzui";
import Image from "next/image";
import GoogleIcon from "@public/assets/google_icon.png";
import FacebookIcon from "@public/assets/facebook_icon.png";
import { Form } from "@/components/ui/form";
import { loginSchema, LoginSchema } from "@/utils/validators/login.schema";
import { SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInFn } from "@/features/api/auth";

const initialValues: LoginSchema = {
  email: "user2@example.com",
  password: "password",
  rememberMe: true,
};

export default function SignInForm() {
  const [reset, setReset] = useState();
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    console.log(process.env.NEXT_PUBLIC_API_URL)
    const res = await signInFn({ email: data.email, password: data.password });
    router.push("/");
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
              <p>Forgot password?</p>
            </div>
          </div>
          <div className="flex flex-col md:gap-6 gap-4">
            <Button className="bg-primary hover:bg-primary-dark" type="submit">
              <span>Sign in</span>
            </Button>
            <p className="text-primary sm:text-sm text-xs">
              Dont' have an Account ?
              <span className="ml-2 text-text font-semibold cursor-pointer">
                Sign up
              </span>
            </p>
            <div className="flex w-full items-center gap-4">
              <div className="w-1/2 h-[1px] bg-gray-light"></div>
              <p className="text-xs text-gray">or</p>
              <div className="w-1/2 h-[1px] bg-gray-light"></div>
            </div>
            <div className="flex md:flex-row flex-col w-full justify-between md:gap-10 gap-3">
              <Button variant="outline" className="md:w-1/2 w-full">
                <div className="flex items-center md:gap-4 gap-8 py-5">
                  <Image
                    src={GoogleIcon}
                    alt="Google Photo"
                    width={200}
                    height={200}
                    className="w-[25px]"
                  />
                  <h3 className="text-sm font-normal text-gray-dark ">
                    Sign up with Google
                  </h3>
                </div>
              </Button>
              <Button variant="outline" className="md:w-1/2 w-full">
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
            </div>
          </div>
        </div>
      )}
    </Form>
  );
}
