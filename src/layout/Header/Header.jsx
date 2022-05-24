import React from "react";
import { Link } from "react-router-dom";

import { Logo } from "../../components";
import { Menu } from "./Menu";

import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <div className="App-Container Header-Container">
        <Link to="/">
          <Logo />
        </Link>
        <div className="Header-Menu">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export { Header };
