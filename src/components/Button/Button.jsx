import React from "react";

import "./Button.scss";

const Button = ({ children, onClick, className, ...rest }) => {
  const style = `Button ${className || ""}`;
  return (
    <button className={style} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export { Button };
