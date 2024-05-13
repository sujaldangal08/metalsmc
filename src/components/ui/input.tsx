import cn from "@/utils/class-names";
import React, { FC, LegacyRef, forwardRef } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { Input as RizzUIInput, type InputProps } from "rizzui";

interface CustomInputProps extends Omit<InputProps, "error"> {
  error?: FieldError;
  hideErrorMessage?: boolean;
  register?: UseFormRegister<any>;
  name?: string;
}

export const Input: FC<CustomInputProps> = ({
  className,
  error,
  name,
  hideErrorMessage,
  register,
  ...props
}) => {
  return (
    <RizzUIInput
      className={cn("w-full", hideErrorMessage && "[&>div]:hidden", className)}
      inputClassName="!bg-white border border-gray-light ring-0"
      errorClassName="focus:ring-0"
      error={error?.message}
      {...(register && name ? register(name) : {})}
      {...props} // Spread the props object without the 'ref' prop
    />
  );
};
