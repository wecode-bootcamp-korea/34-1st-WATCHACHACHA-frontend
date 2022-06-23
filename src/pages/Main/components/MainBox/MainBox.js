import React, { useState, useEffect } from "react";
import Film from "./../Film/Film";
import "./MainBox.scss";

const MainBox = ({ movies }) => {
  const [slidePx, setSlidePx] = useState(0);
  const [btnShow, setBtnShow] = useState("none");

  const toPrev = () => {
    console.log("toPrev", slidePx);
    if (slidePx < -1374) {
      setSlidePx(slidePx + 1375);
    } else {
      setBtnShow("none");
    }
  };

  const toNext = () => {
    console.log("toNext", slidePx);
    if (slidePx > -1376) {
      setSlidePx(slidePx - 1375);
      setBtnShow("");
    } else if (slidePx > 0) {
      setBtnShow("none");
    }
  };

  return (
    <div className="mainBox">
      <p className="filmTheme">1970's Films</p>
      <ul className="filmList">
        {movies.map(movie => (
          <Film slide={slidePx} key={movie.id} movie={movie} />
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
