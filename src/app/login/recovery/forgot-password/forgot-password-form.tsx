"use client";

import { Form } from "@/components/ui/form";
import Spinner from "@/components/ui/spinner";
import { forgotPasswordFn } from "@/features/api/auth";
import { ForgotPasswordRequestBody } from "@/features/api/auth/types";
import { Route } from "@/lib/enums/routes.enums";
import useMutation from "@/lib/hooks/useMutation";
import { formatErrorMessage } from "@/utils/format-errors";
import {
  ForgetPasswordSchema,
  forgetPasswordSchema,
} from "@/utils/validators/forget-password.schema";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { Button, Input } from "rizzui";

export default function ForgotPasswordForm() {
  const router = useRouter();
  const { mutate: forgotPwMn, isLoading } =
    useMutation<ForgotPasswordRequestBody>({
      mutateFn: (body) => forgotPasswordFn(body),
    });

  const onSubmit: SubmitHandler<ForgetPasswordSchema> = async (data) => {
    try {
      const res = await forgotPwMn({
        email: data.email,
      });

      toast.success(res.data.message);
      router.push(`${Route.VerifyOtp}?email=${data.email}`);
    } catch (err: any) {
      toast.error(formatErrorMessage(err));
    }
  };

  return (
    <Form<ForgetPasswordSchema>
      validationSchema={forgetPasswordSchema}
      onSubmit={onSubmit}
      className="flex flex-col justify-start h-full w-full mt-10"
    >
      {({ register, formState: { errors } }) => (
        <div className="space-y-6">
          <Input
            type="email"
            size="lg"
            label=""
            placeholder="Enter your email"
            className="[&>label>span]:font-medium"
            inputClassName="text-sm"
            {...register("email")}
            error={errors.email?.message}
          />
          <Button
            variant="outline"
            type="submit"
            className="py-6 w-1/2 bg-primary disabled:opacity-75"
            disabled={isLoading}
          >
            {isLoading ? (
              <Spinner tag="span" color="white" />
            ) : (
              <h3 className="text-sm font-normal text-white ">
                Help recover my account
              </h3>
            )}
          </Button>
        </div>
      )}
    </Form>
  );
}
