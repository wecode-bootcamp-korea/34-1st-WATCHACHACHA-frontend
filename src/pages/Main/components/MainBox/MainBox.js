import React, { useState } from "react";
import "./MainBox.scss";
import FirstLow from "./../FirstLow/FirstLow";

const MainBox = ({ movies }) => {
  const [slidePx, setSlidePx] = useState(0);
  const [btnShow, setBtnShow] = useState("none");
  const toPrev = () => {
    if (slidePx < -1374) {
      setSlidePx(slidePx + 1375);
    } else {
      setBtnShow("none");
    }
  };
  const toNext = () => {
    if (slidePx > -1376) {
      setSlidePx(slidePx - 1375);
      setBtnShow("");
    }
  };
  return (
    <div className="mainBox1">
      <p className="filmTheme1">1970's Films</p>
      <ul className="filmList">
        {movies.map(movie => (
          <FirstLow
            slide={slidePx}
            key={movie.id}
            id={movie.id}
            name={movie.name}
            date={movie.release_date}
            url={movie.image_url}
          />
        ))}
      </ul>
      <div
        className="prevBtn"
        onClick={toPrev}
        style={{ display: `${btnShow}` }}
      >
        <i className="fa-solid fa-chevron-left" />
      </div>
      <div
        className="nextBtn"
        onClick={toNext}
        style={{ display: `${!btnShow}` }}
      >
        <i className="fa-solid fa-chevron-right" />
      </div>
    </div>
  );
};

export default MainBox;
