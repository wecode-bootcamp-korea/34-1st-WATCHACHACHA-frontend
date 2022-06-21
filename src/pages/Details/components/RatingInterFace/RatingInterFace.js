import React from "react";
import "./RatingInterFace.scss";
import RatingDetail from "../RatingDetail/RatingDetail";

const RatingInterFace = () => {
  return (
    <div className="ratingInterface">
      <div className="poster">이미지 태그 써야할 곳</div>
      <RatingDetail />
    </div>
  );
};

export default RatingInterFace;
