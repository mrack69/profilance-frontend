import { APPROVE_NEWS, CREATE_NEWS, DELETE_NEWS, INIT_NEWS } from "../actionCreators/news";

export const newsReducer = (state = [], action) => {
  switch (action.type) {
    case INIT_NEWS:
      return [...action.payload];
    case CREATE_NEWS:
      return [...state, action.payload];
    case DELETE_NEWS:
      return state.filter((news) => news.id !== action.payload);
    case APPROVE_NEWS:
      const approvedNews = state.find((news) => news.id === action.payload);
      if (!approvedNews) return state;
      approvedNews.approved = true;
      return [...state.filter((news) => news.id !== action.payload), approvedNews];
    default:
      return state;
  }
};
