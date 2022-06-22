import React from "react";
import { useState } from "react";
import "./../Nav.scss";

export default function Input({ type, text }) {
  return (
    <div className="loginFormInput">
      <input type={type} name={type} placeholder={text} />
      // 진행중
      {/* <i class="fa-solid fa-circle-xmark deleteBtn" />
      <i class="fa-regular fa-lg fa-circle-check checkBtn" />
      <i class="fa-solid fa-circle-exclamation warningBtn " /> */}
    </div>
  );
}
