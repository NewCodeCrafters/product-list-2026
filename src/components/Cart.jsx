import React from "react";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  return (
    <section className="cart-container">
      <h1 className="cart-container-title">Your Cart ({0})</h1>
      <EmptyCart />
    </section>
  );
};

export default Cart;
