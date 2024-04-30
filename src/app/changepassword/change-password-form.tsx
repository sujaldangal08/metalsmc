"use client";

import { Button, Password } from "rizzui";
import { SubmitHandler } from "react-hook-form";
import {
  resetPasswordSchema,
  ResetPasswordSchema,
} from "@/utils/validators/reset-password.schema";
import { Form } from "@/components/ui/form";

export default function ChangePasswordForm() {
  const onSubmit: SubmitHandler<ResetPasswordSchema> = (data) => {
    console.log(data);
  };

  return (
    <Form<ResetPasswordSchema>
      validationSchema={resetPasswordSchema}
      onSubmit={onSubmit}
      className="flex flex-col justify-start h-full w-full"
    >
      {({ register, formState: { errors } }) => (
        <div className="flex flex-col justify-start h-full w-full gap-5 mt-10">
          <Password
            label="New Password"
            placeholder="Enter new password"
            size="lg"
            className="[&>label>span]:font-medium"
            inputClassName="text-sm"
            {...register("password")}
            error={errors.password?.message}
          />
          <Password
            label="Confirm Password"
            placeholder="Enter confirm password"
            size="lg"
            className="[&>label>span]:font-medium"
            inputClassName="text-sm"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
          <Button className="py-5 mt-10 w-1/2 bg-primary" type="submit">
            <span>Change Password</span>
          </Button>
        </div>
      )}
    </Form>
  );
}
