import React, { ReactNode } from "react";

import classes from "./MetricInfo.module.scss";
import { DownArrow, Info, UpArrow } from "@icons";

export type MetricInfoProps = {
  icons: Array<{
    iconBackground: string;
    iconColor?: string;
    icon: ReactNode;
  }>;
  metricDifference?: number;
  value: string | number;
  title: string;
  timeSpan?: string;
  metricUnit?: string;
};

export const MetricInfo = ({
  icons,
  title,
  metricDifference,
  timeSpan,
  value,
  metricUnit,
}: MetricInfoProps) => {
  return (
    <div className={classes["metric_content"]}>
      {icons.map((icon) => (
        <div
          className={classes["icon_container"]}
          style={{ background: icon.iconBackground }}
        >
          <span className={classes["icon"]} style={{ color: icon.iconColor }}>
            {icon.icon}
          </span>
        </div>
      ))}

      <div className={classes["content-main"]}>
        <div className={classes["title_container"]}>
          <span className={classes["title"]}>{title}</span>
          <span className={classes["info_icon"]}>
            <Info height={20} width={20} />
          </span>
        </div>

        <h1>{value}</h1>

        {metricDifference && (
          <div className={classes["metric_container"]}>
            <span
              className={`${classes["metric"]} ${
                metricDifference > 0
                  ? classes["positive_metric"]
                  : classes["negative_metric"]
              }`}
            >
              {metricDifference > 0 ? (
                <UpArrow width={22} height={22} />
              ) : (
                <DownArrow width={22} height={22} />
              )}{" "}
              {metricDifference}
              {metricUnit}
            </span>
            <span>{timeSpan}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricInfo;
