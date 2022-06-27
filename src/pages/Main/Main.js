import React, { useEffect, useState } from "react";
// import { useLocation, useParams } from "react-router-dom";
import MainBox from "./components/MainBox/MainBox";
import "./Main.scss";

const Main = () => {
  const [movies, setMovies] = useState([]);
  // const location = useLocation();
  // const params = useParams();
  //console.log(location.search);
  //console.log(params);

  useEffect(() => {
    fetch("http://10.58.2.194:8000/films/main?genre=드라마")
      .then(res => res.json())
      .then(data => {
        setMovies(data);
      });
    // fetch("http://10.58.2.194:8000/films/main?genre=드라마")
    //   .then(res => res.json())
    //   .then(data => {
    //     setMovies(data);
    //   });
    // fetch("http://10.58.2.194:8000/films/main?genre=드라마")
    //   .then(res => res.json())
    //   .then(data => {
    //     setMovies(data);
    //   });
  }, []);

  if (movies.length === 0) return;

  return (
    <>
      <div>
        <h1 className="fakeNav">안녕하세요</h1>
      </div>
      <div className="mainWrapper">
        <MainBox movies={movies.results} theme={MOVIE_TITLE[0]} />
        {/* <MainBox movies={movies[1].usa_film} theme={MOVIE_TITLE[1]} />
        <MainBox movies={movies[2].all_time_legend} theme={MOVIE_TITLE[2]} /> */}
      </div>
    </>
  );
};

export default Main;

const MOVIE_TITLE = [
  { id: 1, title: "드라마" },
  { id: 2, title: "로맨스" },
  { id: 3, title: "액션" },
];
