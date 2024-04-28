"use client";

import XeroConnect from "@/components/xero/XeroConnect";
import withAuth from "@/lib/hoc/withAuth";

function Homepage() {
  return (
    <div>
      <XeroConnect />
    </div>
  );
}

export default withAuth(Homepage);
