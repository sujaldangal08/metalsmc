"use client";

import { Button, PinCode } from "rizzui";

export default function EnterOTPForm() {
  return (
    <div className="flex flex-col items-start justify-start h-full gap-10 mt-10">
      <PinCode
        className="w-full [&>div]:justify-between"
        length={6}
        rounded="lg"
        size="lg"
        center={false}
        mask={false}
        placeholder=""
        variant="outline"
        inputClassName="rounded-xl border border-gray-light"
      />
      <div className="flex md:flex-row flex-col w-full justify-between md:gap-10 gap-3">
        <Button variant="outline" className="py-5 md:w-1/2 w-full">
          <div className="flex items-center gap-4">
            <h3 className="text-sm font-normal text-gray-dark ">
              Resend OTP
              <span className="text-gray-light">(56)</span>
            </h3>
          </div>
        </Button>
        <Button variant="outline" className="py-5 md:w-1/2 w-full bg-primary">
          <div className="flex items-center gap-4">
            <h3 className="text-sm font-normal text-white ">Verify OTP</h3>
          </div>
        </Button>
      </div>
    </div>
  );
}
