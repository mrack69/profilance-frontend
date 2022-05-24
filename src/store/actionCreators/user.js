export const USER_LOGIN = "USER_LOGIN";
export const USER_OUT = "USER_OUT";

export const loginAction = (username, role) => {
  return {
    type: USER_LOGIN,
    payload: {
      username,
      role
    }
  };
};

export const outAction = () => {
  return {
    type: USER_OUT
  };
};
