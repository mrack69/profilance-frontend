import React from "react";
import { useSelector } from "react-redux";

import "./Main.scss";

const MainPage = () => {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="App-Container">
      <main className="Main">{`Привет, ${username ? username : "Гость"}!`}</main>
    </div>
  );
};

export { MainPage };
