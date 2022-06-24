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
        <MainBox movies={movies} />
        <MainBox movies={movies} />
        <MainBox movies={movies} />
      </div>
    </>
  );
};

export default Main;
