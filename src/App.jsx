import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getAllNews } from "./api/getAllNews";
import "./App.scss";
import { Layout } from "./layout";
import { NewsPage, MainPage, CreateNewsPage } from "./pages";
import { initAction } from "./store/actionCreators/news";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const data = await getAllNews();
      dispatch(initAction(data));
    };
    getData();
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<MainPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/create" element={<CreateNewsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
