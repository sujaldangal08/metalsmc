"use client";

import Spinner from "@/components/ui/spinner";
import { forgotPasswordFn, verifyOtpFn } from "@/features/api/auth";
import { Route } from "@/lib/enums/routes.enums";
import useMutation from "@/lib/hooks/useMutation";
import cn from "@/utils/class-names";
import { formatErrorMessage } from "@/utils/format-errors";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "rizzui";
import * as z from "zod";

const otpSchema = z.object({
  otp: z.array(z.string().length(1, "Please enter a digit")),
});

type OTPFormInput = z.infer<typeof otpSchema>;

export default function EnterOTPForm({ email }: { email: string }) {
  const router = useRouter();

  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<HTMLInputElement[] | null[]>(
    Array.from({ length: 6 }, () => null)
  );

  const [resendTimer, setResendTimer] = useState(60); // 60 seconds timer
  const [isResendDisabled, setIsResendDisabled] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp },
  });

  const { mutate: verifyOtpMn, isLoading } = useMutation({
    mutateFn: (body) => verifyOtpFn(body),
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;

    if (e.target.value.length >= 1 && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    setOtp(newOtp);
  };

  const handleRemoveInput = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      (e.target as HTMLInputElement).value === "" &&
      index > 0 &&
      (e.code === "Backspace" || e.key === "Backspace")
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const onSubmit: SubmitHandler<OTPFormInput> = async (data) => {
    const i_otp = data.otp.join("");
    const inputs = {
      email,
      otp: i_otp,
    };

    try {
      const res = await verifyOtpMn(inputs);
      toast.success(res.data.message);
      router.push(`${Route.NewPassword}?hash=${res.data.hash}`);
    } catch (error: any) {
      toast.error(formatErrorMessage(error));
    }
  };

  const handleResendOTP = async () => {
    try {
      await forgotPasswordFn({ email });

      // Start the timer
      setIsResendDisabled(true);
      const intervalId = setInterval(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      // Clear the interval after 60 seconds
      setTimeout(() => {
        clearInterval(intervalId);
        setIsResendDisabled(false);
        setResendTimer(60);
      }, 60000);
    } catch (error: any) {
      toast.error(formatErrorMessage(error));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-[90%] flex flex-col items-start justify-start h-full gap-10 mt-10">
        <div className="flex justify-between w-full">
          {Array.from({ length: otp.length }, (_, index) => (
            <Controller
              key={index}
              control={control}
              name={`otp.${index}`}
              defaultValue={otp[index]}
              render={({ field: { value, onChange } }) => (
                <input
                  type="text"
                  id={`otp-input-${index}`}
                  ref={(el) => {
                    (inputRefs.current[index] as any) = el;
                  }}
                  autoFocus={index === 0 ? true : false}
                  value={value}
                  onChange={(e) => {
                    onChange(e);
                    handleChange(e, index);
                  }}
                  onKeyDown={(e) => handleRemoveInput(e, index)}
                  maxLength={1}
                  className={cn(
                    "w-14 h-14 text-md border-1 bg-gray-50 border-gray-300 rounded-md text-center",
                    errors?.otp?.[index] ? "border-red-500" : "border-gray-300"
                  )}
                />
              )}
            />
          ))}
        </div>

        <div className="flex md:flex-row flex-col w-full justify-between md:gap-10 gap-3">
          <Button
            disabled={isResendDisabled}
            onClick={handleResendOTP}
            variant="outline"
            className="py-5 md:w-1/2 w-full"
          >
            <div className="flex items-center gap-4">
              <h3 className="text-sm font-normal text-gray-dark ">
                Resend OTP
                <span className="font-medium text-gray-500">
                  ({resendTimer})
                </span>
              </h3>
            </div>
          </Button>
          <Button
            variant="outline"
            type="submit"
            className="py-5 md:w-1/2 w-full bg-primary disabled:opacity-75"
            disabled={isLoading}
          >
            {isLoading ? (
              <Spinner tag="span" color="white" />
            ) : (
              <h3 className="text-sm font-normal text-white ">Verify OTP</h3>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
