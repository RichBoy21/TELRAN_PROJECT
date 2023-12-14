import { useDispatch, useSelector } from 'react-redux';
import styles from './Products.module.css'
import { useEffect } from 'react';
import { getProducts } from '../../../../store/slices/productsSlice';
import { renderProductsCards, renderProductsDiscountCards } from '../../../../utils/renderCardsProducts';


const ProductsItem = () => {
    const dispatch = useDispatch()
    const { status, error, productsAll } = useSelector((state) => state.products)


    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return <article>

        <h2 className={styles.allProducts}>All products</h2>
        <div className={styles.productsContainer}>
            {error && <h2>Error: {error}</h2>}
            {status === "loading" && <h2>Loading....</h2>}
            {status === "fulfilled" && productsAll.map((product) =>
                product.discont_price
                    ? renderProductsDiscountCards(product, styles)
                    : renderProductsCards(product, styles)
            )}
        </div>

    </article>
}

export default ProductsItem;