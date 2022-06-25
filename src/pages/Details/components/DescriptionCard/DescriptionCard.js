import React from "react";
import Description from "../Description/Description";
import Aside from "../Aside/Aside";
import "./DescriptionCard.scss";

const DescriptionCard = ({ filmsData }) => {
  return (
    <div className="descriptionWrapper">
      <div className="descriptionCard">
        <Description filmsData={filmsData} />
        <Aside />
      </div>
    </div>
  );
};

export default DescriptionCard;
