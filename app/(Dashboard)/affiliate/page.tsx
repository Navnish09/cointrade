import React from "react";

import { InviteNow } from "@lib/InviteNow/InviteNow";

import classes from "./Affiliate.module.scss";
import { AffiliateOverview } from "@lib/AffiliateOverview";

export const AffilicatePage = () => {
  return (
    <div className={classes["affiliate_container"]}>
      <div className={classes["affiliate_banner"]}>
        <div className={classes["banner_content"]}>
          <h3>Refer Friends.Get 100 USDT Trading Fee Credit Each.</h3>
          <p className={classes["message"]}>
            You're just steps away from receiving your reward.
          </p>
        </div>
        <div className={classes["banner_image"]}>
          <img
            src="/Images/Affiliate_Banner.svg"
            alt="Affiliate Banner Image"
          />
        </div>
      </div>

      <div className={classes["affiliate_details"]}>
        <InviteNow />
        <AffiliateOverview />
      </div>
    </div>
  );
};

export default AffilicatePage;
