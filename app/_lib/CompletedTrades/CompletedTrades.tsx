import { Card, CardTitle } from "@components/Card";
import { MetricInfo } from "@lib/MetricInfo";
import { Medal } from "@icons";

import { data } from "./completedTradesData";
import classes from "./CompletedTrades.module.scss";

export const CompletedTrades = () => {
  return (
    <>
      <Card>
        <div className={classes["trades_container"]}>
          <CardTitle text="Completed Trades" themeColor="#FFD88D" />

          <div className={classes["trades_cards_container"]}>
            {data.map((item) => (
              <div key={item.title} className={classes["trades_card"]}>
                <MetricInfo {...item} />
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card width={360}>
        <div className={classes["trades_container"]}>
          <div className={classes["trades_cards_container"]}>
            <div className={classes["trades_card"]}>
              <MetricInfo
                title="Completed Trades"
                value={"25 Trades"}
                metricDifference={18}
                metricUnit="%"
                timeSpan="more than last week"
                icons={[
                  {
                    iconBackground: "#B5E4CA",
                    icon: <Medal height={24} width={24} />,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CompletedTrades;
