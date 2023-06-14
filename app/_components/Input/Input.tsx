"use client";

import React, { ReactNode, useState } from "react";

import classes from "./Input.module.scss";

type InputProps = {
  label?: string;
  icon?: ReactNode;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  width?: number | string;
  size?: "medium" | "large";
};

export const Input = ({
  icon,
  placeholder,
  disabled,
  type = "text",
  width,
  size = "medium",
}: InputProps) => {
  const [focused, setFocused] = useState(false);

  const containerClasses = `${classes["input"]} ${
    disabled ? classes["disabled"] : ""
  } ${!icon ? classes["no-icon"] : ""} ${focused ? classes["focused"] : ""}`;

  return (
    <div className={containerClasses} style={{ width }}>
      {icon && <div className={classes["icon"]}>{icon}</div>}
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className={`${classes["rectangle"]} ${classes[size]}`}
      ></input>
    </div>
  );
};

export default Input;
