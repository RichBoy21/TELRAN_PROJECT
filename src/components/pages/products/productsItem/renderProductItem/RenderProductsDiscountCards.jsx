import { calculatePercentDiscount } from "../../../../../utils/calculateDiscountPercentage";

export const RenderProductsDiscountCards = ({product, styles}) => {

    if (product.discont_price) {
        const percentDiscount = calculatePercentDiscount(
            product.discont_price,
            product.price
        );

        return (
            <div key={product.id}>
                <div className={styles.productsCardsContainer}>
                    <div className={styles.productDiscount}>
                        <p>-{percentDiscount}%</p>
                        <img
                            src={`http://localhost:3333${product.image}`}
                            alt={product.title}
                        />
                    </div>
                    <p className={styles.productInfo}>{product.title}</p>
                    <div className={styles.priceContainer}>
                        <p className={styles.productDiscontPrice}>{`${"$"}${product.discont_price
                            }`}</p>
                        <p className={styles.productPrice}>{`${"$"}${product.price}`}</p>
                    </div>
                </div>
            </div>
        );
    }
};
