import { Card, CardTitle } from "@components/Card";
import { PerformanceCard } from "@lib/PerformaceCard";

import { data } from "./performanceData";
import classes from "./Overview.module.scss";

export const Overview = () => {
  return (
    <Card>
      <div className={classes["overview_container"]}>
        <CardTitle text="Overview" themeColor="#CABDFF" />

        <div className={classes["overview_cards_container"]}>
          {
            data.map(item => (
              <PerformanceCard
                key={item.title}
                {...item}
              />
            ))
          }
        </div>
      </div>
    </Card>
  );
};

export default Overview;
