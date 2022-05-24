import { news } from "../data/news";

export const getAllNews = () => {
  return new Promise((resolve) => {
    resolve(news);
  });
};
