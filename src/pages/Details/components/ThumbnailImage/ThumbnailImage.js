import React from "react";
import "./ThumbnailImage.scss";

const ThumbnailImage = () => {
  return (
    <div className="thumbnailImage">
      <img
        className="coverImage"
        src="https://an2-img.amz.wtchn.net/image/v2/pVOBXBnkqXPIdbb4z7xFSQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqRXZlVzAzY1dSNGMzRTBjR0V4T1dGMVlYYzNhV29pTENKeElqbzRNQ3dpZHlJNk1Ua3lNSDAuRnJwd0Q0N290dWphc2ZTOXlqQ09ldkhDX0o0a0tocG9pa3ktTnNab0tsOA"
        alt="poster_image"
      />
      <ul className="rankingInfoList" />
    </div>
  );
};

export default ThumbnailImage;
