import React from "react";
import "./Aside.scss";

const Aside = () => {
  return (
    <aside className="aside">
      <section className="gallery">
        <h2 className="galleryTitle">갤러리</h2>
        <ul className="galleryList">
          <li className="galleryListItem" />
          <li className="galleryListItem" />
        </ul>
      </section>
    </aside>
  );
};

export default Aside;
