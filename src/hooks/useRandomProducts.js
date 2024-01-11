import { useEffect, useState } from "react";

const useRandomProducts = (productsAll) => {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    if (
      productsAll.length >= 4 &&
      productsAll.some((product) => product.discont_price !== null)
    ) {
      const numberOfProductsToShow = 4;
      const randomIndexes = [];

      for (
        let attempts = 0;
        randomIndexes.length < numberOfProductsToShow && attempts < 100;
        attempts++
      ) {
        const randomIndex = Math.floor(Math.random() * productsAll.length);
        if (
          !randomIndexes.includes(randomIndex) &&
          productsAll[randomIndex].discont_price !== null
        ) {
          randomIndexes.push(randomIndex);
        }
      }
      const selectedProducts = randomIndexes.map((index) => productsAll[index]);
      setRandomProducts(selectedProducts);
    }
  }, [productsAll]);

  return randomProducts;
};

export default useRandomProducts;
