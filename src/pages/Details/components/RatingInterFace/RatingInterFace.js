import React from "react";
import RatingStar from "../RatingStar/RatingStar";
import RatingUserInterface from "../RatingUserInterFace/RatingUserInterface";
import "./RatingInterFace.scss";

const RatingInterFace = () => {
  return (
    <div className="ratingInterface">
      <div className="poster">이미지 태그 써야할 곳</div>
      <div className="ratingDetail">
        <h1 className="ratingTitle">
          <p className="movieTitle">마녀&#40;魔女&#41; Part2. The Other One</p>
          <p className="movieCategory">2021 ・ 한국 ・ 액션</p>
        </h1>
        <div className="ratingInfo">평균 ★2.8 &#40;6,414명&#41;</div>
        <RatingStar />
        <RatingUserInterface />
      </div>
    </div>
  );
};

export default RatingInterFace;
