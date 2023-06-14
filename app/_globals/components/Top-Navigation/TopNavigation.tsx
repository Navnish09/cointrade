import React from "react";

import { Input } from "@components/Input";
import { Search } from "@icons";

import classes from "./TopNavigation.module.scss";
import { Avatar } from "@/app/_components/Avatar";
import Link from "next/link";

export const TopNavigation = () => {
  return (
    <div className={classes["top_navigation_container"]}>
      <div className={classes["navigation_wrapper"]}>
        <div className={classes["search_input"]}>
          <Input
            type="text"
            size="large"
            icon={<Search height={20} width={20} />}
            placeholder="Search or type a command"
            width={360}
          />
        </div>

        <div className={classes["user_profile"]}>
          <Link href={"/login"}>
            <Avatar src="/Images/User.png" color="#FFBC99" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
