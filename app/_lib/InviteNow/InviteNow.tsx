import React from "react";

import { Card, CardTitle } from "@components/Card";
import { Input } from "@components/Input";

import classes from "./InviteNow.module.scss";

export const InviteNow = () => {
  return (
    <Card width={"50%"}>
      <div className={classes["invite_card_container"]}>
        <div className={classes["invite_card_header"]}>
          <CardTitle text="Invite Now" themeColor="#CABDFF" />
          <p>
            Use your unique link to invite your friends over message or email.
            Your default invitation code can also be shared in real life or as a
            screenshot.
          </p>
        </div>
        <div className={classes["invite_card_content"]}>
          <ul>
            <li>
              <span className={classes["label"]}>Your Tier</span>
              <span>
                <img src="/Images/Invite_Star.svg" alt="Invite star" />
              </span>
            </li>
            <li>
              <span className={classes["label"]}>Tier Rate</span>
              <span>
                <h3>15%</h3>
                <p>Entry Level</p>
              </span>
            </li>
          </ul>

          <div className={classes["invite_url_container"]}>
            <span className={classes["label"]}>Your Tier</span>
            <Input placeholder="Cointradeai/sdUn8d" size="large" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default InviteNow;
