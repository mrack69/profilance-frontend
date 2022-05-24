import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Fade } from "./Fade";

import "./Modal.scss";

const modalRoot = document.getElementById("root-modal");

const createModalPlace = () => {
  const modalElement = document.createElement("div");
  modalElement.style.position = "absolute";
  modalElement.style.top = "0";
  modalElement.style.width = "100%";
  modalElement.style.height = "100%";

  return modalElement;
};

const Modal = ({ children, onClose }) => {
  const modalElement = createModalPlace();

  useEffect(() => {
    modalRoot.appendChild(modalElement);

    return () => {
      modalRoot.removeChild(modalElement);
    };
  }, [modalElement]);

  const ModalJSX = (
    <>
      <div className="Modal">
        <Fade onClose={onClose} />
        <div className="Modal-Container">{children}</div>
      </div>
    </>
  );

  return createPortal(ModalJSX, modalElement);
};

export { Modal };
