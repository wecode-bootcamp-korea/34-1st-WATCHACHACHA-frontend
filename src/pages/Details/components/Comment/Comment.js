import React from "react";
import "./Comment.scss";

const Comment = ({
  userCommentData: {
    nickName,
    image_url,
    ratingScore,
    comment,
    commentsCount,
    likeCount,
  },
}) => {
  return (
    <li className="commentsListItem">
      <div className="commentUserInfo">
        <div className="imageWrapper">
          <img className="userImage" src={image_url} alt="userImage" />
        </div>
        <p className="userId">{nickName}</p>
        <span className="userIcon">★</span>
        <div className="userRatingPoint">
          <span className="starIcon">★</span>
          <span className="userRatingScore">{ratingScore}</span>
        </div>
      </div>
      <div className="commentContent">{comment}</div>
      <div className="likeWarpper">
        <span className="likeIcon">👍</span>
        <span className="likeCount">{likeCount}</span>
        <span className="othersComment">💬</span>
        <span className="othersCommentCount">{commentsCount}</span>
      </div>
      <button className="likeButton">좋아요</button>
    </li>
  );
};

export default Comment;
