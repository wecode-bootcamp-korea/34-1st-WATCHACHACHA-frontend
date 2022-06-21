import React from "react";
import "../../../../styles/common.scss";
import "./WatchingButton.scss";

const WatchingButton = () => {
  return (
    <button className="watchingButton iconButton">
      <img
        className="iconImage"
        src="/images/icon/eyeIcon.png"
        alt="bookmaker"
      />
      <span className="iconText">보는중</span>
    </button>
  );
};

export default WatchingButton;
