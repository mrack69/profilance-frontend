import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../../../components";
import { approveNewsAction, deleteNewsAction } from "../../../../store/actionCreators/news";

import iconOk from "../../../../assets/icon-ok.svg";
import iconDelete from "../../../../assets/icon-delete.svg";

import "./CardMenu.scss";

const CardMenu = ({ id, approved }) => {
  const dispatch = useDispatch();

  const approveHandler = () => {
    dispatch(approveNewsAction(id));
  };

  const deleteHandler = () => {
    dispatch(deleteNewsAction(id));
  };

  return (
    <div className="CardMenu">
      {!approved && (
        <Button className="CardMenu-Btn CardMenu-ApproveBtn" onClick={approveHandler}>
          <img className="CardMenu-Icon" src={iconOk} alt="approve" />
        </Button>
      )}
      <Button className="CardMenu-Btn CardMenu-DeleteBtn" onClick={deleteHandler}>
        <img className="CardMenu-Icon" src={iconDelete} alt="delete" />
      </Button>
    </div>
  );
};

export { CardMenu };
