import React from "react";
import { useState, useEffect } from "react";
import SkeletonUi from "./components/SkeletonUi/SkeletonUi";
import ThumbnailImage from "./components/ThumbnailImage/ThumbnailImage";
import Information from "./components/Information/Information";
import DescriptionCard from "./components/DescriptionCard/DescriptionCard";
import "./Detail.scss";

const Detail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [filmsData, setFilmsData] = useState([]);
  const [isChangedCondition, setIsChangedCondition] = useState(true);

  useEffect(() => {
    fetch("data/detailData.json")
      .then(res => res.json())
      .then(setFilmsData);
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading && <SkeletonUi />}
      {!isLoading && (
        <div className="detailPage">
          <ThumbnailImage filmsData={filmsData} />
          <Information
            isChangedCondition={isChangedCondition}
            setIsChangedCondition={setIsChangedCondition}
          />
          <DescriptionCard isChangedCondition={isChangedCondition} />
        </div>
      )}
    </div>
  );
};

export default Detail;
