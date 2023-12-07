import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useEffect } from "react";
import styles from "./ProductsByCategoriesIdPage.module.css";
import { getCategoriesAll, getProductsByCategoryId } from "../../../../store/slices/categoriesSlice";


const ProductsByCategoryId = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { status, productsByCategoryId: { data }, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategoriesAll());
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      dispatch(getProductsByCategoryId(id));
    }
  }, [dispatch, id]);

  return (
    <div className={styles.productsContainer}>
      {error && <h2>Error: {error}</h2>}
      {status === "loading" && <h2>Loading....</h2>}
      {status === "fulfilled" &&
        data?.map((product) => {
          if (product.discont_price) {
            const percentDiscount = Math.floor(
              100 - (product.discont_price * 100) / product.price
            );

            return (

              <div key={product.id}>
                <div className={styles.productsCardsContainer}>
                  <div className={styles.productDiscount}>
                    <p>-{percentDiscount}%</p>
                    <img src={`http://localhost:3333${product.image}`} alt={product.title} />
                  </div>
                  <p className={styles.productInfo}>{product.title}</p>
                  <div className={styles.priceContainer}>
                    <p className={styles.productDiscontPrice}>{`${"$"}${product.discont_price}`}</p>
                    <p className={styles.productPrice}>{`${"$"}${product.price}`}</p>
                  </div>
                </div>
              </div>

            );
          }


          return (

            <div key={product.id} >
              <div className={styles.productsCardsContainer}>
                <div className={styles.productDiscount}>
                  <img src={`http://localhost:3333${product.image}`} alt={product.title} />
                </div>
                <p className={styles.productInfo}>{product.title}</p>
                <div className={styles.priceContainer}>
                  <p className={styles.productDiscontPrice}>{`${"$"}${product.price}`}</p>
                </div>
              </div>
            </div>

          );
        })}
    </div>
  );
};

export default ProductsByCategoryId;
