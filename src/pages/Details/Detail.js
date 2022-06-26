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
    setTimeout(async () => {
      const res = await fetch("data/detailData.json");
      const data = await res.json();
      setFilmsData(data);
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <div>
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
      {isLoading && <SkeletonUi />}
    </div>
  );
};

export default Detail;
