import React from "react";
import CommentCard from "../CommentCard/CommentCard";
import Description from "../Description/Description";
import Aside from "../Aside/Aside";
import "./DescriptionCard.scss";

const DescriptionCard = ({
  isSeeingCondition,
  isCommentCondition,
  addCommentButton,
}) => {
  return (
    <div className="descriptionWrapper">
      <div className="descriptionCard">
        <div className="cardWrapper">
          {!(isSeeingCondition && isCommentCondition) && (
            <CommentCard
              isCommentCondition={isCommentCondition}
              addCommentButton={addCommentButton}
            />
          )}
          <Description />
        </div>
        <Aside />
      </div>
    </div>
  );
};

export default DescriptionCard;
