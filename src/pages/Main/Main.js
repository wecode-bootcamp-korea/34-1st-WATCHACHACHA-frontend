import React, { useEffect, useState } from "react";
import MainBox from "./components/MainBox/MainBox";
import "./Main.scss";

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/data/mainMock.json")
      .then(res => res.json())
      .then(data => {
        setMovies(data);
      });
  }, []);

  return (
    <>
      <div>
        <h1 className="fakeNav">안녕하세요</h1>
      </div>
      <div className="mainWrapper">
        <MainBox movies={movies} theme={MOVIE_TITLE[0]} />
        <MainBox movies={movies} theme={MOVIE_TITLE[1]} />
        <MainBox movies={movies} theme={MOVIE_TITLE[2]} />
      </div>
    </>
  );
};

export default Main;

const MOVIE_TITLE = [
  { id: 1, title: "왓챠 클래식 TOP10" },
  { id: 2, title: "1920's" },
  { id: 3, title: "1930's" },
];
