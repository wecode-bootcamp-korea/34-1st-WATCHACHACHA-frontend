import React from "react";
import "./Information.scss";

const Information = () => {
  return (
    <section className="information">
      <div className="ratingInterface">
        <div className="poster" />
        <div className="ratingDetail">
          <div className="ratingTitle">
            <h1 className="movieTitle">
              마녀&#40;魔女&#41; Part2. The Other One
            </h1>
            <p className="movieCategory">2021 ・ 한국 ・ 액션</p>
          </div>
          <div className="ratingInfo">
            <span className="ratingInfoText">평균</span>
            <span className="ratingAverage">{`★${"2.8"}`}</span>
            <span className="ratingSumPerson">&#40;6,414명&#41;</span>
          </div>
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

export default Information;
