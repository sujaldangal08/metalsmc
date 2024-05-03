"use client";

import MetricCard from "@/components/cards/metric-card";
import CircleProgressBar from "@/components/charts/circle-progressbar";
import TrendingDownIcon from "@/components/icons/trending-down";
import TrendingUpIcon from "@/components/icons/trending-up";
import { Text } from "@/components/ui/text";
import cn from "@/utils/class-names";

type FileStatsType = {
  className?: string;
};

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
    title: "Pending Pickups",
    metric: "1260",
    fill: "#37A05F",
    percentage: 12,
    increased: true,
    decreased: false,
    value: "+32.40",
  },
  {
    id: 3,
    title: "Completed Pickups",
    metric: "1260",
    fill: "#37A05F",
    percentage: 12,
    increased: true,
    decreased: false,
    value: "+32.40",
  },
  {
    id: 4,
    title: "Todays Pickups",
    metric: "1260",
    fill: "#37A05F",
    percentage: 12,
    increased: true,
    decreased: false,
    value: "+32.40",
  },
];

export function FileStatGrid({ className }: { className?: string }) {
  return (
    <>
      {filesStatData.map((stat: any) => {
        return (
          <MetricCard
            key={stat.id}
            title={stat.title}
            metric={stat.metric}
            metricClassName="3xl:text-[22px]"
            className={cn("w-full max-w-full justify-between", className)}
            chart={
              <CircleProgressBar
                percentage={stat.percentage}
                size={80}
                stroke={stat.fill + "33"}
                strokeWidth={7}
                progressColor={stat.fill}
                useParentResponsive={true}
                label={
                  <Text
                    as="span"
                    className="font-lexend text-base font-medium text-gray-700"
                  >
                    {stat.percentage}%
                  </Text>
                }
                strokeClassName="dark:stroke-gray-300"
              />
            }
          >
            <Text className="mt-3 flex items-center leading-none text-gray-500">
              <Text
                as="span"
                className={cn(
                  "me-2 inline-flex items-center font-medium",
                  stat.increased ? "text-green" : "text-red"
                )}
              >
                {stat.increased ? (
                  <TrendingUpIcon className="me-1 h-4 w-4" />
                ) : (
                  <TrendingDownIcon className="me-1 h-4 w-4" />
                )}
                {stat.value}%
              </Text>
              last month
            </Text>
          </MetricCard>
        );
      })}
    </>
  );
}
