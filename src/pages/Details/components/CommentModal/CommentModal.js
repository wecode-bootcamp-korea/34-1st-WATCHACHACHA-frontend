import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faSkull } from "@fortawesome/free-solid-svg-icons";
import "./CommentModal.scss";

const CommentModal = ({ addCommentButton }) => {
  const [userComment, setUserComment] = useState("");
  const enabled = userComment.length > 0;

  const enabledSave = event => {
    const { value } = event.target;
    setUserComment(value);
  };

  return (
    <div className="modal">
      <div onClick={addCommentButton} className="commentModal" />
      <div className="modalArea">
        <div className="titleWrapper">
          <h2>치킨</h2>
          <button onClick={addCommentButton} className="closeButton">
            <FontAwesomeIcon icon={faXmark} size="2x" className="penIcon" />
          </button>
        </div>
        <input
          onChange={enabledSave}
          className="commentText"
          placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요."
          type="text"
        />
        <div className="saveButtonWrapper">
          <div className="iconWrapper">
            <FontAwesomeIcon
              icon={faComments}
              size="1x"
              className="commentIcon"
            />
            <FontAwesomeIcon icon={faSkull} size="1x" className="skullIcon" />
          </div>
          <button disabled={!enabled} className="saveButton">
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
