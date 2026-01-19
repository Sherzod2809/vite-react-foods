import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // 1) Mahsulot qo'shish (agar bor bo'lsa quantity +1)
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // 2) Increment (quantity +1)
  const increment = (productId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // 3) Decrement (quantity -1, 0 bo'lsa o'chirish)
  const decrement = (productId) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, increment, decrement }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
