"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import navigationData from "./mockData.json";
import classes from "./SideNavigation.module.scss";
import { Card, Diamond, History, Home, Settings } from "@icons";

const IconList = {
  home: <Home height={24} width={24} />,
  history: <History height={24} width={24} />,
  card: <Card height={24} width={24} />,
  diamond: <Diamond height={24} width={24} />,
  settings: <Settings height={24} width={24} />,
};

export const SideNavigation = () => {
  const pathname = usePathname();

  return (
    <div className={classes["side_navigation_container"]}>
      <div className={classes["navigation-wrapper"]}>
        <div className={classes["logo_container"]}>
          <img src="/images/Logo.svg" alt="Logo" />
        </div>
        <nav className={classes["nav"]}>
          <ul>
            {navigationData.items.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`${
                    pathname === item.href ? classes["active_link"] : ""
                  }`}
                >
                  <span>
                    {IconList[`${item.icon as keyof typeof IconList}`]}
                  </span>
                  <div className={classes["menu_item_label"]}>{item.label}</div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideNavigation;
