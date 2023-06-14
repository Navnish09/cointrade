import React, { ReactNode } from "react";

import classes from "./PerformanceCard.module.scss";
import { DownArrow, UpArrow, Info } from "@icons";
import { MetricInfo, MetricInfoProps } from "../MetricInfo";

type Props = MetricInfoProps & {
  cardColor: string;
};

export const PerformanceCard = ({ cardColor, ...metricInfoProps }: Props) => {
  return (
    <div
      className={classes["performance_card_container"]}
      style={{ background: cardColor }}
    >
      <div className={classes["performance_card_content"]}>
        <MetricInfo {...metricInfoProps} />
      </div>
    </div>
  );
};

export default PerformanceCard;
