import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./ProductsByCategoriesIdPage.module.css";
import { getCategoriesAll, getProductsByCategoryId } from "../../../../store/slices/categoriesSlice";
import LinkButton from "../../../ui/LinkButton/LinkButton";
import { useFiltred } from "../../../../hooks/useFiltred";
import Filters from "../../../filter/Filters";
import { RenderProductsCards } from "./renderCards/RenderProductsCards";
import { RenderProductsDiscountCards } from "./renderCards/RenderProductsDiscountCards";
import { addItem } from "../../../../store/slices/basketOrderSendSlice";
import Button from "../../../ui/Button/Button";
import { useCounter } from "../../../../hooks/useCounter";


const ProductsByCategoryId = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { statusProductsByCategoryId, productsByCategoryId: { data, category }, error } = useSelector((state) => state.categories);
  const { getFiltredItems, from, to, handlePriceFromChange, handlePriceToChange, handleDiscountChange, handleSelectChange, isDiscounted, selectedOption } = useFiltred()
  const { count } = useCounter();
  const { basketItems } = useSelector(state => state.basket)

  useEffect(() => {
    dispatch(getProductsByCategoryId(id));
    dispatch(getCategoriesAll());
  }, [dispatch, id]);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <section>
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
          getFiltredItems(data).map((product) => {
            const isDisabled = basketItems.find(basketItem => basketItem.product.id === product.id)
            return (
              <div key={product.id}>
                <div className={styles.btnCards}>
                  <Button
                    onClick={() => handleAddItem({
                      product: product,
                      counter: count
                    })}
                    disabled={isDisabled}
                    title={isDisabled ? 'Added' : 'Add to cart'}
                    className={isDisabled ? 'added_two' : 'addBtn_two'}
                  />
                </div>
                <Link className={styles.productLink} to={`/products/${product.id}`}>
                  {product.discont_price
                    ? <RenderProductsDiscountCards product={product} styles={styles} />
                    : <RenderProductsCards product={product} styles={styles} />}
                </Link>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default ProductsByCategoryId;
