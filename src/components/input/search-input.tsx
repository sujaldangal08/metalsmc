import { useState, useMemo } from "react";
import cn from "@/utils/class-names";
import { Input, InputProps } from "rizzui";

interface Props<T> extends InputProps {
  value: string;
  setValue: (value: string) => void;
  filterFunction: (value: string) => T[];
  className?: string;
  placeholder?: string;
  label?: string;
  render: (data: T[]) => JSX.Element;
}

export default function SearchInput<T>({
  value,
  setValue,
  filterFunction,
  className = "",
  placeholder = "Search",
  label = "",
  render,
  ...props
}: Props<T>) {
  const [isFocus, setFocus] = useState(false);

  const filteredData = useMemo(() => {
    return filterFunction(value);
  }, [value, filterFunction]);

  return (
    <div className={cn("w-1/3 relative", className)}>
      <Input
        label={label}
        placeholder={placeholder}
        inputClassName="bg-white ring-gray-dark"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        {...props}
      />
      {isFocus && (
        <div className="bg-white w-full mt-2 rounded-md shadow-sm flex flex-col z-50 absolute">
          {render(filteredData)}
        </div>
      )}
    </div>
  );
}
