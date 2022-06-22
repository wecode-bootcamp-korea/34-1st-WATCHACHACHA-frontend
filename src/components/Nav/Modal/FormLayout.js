import React from "react";
import "./../Nav.scss";

export default function FormLayout(props) {
  return (
    <div className="loginBox">
      <header>
        <span className="logo">
          <span className="watchaPointColor">WATCHA</span> CLASSIC
        </span>
      </header>
      {props.children}
    </div>
  );
}
