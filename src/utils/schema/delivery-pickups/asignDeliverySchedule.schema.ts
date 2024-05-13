import { z } from "zod";

const assignDeliverySchedule = z.object({
  driver_id: z.string().min(1, "Driver ID is required"),
  truck_id: z.string().min(1, "Truck ID is required"),
  schedule: z.object({
    schedule_name: z.string().min(1, "Schedule name is required"),
    customer: z.object({
      name: z.string().min(1, "Customer name is required"),
      location: z.string().min(1, "Delivery location is required"),
      note: z.string().optional(),
    }),
    materials: z
      .array(
        z.object({
          material: z.string().min(1, "Material is required"),
          rate: z
            .string()
            .min(1, "Rate is requried")
            .refine(
              (value) => parseFloat(value) > 0.0,
              "Rate must be greater than 0"
            )
            .transform((val) => {
              return parseFloat(val);
            }),
          weight: z
            .string()
            .min(1, "Weight is requried")
            .refine(
              (value) => parseFloat(value) > 0.0,
              "Weight must be greater than 0"
            )
            .transform((val) => {
              return parseFloat(val);
            }),
        })
      )
      .nonempty("At least one material is required"),
  }),
});

export type AssignDeliverySchedule = z.infer<typeof assignDeliverySchedule>;

export default assignDeliverySchedule;
