import { z } from "zod";
import { messages } from "@/config/messages";
import {
  validatePassword,
  validateConfirmPassword,
} from "@/utils/validators/common-rules";

// form zod validation schema
export const resetPasswordSchema = z
  .object({
    new_password: validatePassword,
    confirm_password: validateConfirmPassword,
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: messages.passwordsDidNotMatch,
    path: ["confirmPassword"], // Correct path for the confirmedPassword field
  });

// generate form types from zod validation schema
export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
