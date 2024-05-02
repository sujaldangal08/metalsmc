"use client";
import { useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import cn from "@/utils/class-names";

export default function HydrogenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openDrawer, setOpenDrawer] = useState(true);
  return (
    <main className="flex min-h-screen flex-grow">
      <Sidebar
        className="fixed hidden xl:block overflow-visible"
        setOpenDrawer={setOpenDrawer}
        openDrawer={openDrawer}
      />
      <div
        className={cn(
          "flex w-full flex-col transition-all delay-200 ease-in xl:ms-[270px] xl:w-[calc(100%-270px)]",
          openDrawer
            ? "2xl:ms-[300px] 2xl:w-[calc(100%-288px)]"
            : "2xl:ms-[120px] 2xl:w-[calc(100%-108px)]"
        )}
      >
        <Header />
        <div className="flex flex-grow flex-col px-4 pb-6 pt-2 md:px-5 lg:px-6 lg:pb-8 3xl:px-8 3xl:pt-4 4xl:px-10 4xl:pb-9">
          {children}
        </div>
      </div>
    </main>
  );
}
