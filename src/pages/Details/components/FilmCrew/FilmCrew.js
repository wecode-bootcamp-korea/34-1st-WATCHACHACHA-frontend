import React from "react";
import "./FilmCrew.scss";

const FilmCrew = ({
  filmData,
  filmData: {
    film: { directors, actors },
  },
}) => {
  if (filmData === undefined) return;

  const people = [...directors, ...actors];

  return (
    <div className="filmCrew">
      <h2 className="filmCrewTitle">출연/제작</h2>
      <ul className="filmCrewList">
        {people.map(people => {
          return (
            <li key={people.name} className="filmCrewListItem">
              <div className="bundleWrapper">
                <div className="imageWrapper">
                  <img
                    className="crewImage"
                    src={people.image_url}
                    alt="personImage"
                  />
                </div>
                <div className="filmCrewWrapper">
                  <p className="crewName">{people.name}</p>
                  <span className="crewPosition">{people.role}</span>
                  <span className="crewCaster">{people.cast}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilmCrew;
