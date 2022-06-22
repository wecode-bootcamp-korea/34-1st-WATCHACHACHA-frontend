import React from "react";
import { Link } from "react-router-dom";
import "./FirstLow.scss";

const FirstLow = ({ id, name, date, url, slide }) => {
  return (
    <li
      className="firstLow"
      id={id}
      style={{
        transform: `translateX(${slide}px)`,
        transition: "0.5s ease",
      }}
    >
      <Link to="/details" className="film1Detail">
        <div className="posterBox">
          <img src={url} alt="개츠비" className="filmPosters" />
        </div>
        <div className="filmDescription">
          <p className="filmName">{name}</p>
          <p className="filmYear">{date} ▪ 미국</p>
          <p className="filmAverage">평균★3.7</p>
        </div>
      </Link>
    </li>
  );
};

export default FirstLow;
