import React from "react";
import "../../../../styles/common.scss";
import "./CommentButton.scss";

const CommentButton = () => {
  return (
    <button className="commentButton iconButton">
      <img
        className="iconImage"
        src="/images/icon/penIcon.png"
        alt="bookmaker"
      />
      <span className="iconText">코멘트</span>
    </button>
  );
};

export default CommentButton;
