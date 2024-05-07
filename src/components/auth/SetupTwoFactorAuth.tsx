"use client";

import TwoFactorAuth from "@/components/auth/TwoFactorAuth";
import { disableTwoFactorFn, generateQrCodeFn } from "@/features/api/auth";
import {
  DisableTwoFactorAuthRequestBody,
  GenerateQrRequestBody,
} from "@/features/api/auth/types";
import withAuth from "@/lib/hoc/withAuth";
import useMutation from "@/lib/hooks/useMutation";
import { formatErrorMessage } from "@/utils/format-errors";
import { useState } from "react";
import toast from "react-hot-toast";

function SetupTwoFactorAuthPage() {
  const [secret, setSecret] = useState({
    qr_code_url: "",
    secret_key: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const { mutate: generateQrCodeMn, isLoading: qrGenerating } = useMutation({
    mutateFn: (body: GenerateQrRequestBody) => generateQrCodeFn(body),
  });

  const { mutate: disableTwoFactorAuthMn, isLoading: disabling2Fa } =
    useMutation({
      mutateFn: (body: DisableTwoFactorAuthRequestBody) =>
        disableTwoFactorFn(body),
    });

  const generateQrCode = async ({ user_id }: { user_id: number }) => {
    try {
      const response = await generateQrCodeMn({ user: user_id });

      if (response.data.message === "2FA already enabled") {
        setOpenModal(false);
        toast.success(response?.data.message!);
      } else {
        setOpenModal(true);
        setSecret({
          secret_key: response.data.secret_key,
          qr_code_url: response.data.qr_code_url,
        });
      }
    } catch (error: any) {
      toast.error(formatErrorMessage(error));
    }
  };

  const disableTwoFactorAuth = async (user_id: number) => {
    try {
      await disableTwoFactorAuthMn({ user: user_id });

      toast.success("Two Factor Authentication Disabled");
    } catch (error: any) {
      toast.error(formatErrorMessage(error));
    }
  };

  return (
    <div>
      <h2>Setup Two factor auth</h2>
      <button
        disabled={qrGenerating}
        className="bg-green-500 py-1.5 px-3 rounded text-white"
        onClick={() => generateQrCode({ user_id: 1 })}
      >
        Setup 2fa
      </button>

      <h2>Setup Two factor auth</h2>
      <button
        disabled={disabling2Fa}
        className="bg-red-500 py-1.5 px-3 rounded text-white"
        onClick={() => disableTwoFactorAuth(1)}
      >
        Disable 2fa
      </button>

      {openModal && (
        <TwoFactorAuth
          secret_key={secret.secret_key}
          qr_code_url={secret.qr_code_url}
          user_id={1}
          closeModal={() => setOpenModal(false)}
        />
      )}
    </div>
  );
}

export default withAuth(SetupTwoFactorAuthPage);
