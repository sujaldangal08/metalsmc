import { Button, Checkbox, Input, Password } from "rizzui";


import SideImage from "@/components/ui/Signup/signup"

export default function page() {
  return (
<>
    <SideImage
    
    title="Reset your Password! "
    titletext=""
    subtext="Enter the email that you want to use to reset your password. "
    

  >
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

      </SideImage>
    
      </>
  );
}
