import React from "react";

import "./Input.scss";

const Input = ({ className, ...rest }) => {
  const style = `Input ${className || ""}`;
  return <input className={style} {...rest} />;
};

export { Input };
