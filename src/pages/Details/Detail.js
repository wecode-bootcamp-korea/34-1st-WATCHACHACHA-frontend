import React from "react";
import { useState, useEffect } from "react";
import SkeletonUi from "./components/SkeletonUi/SkeletonUi";
import ThumbnailImage from "./components/ThumbnailImage/ThumbnailImage";
import Information from "./components/Information/Information";
import DescriptionCard from "./components/DescriptionCard/DescriptionCard";
import "./Detail.scss";

const Detail = () => {
  const [filmsData, setFilmsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isSeeingCondition, setIsSeeingCondition] = useState(true);
  const [isCommentCondition, setIsCommentCondition] = useState(true);

  const addCommentButton = () => setIsCommentCondition(!isCommentCondition);

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
            isSeeingCondition={isSeeingCondition}
            setIsSeeingCondition={setIsSeeingCondition}
            isCommentCondition={isCommentCondition}
            addCommentButton={addCommentButton}
          />
          <DescriptionCard
            isSeeingCondition={isSeeingCondition}
            isCommentCondition={isCommentCondition}
            addCommentButton={addCommentButton}
          />
        </div>
      )}
    </div>
  );
};

export default Detail;
