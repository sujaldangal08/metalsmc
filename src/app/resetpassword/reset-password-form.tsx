"use client";

import { Form } from "@/components/ui/form";
import {
  ForgetPasswordSchema,
  forgetPasswordSchema,
} from "@/utils/validators/forget-password.schema";
import { SubmitHandler } from "react-hook-form";
import { Button, Input } from "rizzui";

export default function ResetPasswordForm() {
  const onSubmit: SubmitHandler<ForgetPasswordSchema> = (data) => {
    console.log(data);
  };

  return (
    <Form<ForgetPasswordSchema>
      validationSchema={forgetPasswordSchema}
      onSubmit={onSubmit}
      className="flex flex-col justify-start h-full w-full mt-10"
    >
      {({ register, formState: { errors } }) => (
        <div className="space-y-10">
          <Input
            type="email"
            size="lg"
            label="Email"
            placeholder="Enter your email"
            className="[&>label>span]:font-medium"
            inputClassName="text-sm"
            {...register("email")}
            error={errors.email?.message}
          />
          <Button
            variant="outline"
            type="submit"
            className="py-5 w-1/2 bg-primary"
          >
            <h3 className="text-sm font-normal text-white ">Send OTP</h3>
          </Button>
        </div>
      )}
    </Form>
  );
}
