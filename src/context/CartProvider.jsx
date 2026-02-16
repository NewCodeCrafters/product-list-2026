import React, { useState } from "react";
import { CartCtx } from "./cart-context";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const existingProduct = cart.find((cartItem) => cartItem.id === product.id);

    if (existingProduct) return;

    setCart((prev) => [...prev, product]);
  };
  const increaseQuantity = (productId) => {
    // const existingProduct = cart.find((cartItem) => cartItem.id === productId);

    // if (!existingProduct) return;
    // const updatedProduct = {
    //   ...existingProduct,
    //   quantity: existingProduct.quantity++,
    // };

    setCart((prev) =>
      prev.map((cartItem) =>
        cartItem.id === productId
          ? { ...cartItem, quantity: cartItem.quantity++ }
          : cartItem
      )
    );
  };
  const decreaseQuantity = (productId) => {
    setCart((prev) =>
      prev.map((cartItem) =>
        cartItem.id === productId
          ? { ...cartItem, quantity: Math.max(cartItem.quantity--, 1) }
          : cartItem
      )
    );
  };

  const removeProduct = (productId) => {
    setCart((prev) => prev.filter((cartItem) => cartItem.id !== productId));
  };
  return (
    <CartCtx.Provider
      value={{
        addToCart,
        cart,
        decreaseQuantity,
        increaseQuantity,
        removeProduct,
      }}
    >
      {children}
    </CartCtx.Provider>
  );
};

export default CartProvider;
