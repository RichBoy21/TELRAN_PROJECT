import { useDispatch, useSelector } from 'react-redux';
import styles from './Products.module.css'
import { useEffect } from 'react';
import { getProducts } from '../../../../store/slices/productsSlice';
import { renderProductsCards, renderProductsDiscountCards } from '../../../../utils/renderCardsProducts';
import { Link } from 'react-router-dom';
import LinkButton from '../../../ui/LinkButton/LinkButton';


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
            {status === "fulfilled" &&
                productsAll.map((product) => (
                    <Link className={styles.productLink} key={product.id} to={`/products/${product.id}`}>
                        {product.discont_price
                            ? renderProductsDiscountCards(product, styles)
                            : renderProductsCards(product, styles)}
                    </Link>
                ))}
        </div>

    </article >
}




export default ProductsItem;