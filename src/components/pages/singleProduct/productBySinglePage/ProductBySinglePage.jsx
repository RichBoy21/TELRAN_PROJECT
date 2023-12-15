
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './ProductBySinglePage.module.css'
import { getProducts } from '../../../../store/slices/productsSlice';
import LinkButton from '../../../ui/LinkButton/LinkButton';
import { renderSingleProductCard, renderSingleProductDiscountCard } from './calculatePrice';




const ProductBySinglePage = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) =>
        state.products.productsAll.find((p) => p.id === Number(id))
    );
    const { statusProductsByCategoryId, productsByCategoryId: {  category }} = useSelector((state) => state.categories);




    useEffect(() => {
        dispatch(getProducts(id));
    }, [dispatch, id]);


    return <>

        <div className={styles.productsBtns}>
            <LinkButton path={"/"} title={'Main page'} className={'historyBtn'} />
            <hr />
            <LinkButton path={"/categories"} title={'Categories'} className={'historyBtn'} /> 
            <hr />
            {category && <LinkButton path={`/categories/${category.id}`} title={category.title} className={'historyBtn'} />}
            <hr />
            {product && <LinkButton title={product.title} className={'historyBtn'} />}
        </div>



        {product && (
            <div className={styles.singleProductContainer}>
                <div>
                    <img
                        src={`http://localhost:3333${product.image}`}
                        alt={product.title}
                        className={styles.singleImg}
                    />
                </div>

                <div>
                    <p className={styles.productInfo}>{product.title}</p>
                    <div className={styles.singlePrice}>
                        {product.discont_price
                            ? renderSingleProductDiscountCard(product, styles)
                            : renderSingleProductCard(product, styles)}
                    </div>
                    <div className={styles.singleCount}><button>add to card</button></div>

                    <h3>Description</h3>
                    <p>{product.description}</p>
                </div>
            </div>
        )}

    </>;
}

export default ProductBySinglePage;