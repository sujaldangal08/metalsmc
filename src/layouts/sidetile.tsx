import cn from "@/utils/class-names";
import IconProps from "@public/assets/Icons/icon.type";
import Link from "next/link";
import { Fragment, JSXElementConstructor } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import { Collapse, Title } from "rizzui";

export default function SideTile({
  item,
  index,
  isDropdownOpen,
  isActive,
  pathname,
  openDrawer,
}: {
  item: {
    name: string;
    href?: string;
    icon?: JSXElementConstructor<IconProps>;
    dropdownItems?: { name: string; href: string }[];
  };
  index: number;
  isDropdownOpen: boolean;
  isActive: boolean;
  pathname: string;
  openDrawer: boolean;
}) {
  const Icon: JSXElementConstructor<IconProps> | undefined = item?.icon;

  return (
    <Fragment key={item.name + "-" + index}>
      {item?.name && item?.href ? (
        <>
          {item?.dropdownItems ? (
            <Collapse
              defaultOpen={isDropdownOpen}
              header={({ open, toggle }) => (
                <div
                  onClick={toggle}
                  className={cn(
                    "transition-colors duration-200 ease-in group relative mx-3 flex cursor-pointer items-center justify-between rounded-md px-3 py-2 font-medium lg:my-1 2xl:mx-5 2xl:my-2",
                    isDropdownOpen
                      ? "text-green bg-white"
                      : "text-white hover:bg-green-dark"
                  )}
                >
                  <div className="flex items-center truncate gap-3">
                    {Icon && (
                      <Icon
                        w="22"
                        h="22"
                        className={cn(
                          isDropdownOpen
                            ? "stroke-green fill-green"
                            : "stroke-white fill-white"
                        )}
                      />
                    )}
                    {openDrawer && (
                      <span className="truncate text-sm font-medium">
                        {item.name}
                      </span>
                    )}
                  </div>

                  <PiCaretDownBold
                    strokeWidth={3}
                    className={cn(
                      "h-3.5 w-3.5 -rotate-90 transition-transform duration-200 rtl:rotate-90",
                      open && "rotate-0 rtl:rotate-0",
                      isDropdownOpen ? "text-green" : "text-white"
                    )}
                  />
                </div>
              )}
            >
              {item?.dropdownItems?.map((dropdownItem: any, index: number) => {
                const isChildActive =
                  pathname === (dropdownItem?.href as string);

                return (
                  <Link
                    href={dropdownItem?.href}
                    key={dropdownItem?.name + index}
                    className={cn(
                      "mx-3.5 mb-0.5 flex items-center justify-between rounded-md px-3.5 py-2 font-medium capitalize last-of-type:mb-1 lg:last-of-type:mb-2 2xl:mx-5",
                      isChildActive
                        ? "text-white bg-white"
                        : "text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
                    )}
                  >
                    <div className="flex items-center truncate">
                      <span
                        className={cn(
                          "me-[18px] ms-1 inline-flex h-1 w-1 rounded-full bg-current transition-all duration-200",
                          isChildActive
                            ? "bg-primary ring-[1px] ring-primary"
                            : "opacity-40"
                        )}
                      />
                      <span className="truncate">{dropdownItem?.name}</span>
                    </div>
                  </Link>
                );
              })}
            </Collapse>
          ) : (
            <Link
              href={item?.href}
              className={cn(
                "group transition-colors duration-200 relative mx-3 my-0.5 flex items-center justify-between rounded-md px-3 py-[10px] font-medium capitalize lg:my-1 2xl:mx-5 2xl:my-2",
                isActive
                  ? "text-green bg-white"
                  : "text-white hover:bg-green-dark"
              )}
            >
              <div className="flex items-center justify-center truncate gap-3">
                {Icon && (
                  <Icon
                    w="22"
                    h="22"
                    className={cn(
                      isActive
                        ? "stroke-green fill-green"
                        : "stroke-white fill-white"
                    )}
                  />
                )}
                <span
                  className={cn(
                    "truncate text-sm font-medium transition-all delay-200 ease-in",
                    openDrawer ? "w-full" : "w-0"
                  )}
                >
                  {item.name}
                </span>
              </div>
            </Link>
          )}
        </>
      ) : (
        <div className="w-full h-[1px] bg-gray-300 my-5 opacity-50"></div>
      )}
    </Fragment>
  );
}
