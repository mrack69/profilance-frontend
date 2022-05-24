import { v4 as uuid } from "uuid";

export const INIT_NEWS = "INIT_NEWS";
export const CREATE_NEWS = "CREATE_NEWS";
export const APPROVE_NEWS = "APPROVE_NEWS";
export const DELETE_NEWS = "DELETE_NEWS";

export const initAction = (news) => {
  return {
    type: INIT_NEWS,
    payload: news
  };
};

export const createNewsAction = (title, text) => {
  const date = new Date().toLocaleDateString();
  return {
    type: CREATE_NEWS,
    payload: {
      id: uuid(),
      date,
      title,
      text
    }
  };
};

export const deleteNewsAction = (id) => {
  return {
    type: DELETE_NEWS,
    payload: id
  };
};

export const approveNewsAction = (id) => {
  return {
    type: APPROVE_NEWS,
    payload: id
  };
};
