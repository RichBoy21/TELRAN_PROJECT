export const RenderSingleProductDiscountCard = ({ product, styles }) => {

    return (
        <div className={styles.productsCardsContainer} key={product.id}>
            <div className={styles.priceContainer}>
                <p className={styles.productDiscontPrice}>{`${"$"}${product.discont_price
                    }`}</p>
                <p className={styles.productPrice}>{`${"$"}${product.price}`}</p>
            </div>
        </div>
    );
}
