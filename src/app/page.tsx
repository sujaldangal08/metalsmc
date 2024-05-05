"use client";

import FileDashboard from "@/app/shared/file/dashboard";
import HydrogenLayout from "@/layouts/layout";
import withAuth from "@/lib/hoc/withAuth";

function FileDashboardPage() {
  return (
    <HydrogenLayout>
      <FileDashboard />
    </HydrogenLayout>
  );
}

export default withAuth(FileDashboardPage);
