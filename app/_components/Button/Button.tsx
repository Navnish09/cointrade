import React from "react";

import classes from "./Button.module.scss";

export const Button = ({
  style,
  size,
  icon,
  width,
  children,
  disabled,
  onClick,
}: any) => {
  return (
    <button
      className={`${classes["button"]} ${classes[size]} ${classes[style]}`}
      style={{ width }}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      <div className={classes["text_wrapper"]}>{children}</div>
    </button>
  );
};
