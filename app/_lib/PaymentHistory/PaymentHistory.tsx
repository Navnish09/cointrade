import React from "react";

import { Card, CardTitle } from "@components/Card";
import { Table } from "@components/Table";

import mockData from "./tableMockData.json";

export const PaymentHistory = () => {
  return (
    <Card width={"40%"}>
      <div className="flex flex-col gap-4">
        <CardTitle text="Payment History" themeColor="#B1E5FC" />
        <Table columns={mockData.columns} data={mockData.data} />
      </div>
    </Card>
  );
};

export default PaymentHistory;
