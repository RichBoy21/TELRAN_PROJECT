import { useDispatch, useSelector } from 'react-redux';
import styles from './SalesItemPage.module.css'
import { useEffect } from 'react';
import { getProducts } from '../../../../store/slices/productsSlice';
import { renderProductsDiscountCards } from '../../../../utils/renderCardsProducts';





const SalesItemPage = () => {

    const dispatch = useDispatch()
    const { status, error, productsAll } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return <>
     <h2 className={styles.discountItems}>Discounted items</h2>
        <div className={styles.productsContainer}>
            {error && <h2>Error: {error}</h2>}
            {status === "loading" && <h2>Loading....</h2>}
            {status === "fulfilled" && productsAll.map((product) => renderProductsDiscountCards(product, styles))}
        </div>
    </>

}

export default SalesItemPage;