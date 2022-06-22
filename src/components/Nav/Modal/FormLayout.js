import React from "react";
import "./../Nav.scss";

export default function FormLayout({ children }) {
  return (
    <div className="loginBox">
      <header>
        <span className="logo">
          <span className="watchaPointColor">WATCHA</span> CLASSIC
        </span>
      </header>
      {children}
    </div>
  );
}
