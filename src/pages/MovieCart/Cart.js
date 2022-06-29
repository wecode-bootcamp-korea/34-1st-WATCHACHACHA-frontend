import React, { useEffect, useState } from "react";
import WishList from "./components/WishList/WishList";
import "./Cart.scss";

const Cart = () => {
  //const [wish, setWish] = useState([]);
  // useEffect(() => {
  //   fetch("http://10.58.2.194:8000/films?genre=드라마&sort=random&limit=20")
  //     .then(res => res.json())
  //     .then(data => {
  //       setWish(data);
  //     });
  return (
    <>
      <div className="wantToWatch">보고싶어요</div>
      <div className="cartBox">
        <ul className="filmList">
          <WishList />
          <WishList />
          <WishList />
          <WishList />
          <WishList />
          <WishList />
          <WishList />
          <WishList />
          <WishList />
          <WishList />
          <WishList />
          <WishList />
          <WishList />
          <WishList />
          <WishList />
          <WishList />
          <WishList />
          <WishList />
          {/* <WishList wish={wish}/> */}
        </ul>
      </div>
    </>
  );
};

export default Cart;
