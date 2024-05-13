import { z } from "zod";

export const createPickupRouteSchema = z.object({
  driver_id: z.number().min(1, "Driver ID is required"),
  asset_id: z.number().min(1, "Truck ID is required"),
  name: z.string().min(1, "Route Name is required"),
  start_date: z.string().min(1, "Start Date is required"),
  description: z.string().optional()
})

const addPickupMaterialSchema = z.object({
  name: z.string().min(1, "Name is required"),
  weighing_type: z.string().min(1, "Weighing type is required"),
  rate: z.number().min(10, "Rate must be greater than 10"),
  amount: z.number().min(10, "Amount must be greater than 10")
})

export const createPickupScheduleSchema = z.object({
  driver_id: z.number().min(1, "Driver ID is required"),
  asset_id: z.number().min(1, "Truck ID is required"),
  route_id: z.number().min(1, "Route ID is required"),
  customer_id: z.number().min(1, "Customer ID is required"),
  coordinates: z.number().array().min(1, "Coordinates is required"),
  materials: z.array(addPickupMaterialSchema),
  meta: z.object({
    name: z.string(),
    contact: z.string(),
    extra: z.string().optional(),
  }).optional(),
  notes: z.string().optional(),
  n_bins: z.number().min(1, "There must be 1 bin"),
  tare_weight: z.string().min(1, "Tare weight is required")
})

export type CreatePickupScheduleSchema = z.infer<typeof createPickupScheduleSchema>;
export type CreatePickupRouteSchema = z.infer<typeof createPickupRouteSchema>;
