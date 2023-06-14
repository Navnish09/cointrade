import React from "react";

import { Card, CardTitle } from "@components/Card";
import { Table } from "@components/Table";

import mockData from "./tableMockData.json";

export const BillingHistory = () => {
  return (
    <Card width={"60%"}>
      <div className="flex flex-col gap-4">
        <CardTitle text="Billing History" themeColor="#CABDFF" />
        <Table columns={mockData.columns} data={mockData.data} />
      </div>
    </Card>
  );
};

export default BillingHistory;
