import React from "react";
import EmptyCart from "./EmptyCart";
import { useCart } from "../context/cart-context";

const Cart = () => {
  const { cart } = useCart();
  const totalQuantity = cart.reduce((acc, cur) => acc + cur.quantity, 0);
  return (
    <section className="cart-container">
      <h1 className="cart-container-title">Your Cart ({totalQuantity})</h1>
      {totalQuantity === 0 ? <EmptyCart /> : <></>}
    </section>
  );
};

export default Cart;
