import React from "react";

import { Card, CardTitle } from "@components/Card";
import { Table } from "@components/Table";

import mockData from "./tableMockData.json";

export const OpenTrades = () => {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <CardTitle text="Open Trades" themeColor="#CABDFF" />
        <Table columns={mockData.columns} data={mockData.data} />
      </div>
    </Card>
  );
};

export default OpenTrades;
