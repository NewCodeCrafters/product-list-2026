import { createContext, useContext } from "react";

export const CartCtx = createContext({
  cart: [
    {
      id: 0,
      name: "",
      price: 0,
      category: "",
      image: {
        desktop: "",
        mobile: "",
        tablet: "",
        thumbnail: "",
      },
      quantity: 0,
    },
  ],
  addToCart() {},

  increaseQuantity() {},

  decreaseQuantity() {},
  removeProduct() {},
});

export const useCart = () => useContext(CartCtx);
