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
  const data = null;
  return (
    <section className="information">
      <div className="midWrapper">
        <div className="poster">
          <img className="posterImage" src={data} alt="poster_image" />
        </div>
        <div className="posterWrapper">
          <div className="posterDescription">
            <div className="posterTextWrapper">
              <h1 className="posterTitle">{data}</h1>
              <p className="posterCategoryWrapper">
                <span className="posterRelease">{data}</span>
                <span className="posterTextDivide">・</span>
                <span className="posterCategory">{data}</span>
                <span className="posterTextDivide">・</span>
                <span className="posterCountries">{data}</span>
              </p>
            </div>
            <div className="ratingScoreWrapper">
              <span className="scoreAverage">평균</span>
              <span className="scoreStar">★</span>
              <span className="ratingScore">{data}</span>
              <span className="ratingSumPerson">{data}</span>
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
