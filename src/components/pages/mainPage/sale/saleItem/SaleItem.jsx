import styles from "./SaleItem.module.css";
import { getProducts } from "../../../../../store/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RenderProductsDiscountCards } from "./RenderSaleItem";
import { Link } from "react-router-dom";
import useRandomProducts from "../../../../../hooks/useRandomProducts";

function SaleItem() {
  const { status, error, productsAll } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const randomProducts = useRandomProducts(productsAll);

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
