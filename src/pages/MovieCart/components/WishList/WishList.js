import React from "react";
import { Link } from "react-router-dom";
import "./WishList.scss";
const WishList = ({ wish }) => {
  return (
    <div>
      <li className="wishFilm" id={wish.id}>
        <Link to={`/detail/${wish.id}`} className="wishFilmDetail">
          <div className="wishPosterBox">
            <img
              src="/images/poster/copyrightfree.jpg"
              alt="영화"
              className="wishFilmPosters"
            />
          </div>
          <div className="wishFilmDescription">
            <p className="wishFilmName">{wish.name}</p>
          </div>
        </Link>
      </li>
    </div>
  );
};

export default WishList;
