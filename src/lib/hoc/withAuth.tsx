"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getSession } from "../auth";
import { Route } from "../enums/routes.enums";

const withAuth = <T extends object>(
  WrappedComponent: React.ComponentType<T>
) => {
  const AuthenticatedComponent: React.FC<T> = (props) => {
    const [authSession, setAuthSession] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
      async function getAuthSession() {
        const session = await getSession();

        if (!session) {
          router.push(Route.Login);
        } else {
          setAuthSession(session);
        }
      }

      getAuthSession();
    }, [router]);

    return authSession && <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
