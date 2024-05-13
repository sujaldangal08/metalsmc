import CustomSelectBox from "@/components/input/select-box";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/file-upload/upload-zone";
import { Input } from "@/components/ui/input";
import { createPickupSchedule } from "@/features/api/schedule-module/pickupSchedule.api";
import { CreatePickupScheduleBody } from "@/features/api/schedule-module/pickupSchedule.type";
import { getAllCustomers } from "@/features/api/user";
import useMutation from "@/lib/hooks/useMutation";
import { formatErrorMessage } from "@/utils/format-errors";
import {
  CreatePickupScheduleSchema,
  createPickupScheduleSchema,
} from "@/utils/schema/delivery-pickups/asignPickupSchedule.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import toast from "react-hot-toast";
import { Textarea } from "rizzui";
import useSWR from "swr";
import MaterialForm from "./material-form";
import MetadataTable from "./metadata-table";

export type ScheduleFormData = Partial<CreatePickupScheduleSchema>;

interface ScheduleFormProps {
  onDelete: (id: string) => void;
  index: string;
  formData: ScheduleFormData;
  onAddNewSchedule: () => void;
}

const ScheduleForm: FC<ScheduleFormProps> = ({
  onDelete,
  onAddNewSchedule,
  index,
  formData,
}) => {
  const methods = useForm<CreatePickupScheduleSchema>({
    resolver: zodResolver(createPickupScheduleSchema),
    defaultValues: formData,
  });

  const { mutate: createPickupScheduleMn, isLoading: creatingPickupSchedule } =
    useMutation({
      mutateFn: (body: CreatePickupScheduleBody) => createPickupSchedule(body),
    });

  const { data: listOfCustomers, isLoading } = useSWR(
    "customers-list",
    getAllCustomers
  );
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    reset,
  } = methods;

  const submitForm: SubmitHandler<CreatePickupScheduleSchema> = async (
    data
  ) => {
    console.log("Schedule form", data);

    const requestBody: CreatePickupScheduleBody = {
      ...data,
      materials: [...data.materials.map((material) => material.name)],
      rate: [...data.materials.map((material) => material.rate)],
      amount: [...data.materials.map((material) => material.amount)],
      weighing_type: [
        ...data.materials.map((material) => material.weighing_type),
      ],
      tare_weight: data.tare_weight.split(",").map((s) => parseInt(s)),
    };

    try {
      const res = await createPickupScheduleMn(requestBody);
      console.log("Pickup schedule response:", res);

      toast.success("Created Pickup Schedule");
      onAddNewSchedule();
    } catch (err: any) {
      toast.error(formatErrorMessage(err));
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex w-full gap-3 flex-col"
      >
        <h2 className="text-md font-medium">{`Customer's Details`}</h2>

        <div className="flex gap-4">
          <Controller
            name="customer_id"
            control={control}
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <CustomSelectBox
                items={listOfCustomers?.data!}
                placeholder="Choose customer"
                value={
                  listOfCustomers?.data.filter((data) => data.id === value)[0]
                }
                setValue={(value) => onChange(value?.id)}
                getDisplayItem={(item) => item?.name!}
                error={errors.customer_id}
              />
            )}
          />
          <Input
            placeholder="Pickup Location"
            register={register}
            name="location"
            className="w-52"
          />
        </div>
        <div className="w-full h-[1px] bg-gray-300 my-2" />

        {/* Material details ==================================== */}
        <MaterialForm />

        {/* Number of bins and tare weight select box ======================= */}
        <div className="grid grid-cols-4 gap-3 pt-4 pb-6 border-b border-gray-300">
          <Controller
            name="n_bins"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                type="number"
                label="Number of bins"
                placeholder="Number of bins"
                onChange={(e) => onChange(parseInt(e.target.value))}
                value={value}
                error={errors.n_bins}
              />
            )}
          />

          <Input
            label="Tare weight"
            name="tare_weight"
            placeholder="30, 40, 50"
            register={register}
            error={errors.tare_weight}
          />
        </div>

        {/* meta table fields ================================================ */}
        <MetadataTable />

        {/* Notes ============================================================= */}
        <Controller
          name="notes"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Textarea
              maxLength={80}
              textareaClassName="resize-none h-[100px] border border-gray-300"
              placeholder="Note"
              onChange={onChange}
              value={value}
            />
          )}
        />

        <div className="flex w-full justify-end gap-5 mt-4">
          <Button
            onClick={() => reset(formData)}
            variant="solid"
            color="secondary"
            type="button"
          >
            Reset
          </Button>

          <Button
            onClick={() => onDelete(index)}
            variant="solid"
            color="danger"
            type="button"
          >
            Delete Schedule
          </Button>

          <Button
            className="w-52"
            variant="solid"
            color="primary"
            type="submit"
            isLoading={creatingPickupSchedule}
          >
            Assign Schedule
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ScheduleForm;
