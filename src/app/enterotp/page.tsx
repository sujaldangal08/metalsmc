import { Button, Checkbox, Input, Password } from "rizzui";
import { PinCode } from "rizzui";


import SideImage from "@/components/ui/Signup/signup"
export default function page() {
  return (
    <>
    <SideImage
    title ="Reset your Password!"
    titletext=""
    subtext="One time password has been sent to example@gmail.com "
    

  >
<div className="relative mt-10">
            <div className = "  text-center  ">
            <PinCode className="" length={6} rounded="lg" size="xl" center={false} mask={true} placeholder="" variant="outline" 
            inputClassName="rounded-xl px-6 py-3 mr-6  border border-[#949494] bg-[custom-gray]"
            />
            </div>
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
