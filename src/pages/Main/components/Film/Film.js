import React from "react";
import { Link } from "react-router-dom";
import "./Film.scss";

const Film = ({ movie, slide }) => {
  const { id, name, release_date, image_url, country, running_time_min } =
    movie;
  //if (movie === undefined) return;
  return (
    <li
      className="film"
      id={id}
      style={{
        transform: `translateX(${slide}px)`,
        transition: "0.5s ease",
      }}
    >
      <Link to={`/detail/${id}`} className="filmDetail">
        <div className="posterBox">
          <img src={image_url} alt="개츠비" className="filmPosters" />
        </div>
        <div className="filmDescription">
          <p className="filmName">{name}</p>
          <p className="filmYear">
            {release_date} • {country}
          </p>
          <p className="filmAverage">⏱️{running_time_min}분</p>
        </div>
      </Link>
    </li>
  );
};

export default Film;
