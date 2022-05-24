import { USER_LOGIN, USER_OUT } from "../actionCreators/user";

const initialState = {
  username: "",
  role: "GUEST"
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...action.payload };
    case USER_OUT:
      return { ...initialState };
    default:
      return state;
  }
};
