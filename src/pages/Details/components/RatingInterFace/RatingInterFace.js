import React from "react";
import RatingStar from "../RatingStar/RatingStar";
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
        <div className="ratingUserInterface">
          <div className="interfaceWrapper">
            <button className="iconButton">
              <img
                className="iconImage"
                src="/images/icon/positiveAddIcon.png"
                alt="bookmaker"
              />
              <span className="iconText">보고싶어요</span>
            </button>
            <button className="iconButton">
              <img
                className="iconImage"
                src="/images/icon/penIcon.png"
                alt="bookmaker"
              />
              <span className="iconText">코멘트</span>
            </button>
            <button className="iconButton">
              <img
                className="iconImage"
                src="/images/icon/eyeIcon.png"
                alt="bookmaker"
              />
              <span className="iconText">보는중</span>
            </button>
            <button className="iconButton">
              <img
                className="iconImage"
                src="/images/icon/forbiddenIcon.png"
                alt="bookmaker"
              />
              <span className="iconText">관심없어요</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingInterFace;
