import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button, Input, Label, Textarea } from "../../../components";
import { createNewsAction } from "../../../store/actionCreators/news";

import "./CreateNewsForm.scss";

const CreateNewsForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const text = e.target.text.value;
    dispatch(createNewsAction(title, text));
    navigate("/news");
  };

  return (
    <form className="CreateNewsForm" onSubmit={submitHandler}>
      <Label className="CreateNewsForm-Label">
        Заголовок:
        <Input className="CreateNewsForm-Input" name="title" required />
      </Label>
      <Label className="CreateNewsForm-Label">
        Текст:
        <Textarea className="CreateNewsForm-Textarea" rows={5} name="text" required />
      </Label>
      <Button className="CreateNewsForm-Btn" type="submit">
        Создать новость
      </Button>
    </form>
  );
};

export { CreateNewsForm };
