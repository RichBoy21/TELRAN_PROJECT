import { useDispatch, useSelector } from 'react-redux';
import styles from './Products.module.css'
import { useEffect, useState } from 'react';
import { getProducts } from '../../../../store/slices/productsSlice';
import { renderProductsCards, renderProductsDiscountCards } from '../../../../utils/renderCardsProducts';
import { Link } from 'react-router-dom';
import { useFiltred } from './../../../../hook/useFiltred'
import Filters from '../../../filter/Filters';




const ProductsItem = () => {
    const dispatch = useDispatch()
    const { status, error, productsAll } = useSelector((state) => state.products)
    const { getFiltredItems, from, to, handlePriceFromChange, handlePriceToChange, handleDiscountChange, handleSelectChange, isDiscounted, selectedOption } = useFiltred()

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return <article>
        <h2 className={styles.allProducts}>All products</h2>
        
        <Filters to={to}
            from={from}
            handlePriceFromChange={handlePriceFromChange}
            handlePriceToChange={handlePriceToChange}
            handleDiscountChange={handleDiscountChange}
            handleSelectChange={handleSelectChange}
            isDiscounted={isDiscounted}
            selectedOption={selectedOption} />

        <div className={styles.productsContainer}>
            {error && <h2>Error: {error}</h2>}
            {status === "loading" && <h2>Loading....</h2>}
            {status === "fulfilled" &&
                getFiltredItems(productsAll).map((product) => (
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