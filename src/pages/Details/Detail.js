import React from "react";
import { useState, useEffect } from "react";
import ThumbnailImage from "./components/ThumbnailImage/ThumbnailImage";
import Information from "./components/Information/Information";
import DescriptionCard from "./components/DescriptionCard/DescriptionCard";
import "./Detail.scss";

const Detail = () => {
  const [filmsData, setFilmsData] = useState([]);
  const [isChangedCondition, setIsChangedCondition] = useState(true);

  useEffect(() => {
    fetch("data/detailData.json")
      .then(data => data.json())
      .then(setFilmsData);
  }, []);
  return (
    <div className="detailPage">
      <ThumbnailImage filmsData={filmsData} />
      <Information
        isChangedCondition={isChangedCondition}
        setIsChangedCondition={setIsChangedCondition}
      />
      <DescriptionCard isChangedCondition={isChangedCondition} />
    </div>
  );
};

export default Detail;
