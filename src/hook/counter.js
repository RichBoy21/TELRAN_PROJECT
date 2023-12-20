import { useState } from "react";

export const CounterItems = () => {
  const [cartCount, setCartCount] = useState(1);

  const incrementCartCount = () => setCartCount(cartCount + 1);
  const decrementCartCount = () => cartCount > 0 && setCartCount(cartCount - 1);

  return { cartCount, incrementCartCount, decrementCartCount };
};
