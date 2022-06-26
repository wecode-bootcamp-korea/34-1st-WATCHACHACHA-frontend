import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "./CommentButton.scss";

const CommentButton = () => {
  return (
    <button className="commentButton">
      <FontAwesomeIcon icon={faPen} className="penIcon" />
      <div className="iconText">코멘트</div>
    </button>
  );
};

export default CommentButton;
