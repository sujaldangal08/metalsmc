"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "@/utils/class-names";
import SimpleBar from "@/components/ui/simplebar";
import { menuItems } from "./menu-items";
import LogoWhite from "@public/assets/logo_white.svg";
import Image from "next/image";
import SideTile from "./sidetile";
import { useState } from "react";
import { ForwardIcon, BackArrowIcon } from "@public/assets/Icons";

export default function Sidebar({ className }: { className?: string }) {
  const [openDrawer, setOpenDrawer] = useState(true);

  const pathname = usePathname();

  if (openDrawer) {
    return (
      <aside
        className={cn(
          "fixed bottom-0 start-0 z-50 h-full w-[270px] border-e-2 border-gray-100 bg-green 2xl:w-[300px] dark:bg-gray-100/50",
          className
        )}
      >
        {/* Header for Sidebar */}
        <div className="sticky top-0 z-40  px-4 pb-5 pt-5 2xl:pt-3">
          <div className="text-gray-800 w-full flex flex-row justify-between items-center">
            <Link
              href={"/"}
              aria-label="Site Logo"
              className="flex flex-row items-center gap-3"
            >
              <Image src={LogoWhite} alt="Logo White" width={80} height={80} />
              <h2 className="text-lg font-semibold text-white">Metal</h2>
            </Link>
            <div
              className="p-3 bg-green-dark rounded-full cursor-pointer"
              onClick={() => {
                setOpenDrawer(false);
              }}
            >
              <BackArrowIcon w="15" h="15" />
            </div>
          </div>
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
    );
  } else {
    return (
      <aside
        className={cn(
          "fixed bottom-0 start-0 z-50 h-full w-[270px] border-e-2 border-gray-100 bg-green 2xl:w-[100px] dark:bg-gray-100/50",
          className
        )}
      >
        {/* Header for Sidebar */}
        <div className="sticky top-0 z-40  px-4 pb-5 pt-5 2xl:pt-3">
          <div className="text-gray-800 w-full flex flex-row justify-between items-center">
            <Image src={LogoWhite} alt="Logo White" width={80} height={80} />
            <div
              className="p-3 bg-green-dark rounded-full cursor-pointer"
              onClick={() => {
                setOpenDrawer(true);
              }}
            >
              <ForwardIcon w="15" h="15" />
            </div>
          </div>
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
    );
  }
}
