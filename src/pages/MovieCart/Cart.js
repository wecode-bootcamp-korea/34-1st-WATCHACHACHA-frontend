import React, { useEffect, useState } from "react";
import WishList from "./components/WishList/WishList";
import "./Cart.scss";

const Cart = () => {
  const [wish, setWish] = useState([]);
  useEffect(() => {
    fetch("http://10.58.2.194:8000/users/watchlist", {
      method: "GET",
      headers: { Authorization: localStorage.getItem("token") },
    })
      .then(res => res.json())
      .then(data => setWish(data));
  }, []);
  if (wish.length === 0) return <>loading...</>;
  return (
    <>
      <div className="wantToWatch">보고싶어요</div>
      <div className="cartBox">
        <ul className="filmList">
          <WishList wish={wish.results} />
        </ul>
      </div>
    </>
  );
};

export default Cart;
