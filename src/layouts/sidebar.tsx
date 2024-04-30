"use client";

import Link from "next/link";
import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { Title } from "@/components/ui/text";
import { Collapse } from "@/components/ui/collapse";
import cn from "@/utils/class-names";
import { PiCaretDownBold } from "react-icons/pi";
import SimpleBar from "@/components/ui/simplebar";
import { menuItems } from "./menu-items";
import StatusBadge from "@/components/ui/get-status-badge";
import LogoWhite from "@public/assets/logo_white.svg";
import Image from "next/image";
import BackArrowIcon from "@public/assets/Icons/BackArrowIcon";
import SideTile from "./sidetile";

export default function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();
  return (
    <aside
      className={cn(
        "fixed bottom-0 start-0 z-50 h-full w-[270px] border-e-2 border-gray-100 bg-green 2xl:w-72 dark:bg-gray-100/50",
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
          <div className="p-3 bg-green-dark rounded-full cursor-pointer">
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
}
