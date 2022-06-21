import React from "react";
import "../../../../styles/common.scss";
import "./HopeWatchButton.scss";

const HopeWatchButton = () => {
  return (
    <button className="hopeWatchButton iconButton">
      <img
        className="iconImage"
        src="/images/icon/positiveAddIcon.png"
        alt="bookmaker"
      />
      <span className="iconText">보고싶어요</span>
    </button>
  );
};

export default HopeWatchButton;
