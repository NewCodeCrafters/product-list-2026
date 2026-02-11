import React from "react";

const EmptyCart = () => {
  return (
    <div className="empty-cart-container">
      <figure>
        <img src="/images/illustration-empty-cart.svg" alt="" />
      </figure>
      <p className="empty-cart-desc">Your added items will appear here</p>
    </div>
  );
};

export default EmptyCart;
