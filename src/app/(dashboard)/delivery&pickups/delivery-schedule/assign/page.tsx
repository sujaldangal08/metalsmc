"use client";

import Breadcrumb from "@/components/ui/breadcrumb";
import { Tab } from "rizzui";
import Domestic from "./domestic";
import International from "./international";

export default function AssignPage() {
  return (
    <div className="flex flex-col gap-5">
      <Breadcrumb className="text-[#434343]">
        <Breadcrumb.Item href="/delivery-schedule">
          Delivery Schedule
        </Breadcrumb.Item>
        <Breadcrumb.Item>Assign</Breadcrumb.Item>
      </Breadcrumb>
      <Tab>
        <Tab.List>
          <Tab.ListItem>Domestic</Tab.ListItem>
          <Tab.ListItem>International</Tab.ListItem>
        </Tab.List>
        <Tab.Panels className="p-0 m-0">
          <Tab.Panel>
            <Domestic />
          </Tab.Panel>
          <Tab.Panel>
            <International />
          </Tab.Panel>
        </Tab.Panels>
      </Tab>
    </div>
  );
}
