import React from "react";
import CommentModal from "../CommentModal/CommentModal";
import "./CommentCard.scss";

const CommentCard = ({ isCommentCondition, addCommentButton }) => {
  return (
    <div>
      <section className="commentCard">
        <div className="commentCardWrapper">
          <span className="userNickName">김민석</span>
          <span className="userCommentText">님의 생각을 적어보세요</span>
        </div>
        <button onClick={addCommentButton} className="addComment">
          코멘트 남기기
        </button>
      </section>
      {!isCommentCondition ? (
        <CommentModal addCommentButton={addCommentButton} />
      ) : null}
    </div>
  );
};

export default CommentCard;
