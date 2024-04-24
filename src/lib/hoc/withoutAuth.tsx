"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getSession } from "../auth";

const withoutAuth = <T extends object>(
  WrappedComponent: React.ComponentType<T>
) => {
  const AuthenticatedComponent: React.FC<T> = (props) => {
    const [authSession, setAuthSession] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
      async function checkAuthSession() {
        try {
          const session = await getSession();

          if (session) {
            router.push("/");
          } else {
            setAuthSession("no-session");
          }
        } catch (error) {
          console.error("Error fetching session:", error);
        }
      }

      checkAuthSession();
    }, [router]);

    return authSession === "no-session" && <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withoutAuth;
