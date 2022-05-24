import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../../../api/login";
import { Button, Input, Label } from "../../../../../components";
import { loginAction } from "../../../../../store/actionCreators/user";

import "./SignInForm.scss";

const SignInFrom = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;
    login(username, password)
      .then(({ username, role }) => {
        dispatch(loginAction(username, role));
        closeModal();
      })
      .catch((error) => setError(error));
  };

  return (
    <form className="SignInForm" onSubmit={submitHandler}>
      <h2 className="SignInForm-Title">Вход</h2>
      {error && <Label className="SignInForm-Error">{error}</Label>}
      <Label className="SignInForm-Label">
        Имя пользователя
        <Input className="SignInForm-Input" name="username" required />
      </Label>
      <Label className="SignInForm-Label">
        Пароль
        <Input className="SignInForm-Input" name="password" type="password" required />
      </Label>
      <Button className="SignInForm-Button" type="submit">
        Войти
      </Button>
    </form>
  );
};

export { SignInFrom };
