import { useState } from "react";

export const useCounter = () => {
  const [count, setCartCount] = useState(1);

  const incrementCartCount = () => setCartCount(count + 1);
  const decrementCartCount = () => count > 0 && setCartCount(count - 1);
  const setCount = (value) => setCartCount(value);

  return { count, incrementCartCount, decrementCartCount, setCount };
};
