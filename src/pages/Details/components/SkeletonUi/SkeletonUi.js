import React from "react";
import "./SkeletonUi.scss";

const SkeletonElement = () => {
  return (
    <div className="skeletonWrapper">
      <div className="skThumb" />
      <div className="skInfo">
        <div className="skMidWrapper">
          <div className="skPoster" />
          <div className="skPosterWrapper">
            <div className="skPosterDescription">
              <div className="skTextWrapper" />
              <div className="skScoreWrapper" />
              <div className="skRatingButton" />
            </div>
          </div>
        </div>
      </div>
      <div className="skCard">
        <div className="skDescriptionCard">
          <div className="skDescription" />
          <div className="skAside" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonElement;
