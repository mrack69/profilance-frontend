import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";

import "./News.scss";
import { NewsList } from "./NewsList";

const NewsPage = () => {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.user.role !== "GUEST");
  return (
    <div className="News">
      <div className="App-Container News-Container">
        <Button disabled={!isAuth} className="News-AddBtn" onClick={() => navigate("create")}>
          Добавить новость
        </Button>
        <NewsList />
      </div>
    </div>
  );
};

export { NewsPage };
