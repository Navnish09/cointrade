import React from "react";

import { BillingHistory } from "@lib/BillingHistory";
import { PaymentHistory } from "@lib/PaymentHistory";

export const BillingPage = () => {
  return (
    <div className="flex gap-5">
      <BillingHistory />
      <PaymentHistory />
    </div>
  );
};

export default BillingPage;
