"use client";

import { LoadingSpinner } from "@/components/ui/file-upload/upload-zone";
import React, { Suspense } from "react";

function LoginLayout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>;
}

export default LoginLayout;
