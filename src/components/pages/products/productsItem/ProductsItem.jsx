import { useDispatch, useSelector } from 'react-redux';
import styles from './Products.module.css'
import { useEffect } from 'react';
import { getProducts } from '../../../../store/slices/productsSlice';
import { Link } from 'react-router-dom';
import { useFiltred } from './../../../../hooks/useFiltred'
import Filters from '../../../filter/Filters';
import { RenderProductsCards } from './renderProductItem/RenderProductsCards';
import { RenderProductsDiscountCards } from './renderProductItem/RenderProductsDiscountCards';
import Button from '../../../ui/Button/Button';
import { addItem } from '../../../../store/slices/basketOrderSendSlice';


const ProductsItem = () => {
    const dispatch = useDispatch()
    const { status, error, productsAll } = useSelector((state) => state.products)
    const { getFiltredItems, from, to, handlePriceFromChange, handlePriceToChange, handleDiscountChange, handleSelectChange, isDiscounted, selectedOption } = useFiltred()
    const { basketItems } = useSelector(state => state.basket)

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

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
                getFiltredItems(productsAll).map((product) => {
                    const isDisabled = basketItems.find(basketItem => basketItem.product.id === product.id)

                    return (
                        <div key={product.id}>
                            <div className={styles.btnCards}>
                                <Button onClick={() => handleAddItem({
                                    product: product,
                                    counter: 1
                                })}
                                    disabled={isDisabled}
                                    title={isDisabled ? 'Added' : 'Add to cart'}
                                    className={isDisabled ? 'added_two' : 'addBtn_two'} />
                            </div>
                            <Link className={styles.productLink} to={`/products/${product.id}`}>
                                {product.discont_price
                                    ? <RenderProductsDiscountCards product={product} styles={styles} />
                                    : <RenderProductsCards product={product} styles={styles} />}
                            </Link>
                        </div>)
                })}
        </div>
    </article >
}




export default ProductsItem;