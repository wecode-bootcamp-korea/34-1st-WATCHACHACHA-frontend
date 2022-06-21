import React from "react";
import HopeWatchButton from "../HopeWatchButton/HopeWatchButton";
import CommentButton from "../CommentButton/CommentButton";
import WatchingButton from "../WatchingButton/WatchingButton";
import IndifferenceButton from "../IndifferenceButton/IndifferenceButton";
import "./RatingUserInterface.scss";

const RatingUserInterface = () => {
  return (
    <div className="ratingUserInterface">
      <div className="interfaceWrapper">
        <HopeWatchButton />
        <CommentButton />
        <WatchingButton />
        <IndifferenceButton />
      </div>
    </div>
  );
};

export default RatingUserInterface;
