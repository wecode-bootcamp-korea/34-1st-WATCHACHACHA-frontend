import React from "react";
import "./Comment.scss";

const Comment = () => {
  return (
    <>
      <li className="commentsListItem">
        <div className="commentUserInfo">
          <div className="imageWrapper">
            <img
              className="userImage"
              src="/images/userProfile/penguin-img.png"
              alt="userImage"
            />
          </div>
          <p className="userId">치즈케이크</p>
          <span className="userIcon">★</span>
          <div className="userRatingPoint">
            <span className="starIcon">★</span>
            <span className="userRatingScore">2.5</span>
          </div>
        </div>
        <div className="commentContent">
          한계를 매력으로 바꾸어 낸 제임스 캐머런의 창의성
        </div>
        <div className="likeWarpper">
          <span className="likeIcon">👍</span>
          <span className="likeCount">221</span>
          <span className="othersComment">💬</span>
          <span className="othersCommentCount">10</span>
        </div>
        <button className="likeButton">좋아요</button>
      </li>
      <li className="commentsListItem">
        <div className="commentUserInfo">
          <div className="imageWrapper">
            <img
              className="userImage"
              src="/images/userProfile/profile-images.png"
              alt="userImage"
            />
          </div>
          <p className="userId">치킨치킨</p>
          <span className="userIcon">★</span>
          <div className="userRatingPoint">
            <span className="starIcon">★</span>
            <span className="userRatingScore">2.5</span>
          </div>
        </div>
        <div className="commentContent">
          터미네이터가 주인공이 아니고.. 사라코너가 주인공
        </div>
        <div className="likeWarpper">
          <span className="likeIcon">👍</span>
          <span className="likeCount">151</span>
          <span className="othersComment">💬</span>
          <span className="othersCommentCount">5</span>
        </div>
        <button className="likeButton">좋아요</button>
      </li>
    </>
  );
};

export default Comment;
