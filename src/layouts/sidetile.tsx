import cn from "@/utils/class-names";
import Link from "next/link";
import React, { Fragment } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import { Collapse, Title } from "rizzui";

interface SideTileProps {
  item: {
    name: string;
    href: string;
    icon: React.ReactElement;
    dropdownItems?: { name: string; href: string }[];
  };
  index: number;
  isDropdownOpen: boolean;
  isActive: boolean;
  pathname: any;
  openDrawer: boolean;
}

export default function SideTile({
  item,
  index,
  isDropdownOpen,
  isActive,
  pathname,
}: SideTileProps) {
  return (
    <Fragment key={item.name + "-" + index}>
      {item?.href ? (
        <>
          {item?.dropdownItems ? (
            <Collapse
              defaultOpen={isDropdownOpen}
              header={({ open, toggle }) => (
                <div
                  onClick={toggle}
                  className={cn(
                    "group relative mx-3 flex cursor-pointer items-center justify-between rounded-md px-3 py-2 font-medium lg:my-1 2xl:mx-5 2xl:my-2",
                    isDropdownOpen
                      ? "before:top-2/5 bg-white text-gray-700 before:absolute before:-start-3 before:block before:h-4/5 before:w-1 before:rounded-ee-md before:rounded-se-md before:bg-primary 2xl:before:-start-5"
                      : "text-white transition-colors duration-200 hover:bg-gray-50 hover:text-gray-700"
                  )}
                >
                  <span className="flex items-center gap-2">
                    {item?.icon &&
                      React.cloneElement(item.icon, {
                        w: "22",
                        h: "22",
                        className: cn(
                          isDropdownOpen
                            ? "stroke-green fill-green"
                            : "stroke-white fill-white group-hover:stroke-green group-hover:fill-green"
                        ),
                      })}
                    {item.name}
                  </span>

                  <PiCaretDownBold
                    strokeWidth={3}
                    className={cn(
                      "h-3.5 w-3.5 -rotate-90 group-hover:text-gray-700 text-white transition-transform duration-200 rtl:rotate-90",
                      open && "rotate-0 rtl:rotate-0 group-hover:text-gray-700"
                    )}
                  />
                </div>
              )}
            >
              {item?.dropdownItems?.map((dropdownItem, index) => {
                const isChildActive =
                  pathname === (dropdownItem?.href as string);

                return (
                  <Link
                    href={dropdownItem?.href}
                    key={dropdownItem?.name + index}
                    className={cn(
                      "mx-3.5 mb-0.5 flex items-center justify-between rounded-md px-3.5 py-2 font-medium capitalize last-of-type:mb-1 lg:last-of-type:mb-2 2xl:mx-5",
                      isChildActive
                        ? "text-gray-700"
                        : "text-white transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
                    )}
                  >
                    <div className="flex items-center truncate gap-3">
                      <span
                        className={cn(
                          "inline-flex h-2 w-2 rounded-full bg-current transition-all duration-200",
                          isChildActive
                            ? "bg-white ring-[1px] ring-white"
                            : "opacity-40 hover:bg-white hover:opacity-100" // Added hover classes for the dot
                        )}
                      />
                      <span className="truncate sm:text-sm">
                        {dropdownItem?.name}
                      </span>
                    </div>
                    {/* {dropdownItem?.badge?.length ? (
                      <StatusBadge status={dropdownItem?.badge} />
                    ) : null} */}
                  </Link>
                );
              })}
            </Collapse>
          ) : (
            <Link
              href={item?.href}
              className={cn(
                "group relative mx-3 my-0.5 flex items-center justify-between rounded-md px-3 py-2 font-medium capitalize lg:my-1 2xl:mx-5 2xl:my-2",
                isActive
                  ? "before:top-2/5 bg-white text-gray-700 before:absolute before:-start-3 before:block before:h-4/5 before:w-1 before:rounded-ee-md before:rounded-se-md before:bg-primary 2xl:before:-start-5"
                  : "text-white transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 "
              )}
            >
              <div className="flex items-center gap-3 truncate">
                {item?.icon &&
                  React.cloneElement(item.icon, {
                    w: "22",
                    h: "22",
                    className: cn(
                      isActive
                        ? " stroke-green fill-green"
                        : "group-hover:stroke-primary group-hover:fill-primary stroke-white fill-white"
                    ),
                  })}
                <span className="truncate">{item.name}</span>
              </div>
              {/* {item?.badge?.length ? (
                <StatusBadge status={item?.badge} />
              ) : null} */}
            </Link>
          )}
        </>
      ) : (
        <Title
          as="h6"
          className={cn(
            "mb-2 truncate px-6 text-xs font-normal uppercase tracking-widest text-gray-100 2xl:px-8",
            index !== 0 && "mt-6 3xl:mt-7"
          )}
        >
          {item.name}
        </Title>
      )}
    </Fragment>
  );
}
