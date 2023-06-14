import React from "react";

import classes from "./Avatar.module.scss";

type Props = {
  src: string;
  color?: string;
};

export const Avatar = ({ src, color = "initial" } : Props) => {
  return (
    <div className={classes["avatar_container"]} style={{background : color}}>
      <img src={src} alt={"Avatar"} />
    </div>
  );
};

export default Avatar;
