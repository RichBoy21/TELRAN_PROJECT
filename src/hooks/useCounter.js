import { useState } from "react";

export const useCounter = () => {
  const [cartCount, setCartCount] = useState(1);

  const incrementCartCount = () => setCartCount(cartCount + 1);
  const decrementCartCount = () => cartCount > 0 && setCartCount(cartCount - 1);
  const setCount = (value) => setCartCount(value);

  return { cartCount, incrementCartCount, decrementCartCount, setCount };
};
