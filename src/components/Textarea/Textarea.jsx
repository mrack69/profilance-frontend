import React from "react";

import "./Textarea.scss";

const Textarea = ({ className, ...rest }) => {
  const style = `Textarea ${className || ""}`;
  return <textarea className={style} {...rest} />;
};

export { Textarea };
