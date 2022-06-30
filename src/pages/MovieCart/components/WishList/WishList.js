import React from "react";
import { Link } from "react-router-dom";
import "./WishList.scss";
const WishList = ({ wish }) => {
  if (wish.length === 0) return;
  return (
    <div>
      {wish.map(wishEl => (
        <li className="wishFilm" id={wishEl.id} key={wishEl.id}>
          <Link to={`/detail/${wishEl.id}`} className="wishFilmDetail">
            <div className="wishPosterBox">
              <img
                src={wishEl.image_url}
                alt="영화"
                className="wishFilmPosters"
              />
            </div>
            <div className="wishFilmDescription">
              <p className="wishFilmName">{wishEl.name}</p>
            </div>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default WishList;
