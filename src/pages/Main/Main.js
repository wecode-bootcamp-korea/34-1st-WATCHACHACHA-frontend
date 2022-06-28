import React, { useEffect, useState } from "react";
import MainBox from "./components/MainBox/MainBox";
import "./Main.scss";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [usa, setUsa] = useState([]);
  const [running, setRunning] = useState([]);

  useEffect(() => {
    fetch("http://10.58.2.194:8000/films?genre=드라마&sort=random&limit=20")
      .then(res => res.json())
      .then(data => {
        setMovies(data);
      });
    fetch("http://10.58.2.194:8000/films?country=미국&sort=random&limit=20")
      .then(res => res.json())
      .then(data => {
        setUsa(data);
      });
    fetch("http://10.58.2.194:8000/films?time=100&sort=random&limit=20")
      .then(res => res.json())
      .then(data => {
        setRunning(data);
      });
  }, []);

  if (movies.length === 0) return;

  return (
    <div className="mainWrapper">
      <MainBox movies={movies.results} theme={MOVIE_TITLE[0]} />
      <MainBox movies={usa.results} theme={MOVIE_TITLE[1]} />
      <MainBox movies={running.results} theme={MOVIE_TITLE[2]} />
    </div>
  );
};

export default Main;

const MOVIE_TITLE = [
  { id: 1, title: "드라마" },
  { id: 2, title: "미국" },
  { id: 3, title: "100분 순삭" },
];
