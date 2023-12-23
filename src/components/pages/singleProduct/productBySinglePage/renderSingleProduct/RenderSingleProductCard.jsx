
export const RenderSingleProductCard = ({ product, styles }) => (
    <div className={styles.productsCardsContainer} key={product.id}>
        <div className={styles.priceContainer}>
            <p className={styles.productDiscontPrice}>{`${"$"}${product.price}`}</p>
        </div>
    </div>
);