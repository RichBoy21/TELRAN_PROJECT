import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategories } from "../../../store/slices/categoriesSlice";
import { useEffect } from "react";
import styles from './ProductsPage.module.css'

const ProductsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { status, categories, error } = useSelector(
    (state) => state.categories
  );
  console.log(categories.data);
  useEffect(() => {
    dispatch(getCategories(id));
  }, [dispatch, id]);
  console.log(categories);
  return (
    <div>
      {categories.data?.map((product) => {
        const percentDiscount = Math.floor(
          100 - (product.discont_price * 100) / product.price
        );

        return (
          <div key={product.id}>
            <div className={styles.productsContainer}>
              <div className={styles.productDiscount}>
                <p>-{percentDiscount}%</p>
                <img
                  src={`http://localhost:3333${product.image}`}
                  alt={product.title}
                />
              </div>
              <p className={styles.productInfo}>{product.title}</p>
              <div className={styles.priceContainer}>
                <p className={styles.productDiscontPrice}>{`${"$"}${
                  product.discont_price
                }`}</p>
                <p className={styles.productPrice}>{`${"$"}${
                  product.price
                }`}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsPage;
