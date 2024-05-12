"use client";

import NotFound from "@/app/not-found";
import DateFiled from "@/components/controlled-table/date-field";
import StatusField from "@/components/controlled-table/status-field";
import CustomSelectBox from "@/components/input/select-box";
import { Badge } from "@/components/ui/badge";
import { LoadingSpinner } from "@/components/ui/file-upload/upload-zone";
import { Form } from "@/components/ui/form";
import { Text } from "@/components/ui/text";
import { getAllDrivers, getAllVehicles } from "@/features/api/user";
import { getDateRangeStateValues } from "@/utils/get-formatted-date";
import {
  PickupScheduleFilterSchema,
  pickupScheduleFilterSchema,
} from "@/utils/schema/delivery-pickups/schedule-filter.schema";
import { Dispatch, SetStateAction } from "react";
import { Controller, SubmitHandler } from "react-hook-form";
import useSWR from "swr";

type StatusOptions = { value: string; label: string };

const statusOptions: StatusOptions[] = [
  {
    value: "completed",
    label: "Completed",
  },
  {
    value: "pending",
    label: "Pending",
  },
  {
    value: "unloading",
    label: "Unloading",
  },
];

type PickupScheduleFilterProps = {
  updateFilter: Dispatch<SetStateAction<PickupScheduleFilterSchema>>;
};

export default function PickupScheduleFilter({
  updateFilter,
}: PickupScheduleFilterProps) {
  const {
    data: listOfDrivers,
    isLoading: fetchingListOfDrivers,
    error: driversError,
  } = useSWR("drivers-list", getAllDrivers);

  const {
    data: listOfVehicles,
    isLoading: fetchingListOfVehicles,
    error: vehiclesError,
  } = useSWR("vehicles-list", getAllVehicles);

  const onSubmit: SubmitHandler<PickupScheduleFilterSchema> = (data) => {
    updateFilter(data);
  };

  if (fetchingListOfDrivers || fetchingListOfVehicles)
    return <LoadingSpinner />;
  if (driversError || vehiclesError) return <NotFound />;

  return (
    <Form<PickupScheduleFilterSchema>
      validationSchema={pickupScheduleFilterSchema}
      onSubmit={onSubmit}
    >
      {({ control, reset }) => (
        <>
          <Controller
            name="driver_id"
            control={control}
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <CustomSelectBox
                items={listOfDrivers?.data!}
                placeholder="Choose driver"
                value={
                  listOfDrivers?.data.filter((data) => data.id === value)[0]
                }
                setValue={(value) => onChange(value?.id)}
                getDisplayItem={(item) => item?.name!}
              />
            )}
          />

          <DateFiled
            selected={getDateRangeStateValues("2024-05-12")}
            startDate={getDateRangeStateValues("2024-05-12")}
            endDate={getDateRangeStateValues("2024-05-12")}
            onChange={(date: any) => {
              updateFilter({});
            }}
            placeholderText="Select created date"
            inputProps={{
              label: "Created Date",
              labelClassName: "font-medium text-gray-700",
            }}
          />

          <Controller
            name="asset_id"
            control={control}
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <CustomSelectBox
                items={listOfVehicles?.data!}
                placeholder="Choose asset"
                value={
                  listOfVehicles?.data.filter((data) => data.id === value)[0]
                }
                setValue={(value) => onChange(value?.id)}
                getDisplayItem={(item) => item?.rego_number!}
              />
            )}
          />

          <Controller
            name="status"
            control={control}
            render={({ field: { value, onChange } }) => (
              <StatusField
                label="Status"
                options={statusOptions}
                value={value}
                onChange={onChange}
                getOptionValue={(option) => option.value}
                getOptionDisplayValue={(option: StatusOptions) =>
                  renderOptionDisplayValue(option.value as string)
                }
                displayValue={(selected: string) =>
                  renderOptionDisplayValue(selected)
                }
              />
            )}
          />
          {/* {isFiltered ? (
            <Button
              size="sm"
              onClick={() => {
                handleReset();
              }}
              className="h-8 bg-gray-200/70"
              variant="flat"
            >
              <PiTrashDuotone className="me-1.5 h-[17px] w-[17px]" /> Clear
            </Button>
          ) : null} */}
        </>
      )}
    </Form>
  );
}

function renderOptionDisplayValue(value: string) {
  switch (value.toLowerCase()) {
    case "pending":
      return (
        <div className="flex items-center">
          <Badge color="warning" renderAsDot />
          <Text className="ms-2 font-medium capitalize text-orange-dark">
            {value}
          </Text>
        </div>
      );
    case "completed":
      return (
        <div className="flex items-center">
          <Badge color="success" renderAsDot />
          <Text className="ms-2 font-medium capitalize text-green-dark">
            {value}
          </Text>
        </div>
      );

    default:
      return (
        <div className="flex items-center">
          <Badge renderAsDot className="bg-gray-400" />
          <Text className="ms-2 font-medium capitalize text-gray-600">
            {value}
          </Text>
        </div>
      );
  }
}
