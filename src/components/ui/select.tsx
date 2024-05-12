"use client";

import cn from "@/utils/class-names";
import { Select as HUISelect } from "@headlessui/react";
import { FC } from "react";
import { FieldError } from "react-hook-form";
import { PiCaretDownBold } from "react-icons/pi";
import { SelectOption, SelectProps } from "rizzui";

interface CustomSelectProps extends Omit<SelectProps<SelectOption>, "error"> {
  label?: string;
  options: SelectOption[];
  value?: string | number;
  setValue?: (value: string | number) => void;
  labelLayout?: "horizontal" | "vertical";
  error?: FieldError;
}

export const Select: FC<CustomSelectProps> = ({
  label,
  className,
  options,
  labelLayout,
  error,
}) => {
  return (
    <label
      htmlFor={"select"}
      className={cn(
        "flex gap-3 items-center relative",
        labelLayout === "vertical" && "flex-col gap-2"
      )}
    >
      {label && <p className="font-medium">{label}:</p>}
      <HUISelect
        className={cn(
          "w-full appearance-none rounded-md bg-white border border-gray-300 py-1.5 px-3 text-sm/6 text-gray-700",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
          className,
          error?.message && "border border-red-500"
        )}
        id="select"
      >
        {options.map(({ value, label }, indx) => (
          <option value={value}>{label}</option>
        ))}
      </HUISelect>

      <PiCaretDownBold className="absolute pointer-events-none right-2 top-1/2 -translate-y-1/2 text-sm" />
    </label>
  );
};
