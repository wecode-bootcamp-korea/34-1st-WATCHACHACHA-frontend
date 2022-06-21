import React from "react";
import HopeWatchButton from "../HopeWatchButton/HopeWatchButton";
import "./RatingUserInterface.scss";

const RatingUserInterface = () => {
  return (
    <div className="ratingUserInterface">
      <div className="interfaceWrapper">
        <HopeWatchButton />
        <button className="commentButton iconButton">
          <img
            className="iconImage"
            src="/images/icon/penIcon.png"
            alt="bookmaker"
          />
          <span className="iconText">코멘트</span>
        </button>
        <button className="watchingButton iconButton">
          <img
            className="iconImage"
            src="/images/icon/eyeIcon.png"
            alt="bookmaker"
          />
          <span className="iconText">보는중</span>
        </button>
        <button className="indifferenceButton iconButton">
          <img
            className="iconImage"
            src="/images/icon/forbiddenIcon.png"
            alt="bookmaker"
          />
          <span className="iconText">관심없어요</span>
        </button>
      </div>
    </div>
  );
};

export default RatingUserInterface;
