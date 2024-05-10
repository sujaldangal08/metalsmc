import cn from "@/utils/class-names";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import { useState } from "react";
import { FieldError } from "react-hook-form";
import { FaCheck, FaChevronDown } from "react-icons/fa";

interface CustomSelectBoxProps<T> {
  items: T[];
  placeholder: string;
  value: T | null;
  setValue: (value: T) => void;
  getDisplayItem: (item: T) => string;
  error?: FieldError;
}

export default function CustomSelectBox<T>({
  items,
  placeholder,
  value,
  setValue,
  getDisplayItem,
  error,
}: CustomSelectBoxProps<T>) {
  const [query, setQuery] = useState("");

  const filteredItems =
    query === ""
      ? items
      : items.filter((item) =>
          getDisplayItem(item).toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="w-52">
      <Combobox value={value} onChange={(value) => setValue(value!)}>
        <div className="relative">
          <ComboboxInput
            placeholder={placeholder}
            className={cn(
              "w-full rounded-md border border-gray-300 bg-white py-[7px] pr-8 pl-3 text-sm/6 ",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
              error?.message && "border-red-500"
            )}
            displayValue={getDisplayItem}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <FaChevronDown className="size-3 fill-gray-400 group-data-[hover]:fill-gray-400" />
          </ComboboxButton>
        </div>
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <ComboboxOptions
            anchor="bottom"
            className="w-[var(--input-width)] rounded-md border border-gray-300 bg-white p-1 mt-1 [--anchor-gap:var(--spacing-1)] empty:hidden"
          >
            {filteredItems.map((item, idx) => (
              <ComboboxOption
                key={getDisplayItem(item) + idx}
                value={item}
                className="group flex cursor-default items-center gap-2 rounded-md py-1.5 px-3 select-none data-[focus]:bg-gray-100"
              >
                <FaCheck className="invisible size-3 fill-black group-data-[selected]:visible" />
                <div className="text-sm/6 text-gray-700">
                  {getDisplayItem(item)}
                </div>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Transition>
      </Combobox>
    </div>
  );
}
