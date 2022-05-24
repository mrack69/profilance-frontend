import React from "react";

import "./Label.scss";

const Label = ({ children, className, ...rest }) => {
  const style = `Label ${className || ""}`;
  return (
    <label className={style} {...rest}>
      {children}
    </label>
  );
};

export { Label };
