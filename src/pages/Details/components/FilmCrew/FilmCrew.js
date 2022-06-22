import React from "react";
import "./FilmCrew.scss";

const FilmCrew = () => {
  return (
    <article className="filmCrew">
      <h1 className="filmCrewTitle">출연/제작</h1>
      <ul className="filmCrewList">
        <li className="filmCrewListItem">
          <div className="imageWrapper">
            <img
              className="directorImage"
              src="/images/icon/star.png"
              alt="personImage"
            />
          </div>
          <div className="filmCrewWrapper">
            <p className="directorName">박훈정</p>
            <p className="directorPosition">감독</p>
          </div>
        </li>
      </ul>
    </article>
  );
};

export default FilmCrew;
