"use client";

import ActivityReport from "@/app/shared/file/dashboard/activity-report";
import FileListTable from "@/app/shared/file/dashboard/file-list/table";
import FileStats from "@/app/shared/file/dashboard/file-stats";
import Members from "@/app/shared/file/dashboard/members";
import QuickAccess from "@/app/shared/file/dashboard/quick-access";
import RecentActivities from "@/app/shared/file/dashboard/recent-activities";
import RecentFiles from "@/app/shared/file/dashboard/recent-files";
import StorageReport from "@/app/shared/file/dashboard/storage-report";
import StorageSummary from "@/app/shared/file/dashboard/storage-summary";
import UpgradeStorage from "@/app/shared/file/dashboard/upgrade-storage";
import { allFilesData } from "@/data/all-files";

const filesStatData = [
  {
    id: 1,
    title: "Total Pickups",
    metric: "1260",
    fill: "#37A05F",
    percentage: 12,
    increased: true,
    decreased: false,
    value: "+32.40",
  },
  {
    id: 2,
    title: "Total Deliveries",
    metric: "1260",
    fill: "#0A68EF",
    percentage: 12,
    increased: true,
    decreased: false,
    value: "+32.40",
  },
  {
    id: 3,
    title: "Total Customers",
    metric: "1260",
    fill: "#FF6464",
    percentage: 12,
    increased: true,
    decreased: false,
    value: "+32.40",
  },
  {
    id: 4,
    title: "Total Drivers",
    metric: "1260",
    fill: "#FFAB00",
    percentage: 12,
    increased: true,
    decreased: false,
    value: "+32.40",
  },
];

function FileDashboard() {
  return (
    <div className="mt-2 @container">
      <FileStats data={filesStatData} className="mb-5 2xl:mb-8" />
      <div className="mb-6 grid grid-cols-1 gap-6 @4xl:grid-cols-12 2xl:mb-8 2xl:gap-8">
        <StorageReport className="@container @4xl:col-span-8 @[96.937rem]:col-span-9" />
        <StorageSummary className="@4xl:col-span-4 @[96.937rem]:col-span-3" />
      </div>

      <div className="grid grid-cols-1 gap-6 @container lg:grid-cols-12 2xl:gap-8 ">
        <div className="col-span-full flex flex-col gap-6 @5xl:col-span-8 2xl:gap-8 3xl:col-span-9">
          <QuickAccess />
          <RecentFiles />
          <ActivityReport />
          <FileListTable data={allFilesData} />
        </div>

        <div className="col-span-full flex flex-col gap-6 @5xl:col-span-4 2xl:gap-8 3xl:col-span-3">
          <RecentActivities />
          <Members />
          <UpgradeStorage />
        </div>
      </div>
    </div>
  );
}

export default FileDashboard;
