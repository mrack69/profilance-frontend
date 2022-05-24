import React from "react";

import "./Fade.scss";

const Fade = ({ onClose }) => {
  return <div className="Fade" onClick={onClose}></div>;
};

export { Fade };
