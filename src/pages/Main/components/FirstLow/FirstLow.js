import React from "react";
import { Link } from "react-router-dom";
import "./FirstLow.scss";

const FirstLow = () => {
  return (
    <li className="firstLow">
      <Link to="/details" className="film1Detail">
        <div className="posterBox">
          <img
            src="/images/poster/TheGreatGatsby.jpg"
            alt="개츠비"
            className="filmPosters"
          />
        </div>
        <div className="filmDescription">
          <p className="filmName">위대한 개츠비</p>
          <p className="filmYear">1920 ▪ 미국</p>
          <p className="filmAverage">평균★3.7</p>
        </div>
      </Link>
    </li>
  );
};

export default FirstLow;
