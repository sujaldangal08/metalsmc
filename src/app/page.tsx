import FileDashboard from "@/app/shared/file/dashboard";
import { metaObject } from "@/config/site.config";
import HydrogenLayout from "@/layouts/layout";

export const metadata = {
  ...metaObject(),
};

export default function FileDashboardPage() {
  return (
    <HydrogenLayout>
      <FileDashboard />
    </HydrogenLayout>
  );
}
