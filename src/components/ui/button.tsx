"use client";

import { FC } from "react";
import { Button as RizzuiButton, type ButtonProps } from "rizzui";

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const colorVariants = {
    default: "text-black bg-white hover:bg-gray-200",
    primary: "text-white bg-primary hover:bg-primary-lighter ",
    secondary: "",
    danger: "",
  };

  return (
    <RizzuiButton
      {...props}
      className={colorVariants[props.color ? props.color : "default"]}
    >
      {children}
    </RizzuiButton>
  );
};
