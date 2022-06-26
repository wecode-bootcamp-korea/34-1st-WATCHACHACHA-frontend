import React from "react";
import CommentCard from "../CommentCard/CommentCard";
import Description from "../Description/Description";
import Aside from "../Aside/Aside";
import "./DescriptionCard.scss";

const DescriptionCard = ({ isSeeingCondition }) => {
  return (
    <div className="descriptionWrapper">
      <div className="descriptionCard">
        <div className="cardWrapper">
          {isSeeingCondition ? null : <CommentCard />}
          <Description />
        </div>
        <Aside />
      </div>
    </div>
  );
};

export default DescriptionCard;
