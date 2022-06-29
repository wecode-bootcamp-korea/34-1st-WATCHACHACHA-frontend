import React from "react";
import CommentModal from "../CommentModal/CommentModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "./CommentButton.scss";

const CommentButton = ({ isCommentCondition, addCommentButton }) => {
  return (
    <div>
      <button onClick={addCommentButton} className="commentButton">
        <FontAwesomeIcon icon={faPen} className="penIcon" />
        <div className="iconText">코멘트</div>
      </button>
      {!isCommentCondition && <CommentModal />}
    </div>
  );
};

export default CommentButton;
