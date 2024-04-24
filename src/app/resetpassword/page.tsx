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
        <MetalIcon/>
       
          <h2 className="text-text text-xl font-semibold">
            Reset Your password!
          </h2>
          <p className="text-text-light text-sm mt-3 max-w-prose">
            Enter the email that you want to use to reset your <br />
            password.
          </p>

          <div className="relative mt-10">
          <input
                   
                    id="email"
                    name="email"
                    type="text"
                    className="peer h-10 w-full  border-gray-300 text-gray-900   focus:outline-none"
                    placeholder="john@doe.com"
                    autoComplete="off"
                  />
     <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200"></div>

    </div>

          <div className="flex w-full justify-between gap-10 mt-12">
            <Button variant="outline" className="py-5 w-1/2">
              <div className="flex items-center gap-4">
                <h3 className="text-sm font-normal text-gray-dark ">
                  Resend OTP
                  <span className="text-gray-light">(56)</span>
                </h3>
              </div>
            </Button>
            <Button variant="outline" className="py-5 w-1/2 bg-primary">
              <div className="flex items-center gap-4">
                <h3 className="text-sm font-normal text-white ">Verify OTP</h3>
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
