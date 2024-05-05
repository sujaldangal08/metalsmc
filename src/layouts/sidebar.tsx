"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "@/utils/class-names";
import SimpleBar from "@/components/ui/simplebar";
import { menuItems } from "./menu-items";
import LogoWhite from "@public/assets/logo_white.svg";
import Image from "next/image";
import SideTile from "./sidetile";
import { BackArrowIcon } from "@public/assets/Icons";

interface Props {
  className?: string;
  setOpenDrawer: any;
  openDrawer: boolean;
}

export default function Sidebar({
  className,
  setOpenDrawer,
  openDrawer,
}: Props) {
  const pathname = usePathname();

  return (
    <>
      <aside
        className={cn(
          "fixed bottom-0 start-0 z-50 h-full w-[270px] border-e-2 border-gray-100 bg-green transition-all delay-200 ease-in",
          className,
          openDrawer ? "2xl:w-[300px]" : "2xl:w-[120px]"
        )}
      >
        {/* Header for Sidebar */}
        <div className="sticky  top-0 px-4 pb-5 pt-5 2xl:pt-3">
          <Link
            href={"/"}
            aria-label="Site Logo"
            className="flex flex-row items-center gap-3"
          >
            <Image
              src={LogoWhite}
              alt="Logo White"
              width={80}
              height={80}
              className="transition-all delay-200 ease-in"
            />
            <h2
              className={cn(
                "text-lg font-semibold text-white transition-all delay-200 ease-in overflow-hidden",
                openDrawer ? "w-full" : "w-0"
              )}
            >
              Metal
            </h2>
          </Link>
        </div>
        {/* Content for Sidebar */}
        <SimpleBar className="h-[calc(100%-80px)]">
          <div className="pb-3">
            {menuItems.map((item, index) => {
              const isActive = pathname === (item?.href as string);
              const pathnameExistInDropdowns: any = item?.dropdownItems?.filter(
                (dropdownItem) => dropdownItem.href === pathname
              );
              const isDropdownOpen = Boolean(pathnameExistInDropdowns?.length);

              return (
                <SideTile
                  key={item.name}
                  openDrawer={openDrawer}
                  item={item}
                  index={index}
                  isDropdownOpen={isDropdownOpen}
                  isActive={isActive}
                  pathname={pathnameExistInDropdowns}
                />
              );
            })}
          </div>
        </SimpleBar>
      </aside>
      <div
        className={cn(
          "transition-all delay-200 ease-in p-3 bg-green-dark rounded-full cursor-pointer z-[999] fixed top-8 w-10",
          openDrawer ? "start-60" : "start-[95px]"
        )}
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
      >
        <div
          className={cn(
            "transition-all delay-200 ease-in",
            openDrawer ? "rotate-0" : "rotate-180"
          )}
        >
          <BackArrowIcon w="15" h="15" />
        </div>
      </div>
    </>
  );
}
