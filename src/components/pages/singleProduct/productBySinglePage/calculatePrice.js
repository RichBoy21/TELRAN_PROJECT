import { calculatePercentDiscount } from "./../../../../utils/calculateDiscountPercentage";

export const renderSingleProductDiscountCard = (product, styles) => {
  if (product.discont_price) {
    const percentDiscount = calculatePercentDiscount(
      product.discont_price,
      product.price
    );

    return (
      <div className={styles.productsCardsContainer} key={product.id}>
        <div className={styles.priceContainer}>
          <p className={styles.productDiscontPrice}>{`${"$"}${
            product.discont_price
          }`}</p>
          <p className={styles.productPrice}>{`${"$"}${product.price}`}</p>
        </div>
        <div className={styles.productDiscount}>
          <p>-{percentDiscount}%</p>
        </div>
      </div>
    );
  }
};

export const renderSingleProductCard = (product, styles) => (
  <div className={styles.productsCardsContainer} key={product.id}>
    <div className={styles.priceContainer}>
      <p className={styles.productDiscontPrice}>{`${"$"}${product.price}`}</p>
    </div>
  </div>
);
