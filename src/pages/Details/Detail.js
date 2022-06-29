import React from "react";
import { useState, useEffect } from "react";
import SkeletonUi from "./components/SkeletonUi/SkeletonUi";
import ThumbnailImage from "./components/ThumbnailImage/ThumbnailImage";
import Information from "./components/Information/Information";
import DescriptionCard from "./components/DescriptionCard/DescriptionCard";

const Detail = () => {
  const [filmsData, setFilmsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isSeeingCondition, setIsSeeingCondition] = useState(true);
  const [isCommentCondition, setIsCommentCondition] = useState(true);

  const addCommentButton = () => setIsCommentCondition(!isCommentCondition);

  useEffect(() => {
    fetch(`http://10.58.7.17:8000/films/1`)
      .then(res => res.json())
      .then(res => setFilmsData(res))
      .then(() => setIsLoading(false));
  }, []);

  if (isLoading) return <SkeletonUi />;

  return (
    <div className="detailPage">
      <ThumbnailImage />
      <Information
        isSeeingCondition={isSeeingCondition}
        setIsSeeingCondition={setIsSeeingCondition}
        isCommentCondition={isCommentCondition}
        addCommentButton={addCommentButton}
        filmData={filmsData}
      />
      <DescriptionCard
        isSeeingCondition={isSeeingCondition}
        isCommentCondition={isCommentCondition}
        addCommentButton={addCommentButton}
        filmData={filmsData}
      />
    </div>
  );
};

export default Detail;
