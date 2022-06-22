import React from "react";
import "./Aside.scss";

const Aside = () => {
  return (
    <aside className="aside">
      <section class="gallery">
        <h2 className="galleryTitle">갤러리</h2>
        <ul className="galleryList">
          <li className="galleryListItem">
            {/* <img className="filmsImage" /> */}
          </li>
          <li className="galleryListItem">
            {/* <img className="filmsImage" /> */}
          </li>
          <li className="galleryListItem">
            {/* <img className="filmsImage" /> */}
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default Aside;
