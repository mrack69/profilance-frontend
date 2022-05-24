import React, { useEffect, useMemo, useState, useTransition } from "react";
import { useSelector } from "react-redux";
import { Input, NewsCard } from "../../../components";
import { CardMenu } from "./CardMenu";

import "./NewsList.scss";

const NewsList = () => {
  const [, startTransition] = useTransition();
  const [filter, setFilter] = useState("");
  const [news, setNews] = useState([]);
  const newsState = useSelector((state) => state.news);
  const isAdmin = useSelector((state) => state.user.role === "ADMIN");

  const showedNews = useMemo(
    () => (isAdmin ? newsState : newsState.filter((news) => news.approved)),
    [isAdmin, newsState]
  );

  useEffect(() => {
    startTransition(() => {
      const filtredNews = showedNews.filter(({ title }) =>
        title.toLowerCase().includes(filter.toLowerCase())
      );
      setNews(filtredNews);
    });
  }, [filter, showedNews]);

  return (
    <>
      <Input
        value={filter}
        onChange={({ target }) => setFilter(target.value)}
        placeholder="Поиск..."
      />
      <div className="NewsList">
        {news.map(({ id, title, text, date, approved }) => (
          <div key={id} className="NewsList-Item">
            <NewsCard title={title} text={text} date={date} />
            {isAdmin && <CardMenu id={id} approved={approved} />}
          </div>
        ))}
      </div>
    </>
  );
};

export { NewsList };
