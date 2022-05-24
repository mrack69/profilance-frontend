import { users } from "../data/users";

export const login = (username, password) => {
  const data = users.filter((user) => user.username === username && user.password === password);
  return new Promise((resolve, reject) => {
    data.length ? resolve(data[0]) : reject("Пользователь с данным логином или паролем не найден!");
  });
};
