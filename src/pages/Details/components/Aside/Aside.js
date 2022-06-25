import React from "react";
import "./Aside.scss";

const Aside = () => {
  return (
    <aside className="aside">
      <section className="gallery">
        <h2 className="galleryTitle">갤러리</h2>
        <ul className="galleryList">
          <li className="galleryListItem">
            <div className="imageWrapper">
              <img
                className="filmsImage"
                src="https://an2-img.amz.wtchn.net/image/v2/QQAccyHAs9cg3nol0ueyVg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqRXZZM3A1YjJGdGNYbHNiV2RqZEcxMGNucHdlV2NpTENKeElqbzRNQ3dpZHlJNk1Ua3lNSDAuQjlUU2R5VFBuX3N2NlpjZDI2ZTdrS0JpR21mZ2hsNDZqNFNMYWY2eVVjOA"
                alt="filmsImage"
              />
            </div>
          </li>
          <li className="galleryListItem">
            <div className="imageWrapper">
              <img
                className="filmsImage"
                src="https://an2-img.amz.wtchn.net/image/v2/innGdCYWbugsSe8TWR7tQA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqRXZiR1J1Wm5wbk4zZG9aR0YzZWpKd2F6ZGxORGdpTENKeElqbzRNQ3dpZHlJNk1Ua3lNSDAuV2JacjNvOEJLbEZvYzJNeV95b2M1SHY4YnlwSmJkTDVoRlc5YVBCWWxhRQ"
                alt="filmsImage"
              />
            </div>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default Aside;
