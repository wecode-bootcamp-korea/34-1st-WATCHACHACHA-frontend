import React, { useEffect, useState } from "react";
import MainBox from "./components/MainBox/MainBox";
import "./Main.scss";

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://172.20.10.11:8000/films?genre=드라마&country=미국&time=100")
      .then(res => res.json())
      .then(data => {
        setMovies(data);
      });
  }, []);

  if (movies.length === 0) return;

  return (
    <div className="mainWrapper">
      <MainBox movies={movies.results.drama} theme={MOVIE_TITLE[0]} />
      <MainBox movies={movies.results.america} theme={MOVIE_TITLE[1]} />
      <MainBox
        movies={movies.results.running_time_below_hundred}
        theme={MOVIE_TITLE[2]}
      />
    </div>
  );
};

export default Main;

const MOVIE_TITLE = [
  { id: 1, title: "드라마" },
  { id: 2, title: "미국" },
  { id: 3, title: "100분 순삭" },
];
