import React from "react";
import { Link } from "react-router-dom";

import "./Menu.scss";
import { SignInOut } from "./SignInOut";

const Menu = () => {
  return (
    <>
      <nav className="Menu">
        <Link to="/news" className="Menu-Link">
          Новости
        </Link>
      </nav>
      <SignInOut />
    </>
  );
};

export { Menu };
