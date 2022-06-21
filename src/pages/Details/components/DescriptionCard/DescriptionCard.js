import React from "react";
import Description from "../Description/Description";
import Media from "../Media/Media";
import "./DescriptionCard.scss";

const DescriptionCard = () => {
  return (
    <div class="descriptionWrapper">
      <div className="descriptionCard">
        <Description />
        <Media />
      </div>
    </div>
  );
};

export default DescriptionCard;
