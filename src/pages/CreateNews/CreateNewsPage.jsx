import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { CreateNewsForm } from "./CreateNewsForm";

import "./CreateNewsPage.scss";

const CreateNewsPage = () => {
  const isAuth = useSelector((state) => state.user.role !== "GUEST");
  return (
    <>
      {!isAuth && <Navigate to="/news" />}
      <div className="CreateNewsPage">
        <div className="App-Container">
          <CreateNewsForm />
        </div>
      </div>
    </>
  );
};

export { CreateNewsPage };
