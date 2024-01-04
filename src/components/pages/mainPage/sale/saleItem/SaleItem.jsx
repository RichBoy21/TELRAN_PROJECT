import styles from "./SaleItem.module.css";
import { getProducts } from "../../../../../store/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RenderProductsDiscountCards } from "./RenderSaleItem";
import { Link } from "react-router-dom";

function SaleItem() {
  const [randomProducts, setRandomProducts] = useState([]);
  const { status, error, productsAll } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  

  useEffect(() => {
    if (productsAll.length >= 4 && productsAll.some(product => product.discont_price !== null)) {
      const numberOfProductsToShow = 4;
      const randomIndexes = [];
      let attempts = 0;
  
      while (randomIndexes.length < numberOfProductsToShow && attempts < 100) {
        const randomIndex = Math.floor(Math.random() * productsAll.length);
        if (!randomIndexes.includes(randomIndex) && productsAll[randomIndex].discont_price !== null) {
          randomIndexes.push(randomIndex);
        }
        attempts++;
      }
      const selectedProducts = randomIndexes.map(index => productsAll[index]);
      setRandomProducts(selectedProducts);
    }
  }, [productsAll]);
  



  return (
    <div className={styles.productsItemContainer}>
      {error && <h2>Error ....</h2>}
      {status === "loading" && <h2>loading ....</h2>}
      
        {randomProducts
          .filter((product) => product.discont_price !== null)
          .map((product) => (
            <div key={product.id} className={styles.salesCardItem}>
              <Link className={styles.productLink} to={`/products/${product.id}`}>
                <RenderProductsDiscountCards product={product} styles={styles} />
              </Link>
            </div>
          ))
        }
      
    </div >
  );
}

export default SaleItem;
