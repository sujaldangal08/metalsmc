import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { CreatePickupScheduleSchema } from "@/utils/schema/delivery-pickups/asignPickupSchedule.schema";
import { CloseIcon } from "@public/assets/Icons";
import { ChangeEvent, useEffect } from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { PiPlus } from "react-icons/pi";

function MaterialForm() {
  const {
    control,
    register,
    setValue,
    formState: { errors },
  } = useFormContext<CreatePickupScheduleSchema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "materials",
  });

  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-md font-medium">Material's Details</h2>
        <div className="flex gap-6">
          <Button
            onClick={() =>
              append({ name: "", amount: 0, rate: 0, weighing_type: "" })
            }
            variant="outline"
            className="w-[200px]"
          >
            <span className="bg-primary py-1 px-1 mr-3 text-white rounded-md text-md">
              <PiPlus />
            </span>
            <span className="text-sm font-medium text-black">Add Material</span>
          </Button>
          <Select
            label="Weight-type"
            options={[
              { value: "tons", label: "Tons" },
              { value: "kg", label: "Kg" },
            ]}
            className={"w-24"}
          />
        </div>
      </div>

      {/* Materials list =================================== */}
      <div className="flex flex-col gap-2">
        {fields.map((item, index) => (
          <div key={item.id} className="flex gap-4 items-center">
            <div className="grid grid-cols-4 gap-3 items-center">
              <Input
                name={`materials.${index}.name`}
                placeholder="Material name"
                type="text"
                register={register}
                error={errors?.materials?.[index]?.name}
                hideErrorMessage
              />

              <Controller
                name={`materials.${index}.rate`}
                control={control}
                render={(props) => (
                  <Input
                    placeholder="Price / Unit"
                    type="number"
                    onChange={(e) =>
                      props.field.onChange(parseInt(e.target.value))
                    }
                    error={errors?.materials?.[index]?.rate}
                    {...props}
                    hideErrorMessage
                  />
                )}
              />

              <Controller
                name={`materials.${index}.amount`}
                control={control}
                render={(props) => (
                  <Input
                    placeholder="Weight"
                    type="number"
                    onChange={(e) =>
                      props.field.onChange(parseInt(e.target.value))
                    }
                    prefix="Tons"
                    prefixClassName="text-xs"
                    error={errors?.materials?.[index]?.amount}
                    {...props}
                    hideErrorMessage
                  />
                )}
              />

              <Controller
                name={`materials.${index}.weighing_type`}
                control={control}
                render={(props) => (
                  <Select
                    options={[
                      { value: "bridge", label: "Bridge" },
                      { value: "palet", label: "Palet" },
                    ]}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                      const weighing_type = e.target.value;
                      props.field.onChange(weighing_type);
                    }}
                    error={errors?.materials?.[index]?.weighing_type}
                    {...props}
                  />
                )}
              />
            </div>

            {/* Close button =============== */}
            <div className="">
              <button
                type="button"
                disabled={false}
                className="mx-auto col-span-1 bg-gray-light rounded-full w-6 h-6 flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50"
                onClick={() => fields.length > 1 && remove(index)}
              >
                <CloseIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MaterialForm;
