"use client";

import { Form } from "@/components/ui/form";
import Spinner from "@/components/ui/spinner";
import { changePasswordFn } from "@/features/api/auth";
import { ChangePasswordRequestBody } from "@/features/api/auth/types";
import { Route } from "@/lib/enums/routes.enums";
import useMutation from "@/lib/hooks/useMutation";
import { formatErrorMessage } from "@/utils/format-errors";
import {
  ResetPasswordSchema,
  resetPasswordSchema,
} from "@/utils/validators/reset-password.schema";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { Button, Password } from "rizzui";

export default function ChangePasswordForm({
  password_hash,
}: {
  password_hash: string;
}) {
  const router = useRouter();

  const { mutate: changePasswordMn, isLoading } =
    useMutation<ChangePasswordRequestBody>({
      mutateFn: (body) => changePasswordFn(body),
    });

  const onSubmit: SubmitHandler<ResetPasswordSchema> = async (data) => {
    try {
      const reqBody = { ...data, password_hash };
      const res = await changePasswordMn(reqBody);

      toast.success(res.data.message);
      router.push(Route.Login);
    } catch (err: any) {
      toast.error(formatErrorMessage(err));
    }
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
            className="[&>label>span]:font-regular"
            inputClassName="text-sm"
            {...register("new_password")}
            error={errors.new_password?.message}
          />
          <Password
            label="Confirm Password"
            placeholder="Enter confirm password"
            size="lg"
            className="[&>label>span]:font-medium"
            inputClassName="text-sm"
            {...register("confirm_password")}
            error={errors.confirm_password?.message}
          />
          <Button
            disabled={isLoading}
            className="py-5 mt-4 w-1/2 bg-primary"
            type="submit"
          >
            {isLoading ? (
              <Spinner tag="span" color="white" />
            ) : (
              <span>Change Password</span>
            )}
          </Button>
        </div>
      )}
    </Form>
  );
}
