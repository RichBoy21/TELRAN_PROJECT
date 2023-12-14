import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../store/slices/productsSlice';
import { useEffect } from 'react';
import styles from './SingleProductPage.module.css'
import LinkButton from '../../ui/LinkButton/LinkButton';
import { renderProductsCards, renderProductsDiscountCards } from '../../../utils/renderCardsProducts';

const SingleProductPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) =>
        state.products.productsAll.find((p) => p.id === Number(id))
    );




    useEffect(() => {
        dispatch(getProducts(id));
    }, [dispatch, id]);

    return (
        <>
            {/* <div className={styles.productsBtns}>
                <LinkButton path={"/"} title={'Main page'} className={'historyBtn'} />
                <hr />
                <LinkButton path={"/categories"} title={'Categories'} className={'historyBtn'} />
                <hr />
                {product && <LinkButton title={product.title} className={'historyBtn'} />}
            </div> */}


            {product && (
                <div className={styles.singleProductContainer}>
                 {product.discont_price
                ? renderProductsDiscountCards(product, styles)
                : renderProductsCards(product, styles)}
                </div>
            )}
        </>
    );
};

export default SingleProductPage