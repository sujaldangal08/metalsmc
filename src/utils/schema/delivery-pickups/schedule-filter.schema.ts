import { z } from "zod";

export const pickupScheduleFilterSchema = z.object({
    driver_id: z.number().optional().nullable(),
    asset_id: z.number().optional().nullable(),
    branch_id: z.number().optional().nullable(),
    status: z.string().optional().nullable(),
})

export type PickupScheduleFilterSchema = z.infer<typeof pickupScheduleFilterSchema>;