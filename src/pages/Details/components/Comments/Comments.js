import React from "react";
import Comment from "../Comment/Comment";
import "./Comments.scss";

const Comments = () => {
  return (
    <div className="comments">
      <div className="titleWrapper">
        <h2 className="commentTitle">코멘트</h2>
        <p className="commentCount">1000+</p>
        <button className="commentMore">더보기</button>
      </div>
      <ul className="commentsList">
        <Comment />
      </ul>
    </div>
  );
};

export default Comments;
