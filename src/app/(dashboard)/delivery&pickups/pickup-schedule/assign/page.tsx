"use client";

import NotFound from "@/app/not-found";
import CustomSelectBox from "@/components/input/select-box";
import Breadcrumb from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/file-upload/upload-zone";
import { Input } from "@/components/ui/input";
import { createPickupRoute } from "@/features/api/schedule-module/pickupRoute.api";
import {
  CreatePickupRouteBody,
  CreatePickupRouteResponse,
} from "@/features/api/schedule-module/pickupRoute.type";
import { getAllDrivers, getAllVehicles } from "@/features/api/user";
import { Route } from "@/lib/enums/routes.enums";
import useMutation from "@/lib/hooks/useMutation";
import { formatErrorMessage } from "@/utils/format-errors";
import {
  CreatePickupRouteSchema,
  createPickupRouteSchema,
} from "@/utils/schema/delivery-pickups/asignPickupSchedule.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PiPlus } from "react-icons/pi";
import useSWR from "swr";
import RecentAssigned from "./recent-assigned";
import PickupRouteForm from "./route-form";

export default function PickupAssignPage() {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<CreatePickupRouteSchema>({
    resolver: zodResolver(createPickupRouteSchema),
  });

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

  const { mutate: createPickupMn, isLoading } = useMutation({
    mutateFn: (body: CreatePickupRouteBody) => createPickupRoute(body),
  });

  const [routes, setRoutes] = useState<CreatePickupRouteResponse["data"][]>([]);

  const onDelete = (indx: number) => {
    if (routes.length > 1) {
      setRoutes((prev) => prev.filter((_, i) => i !== indx));
    }
  };

  const onSubmit: SubmitHandler<CreatePickupRouteSchema> = async (data) => {
    try {
      const res = await createPickupMn({
        ...data,
        status: "active",
        description: "hello",
      });

      setRoutes([...routes, res.data.data]);
      toast.success(
        `${data.name} assigned successfully to driver: ${data.driver_id}`
      );

    } catch (err: any) {
      toast.error(formatErrorMessage(err));
    }
  };

  if (fetchingListOfDrivers || fetchingListOfVehicles)
    return <LoadingSpinner />;
  if (driversError || vehiclesError) return <NotFound />;

  return (
    <div className="relative flex flex-col py-4 gap-4 w-full">
      <Breadcrumb>
        <Breadcrumb.Item href={Route.PickupSchedule}>
          Pickup Schedule
        </Breadcrumb.Item>
        <Breadcrumb.Item href={Route.AssignPickupSchedule}>
          Assign Schedule
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="w-full flex items-start mt-4">
        <div className="lg:w-4/5  lg:pr-5 pr-0 flex flex-col gap-6 justify-start">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full gap-4 h-[40px]"
          >
            <div className="flex gap-4 w-full">
              <div className="grid grid-cols-4 gap-4 ">
                <Input
                  placeholder="Enter route name"
                  name="name"
                  register={register}
                  error={errors.name}
                  hideErrorMessage
                />

                <Input
                  type="date"
                  label=""
                  name="start_date"
                  register={register}
                  error={errors.start_date}
                  hideErrorMessage
                />

                <Controller
                  name="driver_id"
                  control={control}
                  render={({
                    field: { onChange, value },
                    formState: { errors },
                  }) => (
                    <CustomSelectBox
                      items={listOfDrivers?.data!}
                      placeholder="Choose driver"
                      value={
                        listOfDrivers?.data.filter(
                          (data) => data.id === value
                        )[0]
                      }
                      setValue={(value) => onChange(value?.id)}
                      getDisplayItem={(item) => item?.name!}
                      error={errors.driver_id}
                    />
                  )}
                />

                <Controller
                  name="asset_id"
                  control={control}
                  render={({
                    field: { onChange, value },
                    formState: { errors },
                  }) => (
                    <CustomSelectBox
                      items={listOfVehicles?.data!}
                      placeholder="Choose asset"
                      value={
                        listOfVehicles?.data.filter(
                          (data) => data.id === value
                        )[0]
                      }
                      setValue={(value) => onChange(value?.id)}
                      getDisplayItem={(item) => item?.rego_number!}
                      error={errors.asset_id}
                    />
                  )}
                />
              </div>
              <Button
                type="submit"
                isLoading={isLoading}
                color="primary"
                className="font-normal w-[180px] px-2 "
                spinnerSize="sm"
              >
                <PiPlus className="text-rg" />
                <span className="text-sm pl-2">Add Route</span>
              </Button>
            </div>
          </form>

          {routes?.map((route, indx) => (
            <PickupRouteForm
              routeDetails={route}
              indx={indx}
              onDelete={onDelete}
              key={"Route Form - " + indx}
              isDeleteDisable={routes.length <= 1}
            />
          ))}
        </div>
        <RecentAssigned />
      </div>
    </div>
  );
}
