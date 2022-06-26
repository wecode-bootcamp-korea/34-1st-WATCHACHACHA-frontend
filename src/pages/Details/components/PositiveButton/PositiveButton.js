import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./PositiveButton.scss";

const PositiveButton = ({ isSeeingCondition, setIsSeeingCondition }) => {
  const seeingButton = () => (
    <FontAwesomeIcon className="seeingIcon" icon={faPlus} size="1x" />
  );

  const bookMakerButton = () => (
    <FontAwesomeIcon
      className={
        isSeeingCondition ? "bookMakerIcon" : "bookMakerIcon bookMakerIconPink"
      }
      icon={faBookmark}
      size="1x"
    />
  );

  const changedSeeingButton = () =>
    setTimeout(() => {
      setIsSeeingCondition(!isSeeingCondition);
    }, 100);
  return (
    <button onClick={changedSeeingButton} className="positiveButton">
      {isSeeingCondition ? seeingButton() : bookMakerButton()}
      <div className={isSeeingCondition ? "iconText" : "iconText iconTextPink"}>
        보고싶어요
      </div>
    </button>
  );
};

export default PositiveButton;
