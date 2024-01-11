export const RenderBasketDiscountCart = ({ product, styles, increment, decrement, plus, minus, counter, clouse, handleRemoveItem }) => (
    <div className={styles.productsCardsContainer}>

        <img src={`http://localhost:3333${product.image}`} alt={product.title} className={styles.productImg} />

        <div className={styles.productDiscount}>
            <div className={styles.titleClouseBox}>
                <p className={styles.productInfo}>{product.title}</p>
                <p onClick={() => handleRemoveItem(product.id)} className={styles.clouseBtn}>
                    <img src={clouse} />
                </p>
            </div>
            <div className={styles.counterPriceBox}>
                <div className={styles.IncrDecrCounterBasket}>
                    <button onClick={() => decrement(product.id, counter)} className={styles.decrBasket}><img src={minus} /></button>
                    <span className={styles.counterBasket}>{counter}</span>
                    <button onClick={() => increment(product.id, counter)} className={styles.incrBasket}><img src={plus} /></button>
                </div>
                <p className={styles.productDiscontPrice}>{`${"$"}${product.discont_price
                    }`}</p>
                <p className={styles.productPrice}>{`${"$"}${product.price}`}</p>
            </div>
        </div>
    </div>
);