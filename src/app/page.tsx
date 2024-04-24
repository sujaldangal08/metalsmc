"use client";

import { getUserDetails } from "@/features/api/user";
import withAuth from "@/lib/hoc/withAuth";
import { useEffect } from "react";

function HomePage() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await getUserDetails();
  //     console.log(response);
  //   };

  //   fetchData();
  // }, []);

  return <div>Hello world....</div>;
}

export default withAuth(HomePage);
