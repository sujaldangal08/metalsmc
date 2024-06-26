"use client";

import React, { FC } from "react";
import { Button as RizzuiButton, type ButtonProps } from "rizzui";
import Spinner, { SpinnerSizeTypes } from "./spinner";
import cn from "@/utils/class-names";

export const Button: FC<ButtonProps & { spinnerSize?: SpinnerSizeTypes }> = (
  { children, className, isLoading = false, spinnerSize, ...props },
  ref
) => {
  const colorVariants = {
    default: "text-black bg-white hover:bg-gray-100",
    primary: "text-white bg-primary hover:bg-primary-dark ",
    secondary:
      "bg-gray-300 text-black border border-gray-400 hover:bg-gray-200",
    danger: "",
  };

  return (
    <RizzuiButton
      {...props}
      className={cn(
        colorVariants[props.color ? props.color : "default"],
        className
      )}
      disabled={isLoading}
    >
      {isLoading ? <Spinner color="white" size={spinnerSize} /> : children}
    </RizzuiButton>
  );
};
