import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./StarScore.scss";

const StarScore = ({ hovered, setHovered, clicked, setClicked }) => {
  return (
    <div className="reviewBox">
      {[1, 2, 3, 4, 5].map(number => (
        <FontAwesomeIcon
          icon={faStar}
          size="1x"
          className={`star ${
            (clicked >= number) | (hovered >= number) && "yellowStar"
          }`}
          key={number}
          id={number}
          onMouseEnter={() => setHovered(number)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => setClicked(number)}
        />
      ))}
    </div>
  );
};

export default StarScore;
