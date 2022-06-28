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
        {USER_COMMENT_DATA.map((userCommentData, index) => (
          <Comment key={index} userCommentData={userCommentData} />
        ))}
      </ul>
    </div>
  );
};

const USER_COMMENT_DATA = [
  {
    id: 1,
    nickName: "치즈케이크",
    image_url: "/images/userProfile/penguin-img.png",
    ratingScore: 2.5,
    comment: "치즈치즈치즈치즈케이크",
    commentsCount: 10,
    likeCount: 221,
  },
  {
    id: 2,
    nickName: "치킨치킨",
    image_url: "/images/userProfile/profile-images.png",
    ratingScore: 4.5,
    comment: "영화는 치킨과 함께😤",
    commentsCount: 5,
    likeCount: 115,
  },
];

export default Comments;
