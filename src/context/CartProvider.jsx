import { useReducer } from "react";
import { CartCtx } from "./cart-context";

function cartReducer(cart, action) {
  switch (action.type) {
    case "add-to-cart": {
      return [...cart, action.payload.product];
    }
    case "increase-quantity": {
      return cart.map((cartItem) =>
        cartItem.id === action.payload.productId
          ? { ...cartItem, quantity: cartItem.quantity++ }
          : cartItem
      );
    }
    case "decrease-quantity": {
      return cart.map((cartItem) =>
        cartItem.id === action.payload.productId
          ? { ...cartItem, quantity: Math.max(cartItem.quantity--, 1) }
          : cartItem
      );
    }
    case "remove-product": {
      return cart.filter(
        (cartItem) => cartItem.id !== action.payload.productId
      );
    }

    default: {
      throw Error(`Invalid action type ${action.type}`);
    }
  }
}
const CartProvider = ({ children }) => {
  // const [cart, setCart] = useState([]);
  const [cart, dispatch] = useReducer(cartReducer, []);
  const addToCart = (product) => {
    // const existingProduct = cart.find((cartItem) => cartItem.id === product.id);

    // if (existingProduct) return;

    // setCart((prev) => [...prev, product]);
    dispatch({
      type: "add-to-cart",
      payload: {
        product,
      },
    });
  };
  const increaseQuantity = (productId) => {
    // const existingProduct = cart.find((cartItem) => cartItem.id === productId);

    // if (!existingProduct) return;
    // const updatedProduct = {
    //   ...existingProduct,
    //   quantity: existingProduct.quantity++,
    // };

    // setCart((prev) =>
    //   prev.map((cartItem) =>
    //     cartItem.id === productId
    //       ? { ...cartItem, quantity: cartItem.quantity++ }
    //       : cartItem
    //   )
    // );
    dispatch({
      type: "increase-quantity",
      payload: {
        productId,
      },
    });
  };
  const decreaseQuantity = (productId) => {
    // setCart((prev) =>
    //   prev.map((cartItem) =>
    //     cartItem.id === productId
    //       ? { ...cartItem, quantity: Math.max(cartItem.quantity--, 1) }
    //       : cartItem
    //   )
    // );

    dispatch({
      type: "decrease-quantity",
      payload: {
        productId,
      },
    });
  };

  const removeProduct = (productId) => {
    // setCart((prev) => prev.filter((cartItem) => cartItem.id !== productId));

    dispatch({
      type: "remove-product",
      payload: {
        productId,
      },
    });
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
