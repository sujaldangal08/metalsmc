"use client";

import SimpleBar from "@/components/ui/simplebar";
import cn from "@/utils/class-names";
import Link from "next/link";
import { usePathname } from "next/navigation";

import LogoWhite from "@public/assets/logo_white.svg";
import Image from "next/image";
import { menuItems } from "./menu-items";
import SideTile from "./sidetile";

export default function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();
  return (
    <aside
      className={cn(
        "fixed bottom-0 start-0 z-50 h-full w-[270px] border-e-2 border-gray-100 bg-primary 2xl:w-[300px] ",
        className
      )}
    >
      <div className="sticky top-0 z-40 pl-4 pt-5 2xl:pl-4 2xl:pt-2 ">
        <Link
          href={"/"}
          aria-label="Site Logo"
          className="flex flex-row items-center gap-3"
        >
          <Image
            src={LogoWhite}
            alt="Logo White"
            width={70}
            height={70}
            className="transition-all delay-200 ease-in"
          />
          <h2
            className={cn(
              "text-lg font-semibold text-white transition-all delay-200 ease-in overflow-hidden"
            )}
          >
            Metal
          </h2>
        </Link>
      </div>

      <SimpleBar className="h-[calc(100%-80px)]">
        <div className="mt-4 pb-3 3xl:mt-6">
          {menuItems.map((item, index) => {
            const isActive = pathname === (item?.href as string);
            const pathnameExistInDropdowns: any = item?.dropdownItems?.filter(
              (dropdownItem) => dropdownItem.href === pathname
            );
            const isDropdownOpen = Boolean(pathnameExistInDropdowns?.length);

            return (
              <SideTile
                key={item.name}
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
