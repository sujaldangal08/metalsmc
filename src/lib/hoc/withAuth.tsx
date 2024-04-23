import { redirect } from "next/navigation";
import React from "react";
import { getSession } from "../auth";

const withAuth = <T extends object>(
  WrappedComponent: React.ComponentType<T>
) => {
  const AuthenticatedComponent: React.FC<T> = async (props) => {
    const access_token = await getSession();

    if (!access_token) {
      redirect("/signin");
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
