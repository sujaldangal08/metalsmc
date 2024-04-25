"use client";

import SetupTwoFactorAuth from "@/components/auth/SetupTwoFactorAuth";
import { api } from "@/config/api.config";
import { useEffect } from "react";

function Homepage() {
  // const connectToXero = async () => {
  //   const response = await api.get("/xero/connect");
  //   console.log(response);
  // };

  // useEffect(() => {
  //   connectToXero();
  // }, []);

  return (
    <div>
      <SetupTwoFactorAuth />
    </div>
  );
}

export default Homepage;
