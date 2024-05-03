import { z } from "zod";

const assignPickupSchedule = z.object({
  driver_id: z.string().min(1, "Driver ID is required"),
  truck_id: z.string().min(1, "Truck ID is required"),
  route_name: z.string().min(1, "Route Name is requried"),
  schedules: z
    .array(
      z.object({
        customer: z.object({
          name: z.string().min(1, "Customer name is required"),
          location: z.string().min(1, "Delivery location is required"),
          note: z.string().optional(),
        }),
        materials: z
          .array(
            z.object({
              material: z.string().min(1, "Material is required"),
              rate: z.number().positive("Rate must be a positive number"),
              weight: z.number().positive("Weight must be a positive number"),
            })
          )
          .nonempty("At least one material is required"),
      })
    )
    .nonempty("At least one schedule is required"),
});

export type AssignPickupSchedule = z.infer<typeof assignPickupSchedule>;

export default assignPickupSchedule;
