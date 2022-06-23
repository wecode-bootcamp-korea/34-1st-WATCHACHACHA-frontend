import React from "react";
import { Link } from "react-router-dom";
import "./Film.scss";

const Film = ({ movie, slide }) => {
  const { name, release_date, image_url } = movie;
  return (
    <li
      className="film"
      style={{
        transform: `translateX(${slide}px)`,
        transition: "0.5s ease",
      }}
    >
      <Link to="/details" className="filmDetail">
        <div className="posterBox">
          <img src={image_url} alt="개츠비" className="filmPosters" />
        </div>
        <div className="filmDescription">
          <p className="filmName">{name}</p>
          <p className="filmYear">{release_date} ▪ 미국</p>
          <p className="filmAverage">평균★3.7</p>
        </div>
      </Link>
    </li>
  );
};

export default Film;
