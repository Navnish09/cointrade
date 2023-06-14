import React from "react";

import classes from "./TradeHistory.module.scss";
import { OpenTrades } from "@lib/OpenTrades";

export const TradeHistory = () => {
  return (
    <div className={classes["trade_container"]}>
      <div className={classes["trade_wrapper"]}>
        <div className="trade_header">
          <h3>Trade History</h3>
        </div>

        <div className={classes["trade_body"]}>
          <OpenTrades />
        </div>
      </div>
    </div>
  );
};

export default TradeHistory;
