import React, { useState } from "react";
import Film from "./../Film/Film";
import "./MainBox.scss";

const MainBox = ({ movies, theme, loading }) => {
  const [slidePx, setSlidePx] = useState(0);

  const toPrev = () => {
    //if (slidePx < 0) setSlidePx(slidePx + 1375);
    slidePx < 0 && setSlidePx(slidePx + 1375);
  };

  const toNext = () => {
    //if (slidePx > -2750) setSlidePx(slidePx - 1375);
    slidePx > -1375 && setSlidePx(slidePx - 1375);
  };

  //if (movies === undefined) return;

  return (
    <div className="mainBox">
      {/*목데이터에 따로 작성해야 한다*/}
      <p className="filmTheme">{theme.title}</p>
      {/* <p className="filmTheme">{movies[1]?.theme}</p> */}
      {/* <p className="filmTheme">{movies[0].theme}</p> */}
      <ul className="filmList">
        {movies.map(movie => (
          <Film slide={slidePx} key={movie.id} movie={movie} />
        ))}
      </ul>
      <div
        className="prevBtn"
        onClick={toPrev}
        style={{ display: slidePx === 0 ? "none" : "" }}
      >
        <i className="fa-solid fa-chevron-left" />
      </div>
      <div
        className="nextBtn"
        onClick={toNext}
        style={{ display: slidePx === -1375 ? "none" : "" }}
      >
        <i className="fa-solid fa-chevron-right" />
      </div>
    </div>
  );
};

export default MainBox;
