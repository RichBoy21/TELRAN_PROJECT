export const RenderBasketCart = ({ value, styles }) => (
    <div className={styles.productsCardsContainer}>
        <div className={styles.productDiscount}>
            <img src={`http://localhost:3333${value.image}`} alt={value.title} />
        </div>
        <p className={styles.productInfo}>{value.title}</p>
        <div className={styles.priceContainer}>
            <p className={styles.productDiscontPrice}>{`${"$"}${value.price}`}</p>
        </div>
    </div>
);