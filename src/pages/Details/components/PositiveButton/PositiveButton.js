import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./PositiveButton.scss";

const PositiveButton = ({ isChangedCondition, setIsChangedCondition }) => {
  const seeingButton = () => (
    <FontAwesomeIcon className="seeingIcon" icon={faPlus} size="1x" />
  );

  const bookMakerButton = () => (
    <FontAwesomeIcon
      className={
        isChangedCondition ? "bookMakerIcon" : "bookMakerIcon bookMakerIconPink"
      }
      icon={faBookmark}
      size="1x"
    />
  );

  const changedLikeButton = () =>
    setTimeout(() => {
      setIsChangedCondition(!isChangedCondition);
    }, 100);
  return (
    <button onClick={changedLikeButton} className="positiveButton">
      {isChangedCondition ? seeingButton() : bookMakerButton()}
      <div
        className={isChangedCondition ? "iconText" : "iconText iconTextPink"}
      >
        보고싶어요
      </div>
    </button>
  );
};

export default PositiveButton;
