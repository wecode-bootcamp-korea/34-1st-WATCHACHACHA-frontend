import React from "react";
import "../../../../styles/common.scss";
import "./IndifferenceButton.scss";

const IndifferenceButton = () => {
  return (
    <button className="indifferenceButton iconButton">
      <img
        className="iconImage"
        src="/images/icon/forbiddenIcon.png"
        alt="bookmaker"
      />
      <span className="iconText">관심없어요</span>
    </button>
  );
};

export default IndifferenceButton;
