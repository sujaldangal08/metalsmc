"use client";

import Cookies from "js-cookie";
import { create } from "zustand";

type AuthStoreState = {
  session: string | undefined;
  setSession: (token: string) => void;
}

export const useAuthStore = create<AuthStoreState>((set) => ({
  session: Cookies.get('sesssion'),
  setSession: (token: string) => set(() => ({ session: token })),
}));
