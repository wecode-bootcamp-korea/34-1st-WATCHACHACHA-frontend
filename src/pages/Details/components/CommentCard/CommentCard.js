import React from "react";
import "./CommentCard.scss";

const CommentCard = () => {
  return (
    <section className="commentCard">
      <div className="commentCardWrapper">
        <span className="userNickName">김민석</span>
        <span className="userCommentText">님의 생각을 적어보세요</span>
      </div>
      <button className="addComment">코멘트 남기기</button>
    </section>
  );
};

export default CommentCard;
