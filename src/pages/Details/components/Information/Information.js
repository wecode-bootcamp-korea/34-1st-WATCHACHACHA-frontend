import React from "react";
import "./Information.scss";

const Information = () => {
  // 폰트어썸 사용법 익히기
  // 해당 코드 분석하기
  return (
    <section className="information">
      <div className="midWrapper">
        <div className="poster">
          <img
            className="posterImage"
            src="https://upload.wikimedia.org/wikipedia/ko/thumb/d/df/%ED%84%B0%EB%AF%B8%EB%84%A4%EC%9D%B4%ED%84%B01_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/220px-%ED%84%B0%EB%AF%B8%EB%84%A4%EC%9D%B4%ED%84%B01_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"
            alt="poster_image"
          />
        </div>
        <div className="posterWrapper">
          <div className="posterDescription">
            <div className="posterTextWrapper">
              <h1 className="posterTitle">터미네이터</h1>
              <p className="posterCategoryWrapper">
                <span className="posterRelease">1984</span>
                <span className="posterTextDivide">・</span>
                <span className="posterCategory">액션/SF</span>
                <span className="posterTextDivide">・</span>
                <span className="posterCountries">영국/미국</span>
              </p>
            </div>
            <div className="ratingScoreWrapper">
              <span className="scoreAverage">평균</span>
              <span className="scoreStar">★</span>
              <span className="ratingScore">3.9</span>
              <span className="ratingSumPerson">{`(${"27만명"})`}</span>
            </div>
            <div className="posterRatingButton">
              <div className="buttonWrapper">
                <div className="ratingScoreStar">
                  <p className="ratingScoreTitle">평가하기</p>
                  <div className="starImageWrapper" />
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
