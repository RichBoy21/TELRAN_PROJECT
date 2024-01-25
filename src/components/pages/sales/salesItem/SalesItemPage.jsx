import { useDispatch, useSelector } from 'react-redux';
import styles from './SalesItemPage.module.css';
import { useEffect } from 'react';
import { getProducts } from '../../../../store/slices/productsSlice';
import { Link } from 'react-router-dom';
import { useFiltred } from '../../../../hooks/useFiltred';
import Filters from '../../../filter/Filters';
import { RenderProductsDiscountCards } from '../../mainPage/sale/saleItem/RenderSaleItem';
import Button from '../../../ui/Button/Button';
import { addItem } from '../../../../store/slices/basketOrderSendSlice';

const SalesItemPage = () => {

    const dispatch = useDispatch();
    const { status, error, productsAll } = useSelector((state) => state.products);
    const { getFiltredItems, from, to, handlePriceFromChange, handlePriceToChange, handleDiscountChange, handleSelectChange, isDiscounted, selectedOption } = useFiltred()

    
    const { basketItems } = useSelector(state => state.basket)

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

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
                    getFiltredItems(discountedProducts).map((product) => {
                        const isDisabled = basketItems.find(basketItem => basketItem.product.id === product.id)

                        return (

                            <div key={product.id} className={styles.btnCardsPosition}>
                                <div className={styles.btnCards}>
                                    <Button onClick={() => handleAddItem({
                                        product: product,
                                        counter: 1
                                    })}
                                        disabled={isDisabled}
                                        title={isDisabled ? 'Added' : 'Add to cart'}
                                        className={isDisabled ? 'added_two' : 'addBtn_two'} />
                                </div>
                                <Link className={styles.productLink} key={product.id} to={`/products/${product.id}`}>
                                    {<RenderProductsDiscountCards product={product} styles={styles} />}
                                </Link>
                            </div>)
                    })}
            </div>
        </>
    );
};

export default SalesItemPage;
