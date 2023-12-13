import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { useEffect } from "react";
import styles from "./ProductsByCategoriesIdPage.module.css";
import { getCategoriesAll, getProductsByCategoryId } from "../../../../store/slices/categoriesSlice";
import LinkButton from "../../../ui/LinkButton/LinkButton";


const ProductsByCategoryId = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { statusProductsByCategoryId, productsByCategoryId: { data, category }, error } = useSelector((state) => state.categories);





  useEffect(() => {
    dispatch(getCategoriesAll());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductsByCategoryId(id));
  }, [dispatch, id]);

  return (
    <>


      <LinkButton path={"/"} title={'Main page'} />
      <LinkButton path={"/categories"} title={'Categories'} />
     {category && <LinkButton title={category.title} />}


      {statusProductsByCategoryId === "fulfilled" &&
        <h1 className={styles.productTitle}>{category.title}</h1>}

      <div className={styles.productsContainer}>
        {error && <h2>Error: {error}</h2>}
        {statusProductsByCategoryId === "loading" && <h2>Loading....</h2>}
        {statusProductsByCategoryId === "fulfilled" &&

          data.map((product) => {

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
    </>
  );
};

export default ProductsByCategoryId;
