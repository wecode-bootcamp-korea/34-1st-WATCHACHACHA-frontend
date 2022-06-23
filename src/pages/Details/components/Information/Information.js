import React from "react";
import "./Information.scss";

const Information = () => {
  return (
    <section className="information">
      <div className="midWrapper">
        <div className="poster" />
        <div className="posterWrapper">
          <div className="posterDescription">
            <div className="posterTextWrapper">
              <h1 className="posterTitle">마녀 Part2. The Other One</h1>
              <p className="posterCategoryWrapper">
                <span className="posterRelease">2021</span>
                <span className="posterTextDivide">・</span>
                <span className="posterCategory">액션</span>
                <span className="posterTextDivide">・</span>
                <span className="posterCountries">한국</span>
              </p>
            </div>
            <div className="ratingScoreWrapper">
              <span className="scoreAverage">평균</span>
              <span className="scoreStar">★</span>
              <span className="ratingScore">2.8</span>
              <span className="ratingSumPerson">{`(${"7,454명"})`}</span>
            </div>
            <div className="posterRatingButton">
              <div className="buttonWrapper">
                <div className="ratingScoreStar">
                  <p className="ratingScoreTitle">평가하기</p>
                  <div className="starImageWrapper">{/* <img /> */}</div>
                </div>
                <div className="ratingButtonWrapper">
                  <button className="iconButton">
                    <img
                      className="iconImage"
                      src="/images/icon/positiveAddIcon.png"
                      alt="icon"
                    />
                    <div className="markerButton">보고싶어요</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
