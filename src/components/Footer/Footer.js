import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <section className="accumulated">
        <p className="signiture">
          지금까지 <em> ★3453개의 평가가</em> 쌓였어요.
        </p>
      </section>
      <div className="footerMain">
        <section className="information">
          <article className="service">
            <ul className="customerService">
              <li>서비스 이용약관</li>
              <li>ㅣ</li>
              <li>개인정보 처리방침</li>
              <li>ㅣ</li>
              <li>회사 안내</li>
            </ul>
          </article>
          <article className="contact">
            <ul className="toTheWeb">
              <li>고객센터</li>
              <li>ㅣ</li>
              <li>https://wecode.co.kr/</li>
            </ul>
            <ul>
              <li>광고문의</li>
              <li>ㅣ</li>
              <li>https://wecode.co.kr/</li>
            </ul>
            <ul>
              <li>제휴 및 대외 협력</li>
              <li>ㅣ</li>
              <li>https://wecode.co.kr/</li>
            </ul>
          </article>
          <article className="detailInformation">
            <ul>
              <li>주식회사 왓챠</li>
              <li>ㅣ</li>
              <li>대표 박태훈</li>
              <li>ㅣ</li>
              <li>서울특별시 서초구 강남대로 343 신덕빌딩 3층</li>
            </ul>
            <ul>
              <li>사업자등록 번호 123-45-67890</li>
            </ul>
            <ul>
              <li>로고</li>
              <li>© 2022 by WATCHA CLASSIC, Inc. All rights reserved.</li>
            </ul>
          </article>
        </section>
        <section className="socialLanguage">
          <div className="selections">
            <select className="languages">
              <option value="한국어" key="한국어" className="option">
                한국어
              </option>
            </select>
          </div>
          <div className="icons">
            <i className="fa-brands fa-facebook" />
            <i className="fa-brands fa-twitter" />
            <i className="fa-solid fa-b" />
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
