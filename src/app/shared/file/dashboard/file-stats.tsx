"use client";

import cn from "@/utils/class-names";
import { Button } from "rizzui";
import { Text } from "@/components/ui/text";
import { useScrollableSlider } from "@/hooks/use-scrollable-slider";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import MetricCard from "@/components/cards/metric-card";
import CircleProgressBar from "@/components/charts/circle-progressbar";
import TrendingDownIcon from "@/components/icons/trending-down";
import { GrowthIcon } from "@public/assets/Icons";

type FileStatsData = {
  id: number;
  title: string;
  metric: string;
  fill: string;
  percentage: number;
  increased: boolean;
  decreased: boolean;
  value: string;
};

type FileStatsType = {
  className?: string;
  data: FileStatsData[];
};

export function FileStatGrid({ className, data }: FileStatsType) {
  return (
    <>
      {data.map((stat: any) => {
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
                size={100}
                stroke={stat.fill + "33"}
                strokeWidth={10}
                progressColor={stat.fill}
                useParentResponsive={true}
                label={
                  <Text
                    as="span"
                    className="text-lg font-medium text-gray-dark"
                  >
                    {stat.percentage}%
                  </Text>
                }
                strokeClassName="dark:stroke-gray-300"
              />
            }
          >
            <div className="mt-3 flex items-center leading-none text-gray-500">
              {stat.increased ? (
                <GrowthIcon />
              ) : (
                <TrendingDownIcon className="me-1 h-4 w-4" />
              )}
              <Text
                as="span"
                className={cn(
                  "me-2 inline-flex items-center font-medium mt-1",
                  stat.increased ? "text-green" : "text-red"
                )}
              >
                {stat.value}%
              </Text>
              <Text className="mt-1">last month</Text>
            </div>
          </MetricCard>
        );
      })}
    </>
  );
}

export default function FileStats({ className, data }: FileStatsType) {
  const {
    sliderEl,
    sliderPrevBtn,
    sliderNextBtn,
    scrollToTheRight,
    scrollToTheLeft,
  } = useScrollableSlider();

  return (
    <div
      className={cn(
        "relative flex w-auto items-center overflow-hidden",
        className
      )}
    >
      <Button
        title="Prev"
        variant="text"
        ref={sliderPrevBtn}
        onClick={() => scrollToTheLeft()}
        className="!absolute -left-1 top-0 z-10 !h-full w-20 !justify-start rounded-none bg-gradient-to-r from-gray-0 via-gray-0/70 to-transparent px-0 ps-1 text-gray-500 hover:text-black 3xl:hidden"
      >
        <PiCaretLeftBold className="h-5 w-5" />
      </Button>
      <div className="w-full overflow-hidden">
        <div
          ref={sliderEl}
          className="custom-scrollbar-x grid grid-flow-col gap-5 scroll-smooth 2xl:gap-6 3xl:gap-8"
        >
          <FileStatGrid className="min-w-[292px]" data={data} />
        </div>
      </div>
      <Button
        title="Next"
        variant="text"
        ref={sliderNextBtn}
        onClick={() => scrollToTheRight()}
        className="!absolute -right-0 top-0 z-10 !h-full w-20 !justify-end rounded-none bg-gradient-to-l from-gray-0 via-gray-0/70 to-transparent px-0 text-gray-500 hover:text-black 3xl:hidden"
      >
        <PiCaretRightBold className="h-5 w-5" />
      </Button>
    </div>
  );
}
