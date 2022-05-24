import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Modal } from "../../../../components";
import { outAction } from "../../../../store/actionCreators/user";
import { SignInFrom } from "./SignInForm";

import "./SignInOut.scss";

const SignInOut = () => {
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const isGuest = useSelector((state) => state.user.role === "GUEST");

  const SignInHandler = () => {
    setIsOpenModal(true);
  };

  const SignOutHandler = () => {
    dispatch(outAction());
  };

  return (
    <div className="SignInOut">
      <Button onClick={isGuest ? SignInHandler : SignOutHandler}>
        {isGuest ? "Войти" : "Выйти"}
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <SignInFrom closeModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
};

export { SignInOut };
