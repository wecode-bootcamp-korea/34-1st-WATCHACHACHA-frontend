import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "./Main.scss";
import FirstLow from "./components/FirstLow/FirstLow";

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
        <div className="mainBox1">
          <p className="filmTheme1">1970's Films</p>
          <ul className="filmList">
            {movies.map(movie => (
              <FirstLow
                key={movie.id}
                id={movie.id}
                name={movie.name}
                date={movie.release_date}
                url={movie.image_url}
              />
            ))}
          </ul>
          <div className="preBtn">
            <i className="fa-solid fa-chevron-left" />
          </div>
          <div className="nextBtn">
            <i className="fa-solid fa-chevron-right" />
          </div>
        </div>
        <div className="mainBox2">
          <div className="mainText2">1960's Films</div>
        </div>
        <div className="mainBox3">
          <div className="mainText3">1950's Films</div>
        </div>
      </div>
    </>
  );
};

export default Main;
