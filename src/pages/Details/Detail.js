import React from "react";
import ThumbnailImage from "./components/ThumbnailImage/ThumbnailImage";
import Infomation from "./components/Infomation/Infomation";
import DescriptionCard from "./components/DescriptionCard/DescriptionCard";
import "./Detail.scss";

const Detail = () => {
  return (
    <div className="detailPage">
      <ThumbnailImage />
      <Infomation />
      <DescriptionCard />
    </div>
  );
};

export default Detail;
