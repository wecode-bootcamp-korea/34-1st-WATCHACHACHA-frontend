import React from "react";
import "./Comment.scss";

const Comment = () => {
  return (
    <li className="commentsListItem">
      <div className="commentUserInfo">
        <div className="imageWrapper">
          <img
            className="userImage"
            src="/images/icon/star.png"
            alt="userImage"
          />
        </div>
        <p className="userId">아이디</p>
        <span className="userIcon">★</span>
        <div className="userRatingPoint">
          <span className="starIcon">★</span>
          <span className="userRatingScore">2.5</span>
        </div>
      </div>
      <div className="commentContent">
        캐릭터들에 할애되는 소모가 크게 되고 결국 소녀의 매력을 모두 보이기에는
        기대감을 만들기도 전에 영화가 끝이 나긴하지만 라는 세계관의 확장을 이끌
        도입부라 생각한다
      </div>
      <div className="likeWarpper">
        <span className="likeIcon">👍</span>
        <span className="likeCount">221</span>
        <span className="othersComment">💬</span>
        <span className="othersCommentCount">10</span>
      </div>
      <button className="likeButton">좋아요</button>
    </li>
  );
};

export default Comment;
