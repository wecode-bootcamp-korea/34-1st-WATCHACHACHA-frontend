import React from "react";
import CommentButton from "../CommentButton/CommentButton";
import PositiveButton from "../PositiveButton/PositiveButton";
import "./Information.scss";

const Information = ({
  isSeeingCondition,
  setIsSeeingCondition,
  isCommentCondition,
  addCommentButton,
}) => {
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
                  <PositiveButton
                    isSeeingCondition={isSeeingCondition}
                    setIsSeeingCondition={setIsSeeingCondition}
                  />
                  <CommentButton
                    isCommentCondition={isCommentCondition}
                    addCommentButton={addCommentButton}
                  />
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
