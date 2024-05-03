import HydrogenLayout from "@/layouts/layout";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <HydrogenLayout>{children}</HydrogenLayout>;
}

export default DashboardLayout;
