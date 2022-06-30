import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./PositiveButton.scss";

const PositiveButton = ({
  isSeeingCondition,
  setIsSeeingCondition,
  getUserName,
  postUserId,
}) => {
  const wishFilmSend = () => {
    changedSeeingButton();
    getUserName();
    postUserId();
  };

  const changedSeeingButton = () =>
    setTimeout(() => {
      setIsSeeingCondition(!isSeeingCondition);
    }, 200);
  clearTimeout(changedSeeingButton);

  return (
    <button onClick={wishFilmSend} className="positiveButton">
      <FontAwesomeIcon
        className={
          isSeeingCondition ? "seeingIcon" : "bookMakerIcon bookMakerIconPink"
        }
        icon={isSeeingCondition ? faPlus : faBookmark}
        size="1x"
      />
      <div className={isSeeingCondition ? "iconText" : "iconText iconTextPink"}>
        보고싶어요
      </div>
    </button>
  );
};

export default PositiveButton;
