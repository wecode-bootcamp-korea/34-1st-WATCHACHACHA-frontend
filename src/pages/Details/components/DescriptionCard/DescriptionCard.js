import React from "react";
import Description from "../Description/Description";
import Media from "../Media/Media";
import "./DescriptionCard.scss";

const DescriptionCard = () => {
  return (
    <div className="descriptionCard">
      <Description />
      <Media />
    </div>
  );
};

export default DescriptionCard;
