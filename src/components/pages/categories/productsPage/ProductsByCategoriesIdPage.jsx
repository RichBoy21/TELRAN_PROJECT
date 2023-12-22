import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { useEffect } from "react";
import styles from "./ProductsByCategoriesIdPage.module.css";
import { getCategoriesAll, getProductsByCategoryId } from "../../../../store/slices/categoriesSlice";
import LinkButton from "../../../ui/LinkButton/LinkButton";
import { renderProductsCards, renderProductsDiscountCards } from "../../../../utils/renderCardsProducts";
import { useFiltred } from "../../../../hook/useFiltred";
import Filters from "../../../filter/Filters";


const ProductsByCategoryId = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { statusProductsByCategoryId, productsByCategoryId: { data, category }, error } = useSelector((state) => state.categories);
  const { getFiltredItems, from, to, handlePriceFromChange, handlePriceToChange, handleDiscountChange, handleSelectChange, isDiscounted, selectedOption } = useFiltred()

  useEffect(() => {
    dispatch(getProductsByCategoryId(id));
    dispatch(getCategoriesAll());
  }, [dispatch, id]);

  return (
    <>
      <div className={styles.productsBtns}>
        <LinkButton path={"/"} title={'Main page'} className={'historyBtn'} />
        <hr />
        <LinkButton path={"/categories"} title={'Categories'} className={'historyBtn'} />
        <hr />
        {category && <LinkButton title={category.title} className={'historyBtn'} />}
      </div>





      {statusProductsByCategoryId === "fulfilled" &&
        <h1 className={styles.productTitle}>{category.title}</h1>}

      <Filters to={to}
        from={from}
        handlePriceFromChange={handlePriceFromChange}
        handlePriceToChange={handlePriceToChange}
        handleDiscountChange={handleDiscountChange}
        handleSelectChange={handleSelectChange}
        isDiscounted={isDiscounted}
        selectedOption={selectedOption}
      />

      <div className={styles.productsContainer}>
        {error && <h2>Error: {error}</h2>}
        {statusProductsByCategoryId === "loading" && <h2>Loading....</h2>}
        {statusProductsByCategoryId === "fulfilled" &&
          getFiltredItems(data).map((product) => (
            <Link className={styles.productLink} key={product.id} to={`/products/${product.id}`}>
              {product.discont_price
                ? renderProductsDiscountCards(product, styles)
                : renderProductsCards(product, styles)}
            </Link>
          ))
        }
      </div>
    </>
  );
};

export default ProductsByCategoryId;
