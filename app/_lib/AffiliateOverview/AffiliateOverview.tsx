import React from "react";

import { Card, CardTitle } from "@components/Card";
import { Info } from "@/app/_icons";

import classes from "./AffiliateOverview.module.scss";

const overviewData = [
  {
    label: "Referrals",
    value: 120,
    color: "rgba(255, 188, 153, 0.25)",
  },
  {
    label: "Referral Volume",
    value: 52,
    color: "rgba(202, 189, 255, 0.25)",
  },
  {
    label: "Referral Income",
    value: "$1,989",
    color: "rgba(181, 228, 202, 0.25)",
  },
];

export const AffiliateOverview = () => {
  return (
    <Card width={"40%"}>
      <div className={classes["affiliate_overview_container"]}>
        <CardTitle text="Invite Now" themeColor="#B5E4CA" />
        <div className={classes["affilicate_overview_content"]}>
          <ul>
            {overviewData.map((item) => (
              <li key={item.label}>
                <span className={classes["overview_label"]}>
                  {item.label} <Info height={20} width={20} />
                </span>
                <div
                  className={classes["overview_value"]}
                  style={{ background: item.color }}
                >
                  <h3>{item.value}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default AffiliateOverview;
