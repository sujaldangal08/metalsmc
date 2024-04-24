import { Button, Checkbox, Input, Password } from "rizzui";
import GoogleIcon from "@public/assets/google_icon.png";
import FacebookIcon from "@public/assets/facebook_icon.png";
import LoginPhoto from "@public/assets/analytics-on-computer-screen.png";
import Image from "next/image";
import MetalIcon from "@public/assets/Icons/MetalIcon";
export default function page() {
  return (
    <div className="flex flex-row w-full h-[100vh] bg-success">
      <div className="flex flex-col w-1/2 bg-white rounded-r-[40px] p-[90px] justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-text text-xl font-semibold">Welcome back!</h2>
          <h2 className="text-text text-lg font-semibold">
            Please Sign in to continue
          </h2>
          <p className="text-text-light text-sm mt-3">
            By signing up, you will gain access to exclusive content
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <Input
            type="email"
            size="lg"
            label="Email"
            placeholder="Enter your email"
            className="[&>label>span]:font-medium"
            inputClassName="text-sm"
          />
          <Password
            label="Password"
            placeholder="Enter your password"
            size="lg"
            className="[&>label>span]:font-medium"
            inputClassName="text-sm"
          />
          <div className="flex w-full justify-between items-center">
            <Checkbox
              label="Remember Me"
              className="[&>label>span]:font-normal"
            />
            <p>Forgot password?</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Button className="bg-primary hover:bg-primary-dark">
            <span>Sign in</span>
          </Button>
          <p className="text-primary text-sm">
            Dont' have an Account ?
            <span className="ml-2 text-text font-semibold cursor-pointer">Sign up</span>
          </p>
          <div className="flex w-full items-center gap-4">
            <div className="w-1/2 h-[1px] bg-gray-light"></div>
            <p className="text-xs text-gray">or</p>
            <div className="w-1/2 h-[1px] bg-gray-light"></div>
          </div>
          <div className="flex w-full justify-between gap-10">
            <Button variant="outline" className="py-5 w-1/2">
              <div className="flex items-center gap-4">
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
            <Button variant="outline" className="py-5 w-1/2">
              <div className="flex items-center gap-4">
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
      <div className="flex flex-col w-1/2 p-[90px] items-center justify-between">
        <h2 className="text-white text-xl leading-[120%] font-semibold text-center">
          The simplest way to
          <br /> manage your workspace.
        </h2>
        <Image
          src={LoginPhoto}
          alt="Login Photo"
          className="w-[80%] ml-[18%]"
        />
        <p className="text-white text-sm text-center w-[75%]">
          Loorem Ipsum Loorem IpsumLoorem IpsumLoorem IpsumLoorem IpsumLoorem
          IpsumLoorem IpsumLoorem Ipsum
        </p>
      </div>
    </div>
  );
}
