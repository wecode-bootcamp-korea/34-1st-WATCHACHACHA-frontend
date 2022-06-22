import React from "react";
import Description from "../Description/Description";
import Aside from "../Aside/Aside";
import "./DescriptionCard.scss";

const DescriptionCard = () => {
  return (
    <div class="descriptionWrapper">
      <div className="descriptionCard">
        <Description />
        <Aside />
      </div>
    </div>
  );
};

export default DescriptionCard;
