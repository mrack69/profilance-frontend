import React from "react";

import "./NewsCard.scss";

const NewsCard = ({ title, text, date }) => {
  return (
    <div className="NewsCard">
      <h3 className="NewsCard-Title">{title}</h3>
      <div className="NewsCard-Text">{text}</div>
      <span className="NewsCard-Date">{date}</span>
    </div>
  );
};

export { NewsCard };
