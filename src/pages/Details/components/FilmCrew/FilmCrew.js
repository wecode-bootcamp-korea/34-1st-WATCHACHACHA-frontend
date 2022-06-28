import React from "react";
import "./FilmCrew.scss";

const FilmCrew = () => {
  const data = null;
  return (
    <div className="filmCrew">
      <h2 className="filmCrewTitle">출연/제작</h2>
      <ul className="filmCrewList">
        <li className="filmCrewListItem">
          <div className="bundleWrapper">
            <div className="imageWrapper">
              <img className="crewImage" src={data} alt="personImage" />
            </div>
            <div className="filmCrewWrapper">
              <p className="crewName">{data}</p>
              <span className="crewPosition">{data}</span>
            </div>
          </div>
          <div className="bundleWrapper">
            <div className="imageWrapper">
              <img className="crewImage" src={data} alt="personImage" />
            </div>
            <div className="filmCrewWrapper">
              <p className="crewName">{data}</p>
              <span className="crewPosition">{data}</span>
              <span className="crewCaster">{data}</span>
            </div>
          </div>
          <div className="bundleWrapper">
            <div className="imageWrapper">
              <img className="crewImage" src={data} alt="personImage" />
            </div>
            <div className="filmCrewWrapper">
              <p className="crewName">{data}</p>
              <span className="crewPosition">{data}</span>
              <span className="crewCaster">{data}</span>
            </div>
          </div>
        </li>
        <li className="filmCrewListItem">
          <div className="bundleWrapper">
            <div className="imageWrapper">
              <img className="crewImage" src={data} alt="personImage" />
            </div>
            <div className="filmCrewWrapper">
              <p className="crewName">{data}</p>
              <span className="crewPosition">{data}</span>
              <span className="crewCaster">{data}</span>
            </div>
          </div>
          <div className="bundleWrapper">
            <div className="imageWrapper">
              <img className="crewImage" src={data} alt="personImage" />
            </div>
            <div className="filmCrewWrapper">
              <p className="crewName">{data}</p>
              <span className="crewPosition">{data}</span>
              <span className="crewCaster">{data}</span>
            </div>
          </div>
          <div className="bundleWrapper">
            <div className="imageWrapper">
              <img className="crewImage" src={data} alt="personImage" />
            </div>
            <div className="filmCrewWrapper">
              <p className="crewName">{data}</p>
              <span className="crewPosition">{data}</span>
              <span className="crewCaster">{data}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FilmCrew;
