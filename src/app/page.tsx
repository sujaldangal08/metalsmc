"use client";

import FileDashboard from "@/app/shared/file/dashboard";
import HydrogenLayout from "@/layouts/layout";

function FileDashboardPage() {
  return (
    <HydrogenLayout>
      <FileDashboard />
    </HydrogenLayout>
  );
}

export default withAuth(FileDashboardPage);
