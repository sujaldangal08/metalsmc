"use client";

import CustomSelectBox from "@/components/input/select-box";
import Breadcrumb from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createPickupRoute } from "@/features/api/schedule-module/pickupRoute.api";
import { CreatePickupRouteBody } from "@/features/api/schedule-module/pickupRoute.type";
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
import RecentAssigned from "./recent-assigned";
import RouteForm from "./route-form";

const data = [
  {
    avatar:
      "https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-6299533-5187865.png",
    name: "Joe Doe",
    truckNumber: "123455A5v",
  },
  {
    avatar:
      "https://cdn3d.iconscout.com/3d/premium/thumb/woman-avatar-6299541-5187873.png",
    name: "Emily Johnson",
    truckNumber: "6789ABC",
  },
  {
    avatar:
      "https://getillustrations.b-cdn.net//photos/pack/3d-avatar-male_lg.png",
    name: "John Smith",
    truckNumber: "XYZ123",
  },
  {
    avatar:
      "https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-6299533-5187865.png",
    name: "Joe Doe",
    truckNumber: "123455A5v",
  },
  {
    avatar:
      "https://cdn3d.iconscout.com/3d/premium/thumb/woman-avatar-6299541-5187873.png",
    name: "Emily Johnson",
    truckNumber: "6789ABC",
  },
  {
    avatar:
      "https://getillustrations.b-cdn.net//photos/pack/3d-avatar-male_lg.png",
    name: "John Smith",
    truckNumber: "XYZ123",
  },
  {
    avatar:
      "https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-6299533-5187865.png",
    name: "Joe Doe",
    truckNumber: "123455A5v",
  },
  {
    avatar:
      "https://cdn3d.iconscout.com/3d/premium/thumb/woman-avatar-6299541-5187873.png",
    name: "Emily Johnson",
    truckNumber: "6789ABC",
  },
  {
    avatar:
      "https://getillustrations.b-cdn.net//photos/pack/3d-avatar-male_lg.png",
    name: "John Smith",
    truckNumber: "XYZ123",
  },
];

export default function PickupAssignPage() {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<CreatePickupRouteSchema>({
    resolver: zodResolver(createPickupRouteSchema),
  });

  const { mutate: createPickupMn, isLoading } =
    useMutation<CreatePickupRouteBody>({
      mutateFn: (body) => createPickupRoute(body),
    });

  const [routes, setRoutes] = useState<CreatePickupRouteBody[]>([]);

  const onDelete = (indx: number) => {
    if (routes.length > 1) {
      setRoutes((prev) => prev.filter((_, i) => i !== indx));
    }
  };

  const onSubmit: SubmitHandler<CreatePickupRouteSchema> = async (data) => {
    try {
      // const res = await createPickupMn(data);
      console.log(data);
    } catch (err: any) {
      toast.error(formatErrorMessage(err));
    }
  };

  return (
    <div className="flex flex-col py-4 gap-4 w-full">
      <Breadcrumb>
        <Breadcrumb.Item href={Route.PickupSchedule}>
          Pickup Schedule
        </Breadcrumb.Item>
        <Breadcrumb.Item href={Route.AssignPickupSchedule}>
          Assign Schedule
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="w-full flex mt-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:w-4/5 w-full gap-4 lg:pr-5 pr-0"
        >
          <div className="flex gap-4 w-full">
            <div className="grid grid-cols-4 gap-4 items-stretch">
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
                render={({ field: { onChange, value } }) => (
                  <CustomSelectBox
                    items={data}
                    placeholder="Choose driver"
                    value={value}
                    setValue={onChange}
                    getItemString={(item) => item.name}
                  />
                )}
              />

              <Controller
                name="asset_id"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <CustomSelectBox
                    items={data}
                    placeholder="Choose asset"
                    value={value}
                    setValue={onChange}
                    getItemString={(item) => item.name}
                  />
                )}
              />
            </div>
            <Button
              type="submit"
              isLoading={isLoading}
              color="primary"
              className="font-normal w-[180px] px-2 "
            >
              <PiPlus className="text-rg" />
              <span className="text-sm pl-2">Add Route</span>
            </Button>
          </div>

          {routes?.map((_, indx) => (
            <RouteForm
              indx={indx}
              onDelete={onDelete}
              key={"Route Form - " + indx}
              isDeleteDisable={routes.length <= 1}
            />
          ))}
        </form>
        <RecentAssigned />
      </div>
    </div>
  );
}
