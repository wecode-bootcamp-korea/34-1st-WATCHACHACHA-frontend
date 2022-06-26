import React from "react";
import "./ThumbnailImage.scss";

const ThumbnailImage = ({ filmsData: { films } }) => {
  if (films === undefined) return null;
  return (
    <div className="thumbnailImage">
      <img className="coverImage" src={films.image_url} alt="poster_image" />
      {/* <ul className="rankingInfoList" /> */}
    </div>
  );
};

export default ThumbnailImage;
