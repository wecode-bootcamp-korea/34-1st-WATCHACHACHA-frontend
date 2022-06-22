import React from "react";
import "./Comment.scss";

const Comment = () => {
  return (
    <li>
      <div>
        <div>
          <img />
        </div>
        <p>아이디</p>
        <span>★</span>
        <div>
          <span>★</span>
          <span>2.5</span>
        </div>
      </div>
      <div>댓글내용</div>
      <div>
        <span>👍</span>
        <span>221</span>
      </div>
      <div>
        <span>👍</span>
        <span>10</span>
      </div>
      <button>좋아요</button>
    </li>
  );
};

export default Comment;
