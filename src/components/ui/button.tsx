"use client";

import { FC } from "react";
import { Button as RizzuiButton, type ButtonProps } from "rizzui";
import Spinner from "./spinner";
import cn from "@/utils/class-names";

export const Button: FC<ButtonProps> = ({
  children,
  className,
  isLoading = false,
  ...props
}) => {
  const colorVariants = {
    default: "text-black bg-white hover:bg-gray-200",
    primary: "text-white bg-primary hover:bg-primary-dark ",
    secondary: "",
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
      {isLoading ? <Spinner color="white" /> : children}
    </RizzuiButton>
  );
};
