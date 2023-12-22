import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ProductBySinglePage.module.css';
import { getProducts } from '../../../../store/slices/productsSlice';
import LinkButton from '../../../ui/LinkButton/LinkButton';
import { addItem } from '../../../../store/slices/basketOrderSendSlice';
import { useCounter } from '../../../../hook/useCounter'
import Button from '../../../ui/Button/Button';
import { RenderSingleProductDiscountCard } from './RenderSingleProductDiscountCard';
import { RenderSingleProductCard } from './RenderSingleProductCard';
import minus from '../../../../assets/images/minus.svg'
import plus from '../../../../assets/images/plus.svg'

const ProductBySinglePage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { productsAll } = useSelector((state) => state.products);
    const product = productsAll.find((p) => p.id === Number(id));
    const { category } = useSelector((state) => state.categories.productsByCategoryId);
    const { basketItems } = useSelector(state => state.basket)

    const { cartCount, incrementCartCount, decrementCartCount, setCount } = useCounter();

    const [isButtonClicked, setIsButtonClicked] = useState(false);


    const handleAddItem = (item) => {
        dispatch(addItem(item));
        setIsButtonClicked(true);
    };

    useEffect(() => {
        dispatch(getProducts(id));
    }, [dispatch, id]);

    useEffect(() => {
        const currentProduct = basketItems.find((basketItem) => basketItem.value.id === product.id)
        if (currentProduct) {
            const { counter } = currentProduct
            setCount(counter)
        }
    }, []);

    return (
        <>
            <div className={styles.productsBtns}>
                <LinkButton path={'/'} title={'Main Page'} className={'historyBtn'} />
                <hr />
                <LinkButton path={'/categories'} title={'Categories'} className={'historyBtn'} />
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
                                ? <RenderSingleProductDiscountCard product={product} styles={styles} />
                                : <RenderSingleProductCard product={product} styles={styles} />}
                        </div>

                        <div className={styles.singleCount}>
                            <div className={styles.IncrDecrCounter}>
                                <button onClick={decrementCartCount} className={styles.decr}><img src={minus}/></button>
                                <span className={styles.counter}>{cartCount}</span>
                                <button onClick={incrementCartCount} className={styles.incr}><img src={plus}/></button>
                            </div>
                            <Button onClick={() => handleAddItem({
                                value: product,
                                counter: cartCount
                            })}
                                title={isButtonClicked ? 'Added' : 'Add to cart'}
                                className={isButtonClicked ? 'added' : 'addBtn'} />
                        </div>

                        <h3>Description</h3>
                        <p>{product.description}</p>
                    </div>
                </div>
            )}
        </>
    );
};




export default ProductBySinglePage;