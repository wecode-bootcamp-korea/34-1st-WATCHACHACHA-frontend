import React from "react";
import "./Information.scss";

const Infomation = () => {
  return (
    <section className="infomation">
      <div className="ratingInterface">
        <div className="poster">이미지 태그 써야할 곳</div>
        <div className="ratingDetail">
          <h1 className="ratingTitle">
            <p className="movieTitle">
              마녀&#40;魔女&#41; Part2. The Other One
            </p>
            <p className="movieCategory">2021 ・ 한국 ・ 액션</p>
          </h1>
          <div className="ratingInfo">평균 ★2.8 &#40;6,414명&#41;</div>
          <div className="ratingStar">
            <p className="rating">평가하기</p>
            <img src="/images/icon/star.png" alt="ratingStar" />
          </div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infomation;
