import { Overview } from "@lib/Overview";
import { CompletedTrades } from "@lib/CompletedTrades";

import classes from "./Dashboard.module.scss";

export default function Home() {
  return (
    <div className={classes["dashboard_container"]}>
      <div className={classes["dashboard_wrapper"]}>
        <div className="dashboard_header">
          <h3>Dashboard</h3>
        </div>

        <div className={classes["dashboard_body"]}>
          <Overview />
          <CompletedTrades />
        </div>
      </div>
    </div>
  );
}
