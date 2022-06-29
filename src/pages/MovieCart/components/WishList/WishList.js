import React from "react";
import { Link } from "react-router-dom";
import "./WishList.scss";
const WishList = () => {
  //{wish}
  return (
    <div>
      <li className="wishFilm">
        {/* <li className="film" id={wish.id}> */}
        {/* <Link to={`/detail/${id}`} className="filmDetail"> */}
        <Link to="/detail/" className="wishFilmDetail">
          <div className="wishPosterBox">
            <img
              src="/images/poster/copyrightfree.jpg"
              alt="영화"
              className="wishFilmPosters"
            />
          </div>
          <div className="wishFilmDescription">
            <p className="wishFilmName">타이타닉</p>
          </div>
        </Link>
      </li>
    </div>
  );
};

export default WishList;
