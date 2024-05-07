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
import { FaCheck, FaChevronDown } from "react-icons/fa";

interface CustomSelectBoxProps<T> {
  items: T[];
  placeholder: string;
  value: T | null;
  setValue: (value: T) => void;
  getItemString: (item: T) => string;
}

export default function CustomSelectBox<T>({
  items,
  placeholder,
  value,
  setValue,
  getItemString,
}: CustomSelectBoxProps<T>) {
  const [query, setQuery] = useState("");

  const filteredItems =
    query === ""
      ? items
      : items.filter((item) =>
          getItemString(item).toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="mx-auto h-screen w-52 ">
      <Combobox value={value} onChange={(value) => setValue(value!)} __demoMode>
        <div className="relative">
          <ComboboxInput
            placeholder={placeholder}
            className={cn(
              "w-full rounded-md border border-gray-300 bg-white py-[7px] pr-8 pl-3 text-sm/6 ",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            displayValue={getItemString}
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
            {filteredItems.map((item) => (
              <ComboboxOption
                key={getItemString(item)}
                value={item}
                className="group flex cursor-default items-center gap-2 rounded-md py-1.5 px-3 select-none data-[focus]:bg-gray-100"
              >
                <FaCheck className="invisible size-4 fill-black group-data-[selected]:visible" />
                <div className="text-sm/6 text-gray-700">
                  {getItemString(item)}
                </div>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Transition>
      </Combobox>
    </div>
  );
}
