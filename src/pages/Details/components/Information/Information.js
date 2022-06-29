import React from "react";
import { useState } from "react";
import CommentButton from "../CommentButton/CommentButton";
import PositiveButton from "../PositiveButton/PositiveButton";
import ReviewTextBox from "../ReviewTextBox/ReviewTextBox";
import StarScore from "../StarScore/StarScore";
import "./Information.scss";

const Information = ({
  isSeeingCondition,
  setIsSeeingCondition,
  isCommentCondition,
  addCommentButton,
  filmData: {
    film: { name, release_date, image_url, genre, countries },
  },
}) => {
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);

  return (
    <section className="information">
      <div className="midWrapper">
        <div className="poster">
          <img className="posterImage" src={image_url} alt="poster_image" />
        </div>
        <div className="posterWrapper">
          <div className="posterDescription">
            <div className="posterTextWrapper">
              <h1 className="posterTitle">{name}</h1>
              <p className="posterCategoryWrapper">
                <span className="posterRelease">{release_date}</span>
                <span className="posterTextDivide">・</span>
                <span className="posterCategory">{genre[0]}</span>
                <span
                  style={genre[1] ? { display: "inline" } : { display: "none" }}
                  className="posterCategory"
                >
                  {genre[1]}
                </span>
                <span className="posterTextDivide">・</span>
                <span className="posterCountries">{countries}</span>
              </p>
            </div>
            <div className="ratingScoreWrapper">
              <span className="scoreAverage">평균</span>
              <span className="scoreStar">★</span>
              <span className="ratingScore">3.9</span>
              <span className="ratingSumPerson">27만명</span>
            </div>
            <div className="posterRatingButton">
              <div className="buttonWrapper">
                <div className="ratingScoreStar">
                  <div className="starImageWrapper">
                    <ReviewTextBox clicked={clicked} />
                    <StarScore
                      hovered={hovered}
                      setHovered={setHovered}
                      clicked={clicked}
                      setClicked={setClicked}
                    />
                  </div>
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
