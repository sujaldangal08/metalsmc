"use client";

import HydrogenLayout from "@/layouts/layout";
import withAuth from "@/lib/hoc/withAuth";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <HydrogenLayout>{children}</HydrogenLayout>;
}

export default withAuth(DashboardLayout);
