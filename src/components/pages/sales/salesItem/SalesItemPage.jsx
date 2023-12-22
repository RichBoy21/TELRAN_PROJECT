import { useDispatch, useSelector } from 'react-redux';
import styles from './SalesItemPage.module.css';
import { useEffect } from 'react';
import { getProducts } from '../../../../store/slices/productsSlice';
import { renderProductsDiscountCards } from '../../../../utils/renderCardsProducts';
import { Link } from 'react-router-dom';
import { useFiltred } from '../../../../hook/useFiltred';
import Filters from '../../../filter/Filters';

const SalesItemPage = () => {

    const dispatch = useDispatch();
    const { status, error, productsAll } = useSelector((state) => state.products);
    const { getFiltredItems, from, to, handlePriceFromChange, handlePriceToChange, handleDiscountChange, handleSelectChange, isDiscounted, selectedOption } = useFiltred()


    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);


    const discountedProducts = productsAll.filter((product) => product.discont_price !== null);

    return (
        <>
           <h2 className={styles.discountItems}>Discounted items</h2>

            <Filters to={to}
                from={from}
                handlePriceFromChange={handlePriceFromChange}
                handlePriceToChange={handlePriceToChange}
                handleDiscountChange={handleDiscountChange}
                handleSelectChange={handleSelectChange}
                isDiscounted={isDiscounted}
                selectedOption={selectedOption}
                isDiscountPage={true} />

            <div className={styles.productsContainer}>
                {error && <h2>Error: {error}</h2>}
                {status === "loading" && <h2>Loading....</h2>}
                {status === "fulfilled" &&
                    getFiltredItems(discountedProducts).map((product) => (
                        <Link className={styles.productLink} key={product.id} to={`/products/${product.id}`}>
                            {renderProductsDiscountCards(product, styles)}
                        </Link>
                    ))}
            </div>
        </>
    );
};

export default SalesItemPage;
