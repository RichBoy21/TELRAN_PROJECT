import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ProductBySinglePage.module.css';
import { getProducts } from '../../../../store/slices/productsSlice';
import LinkButton from '../../../ui/LinkButton/LinkButton';
import { renderSingleProductCard, renderSingleProductDiscountCard } from './calculatePrice';
import { addItem } from '../../../../store/slices/basketOrderSendSlice';
import { useCounter } from '../../../../hook/useCounter'
import Button from '../../../ui/Button/Button';

const ProductBySinglePage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();





    const { productsAll } = useSelector((state) => state.products);
    const product = productsAll.find((p) => p.id === Number(id));
    const { category } = useSelector((state) => state.categories.productsByCategoryId);
    const { basketItems } = useSelector(state => state.basket)


    console.log(basketItems)



    const { cartCount, incrementCartCount, decrementCartCount, setCount } = useCounter();





    const [isButtonClicked, setIsButtonClicked] = useState(false);
    // const calculateTotal = () => {
    //     const total = basketItems.reduce((total, item) => total + item.price + basketItems.length, 0);
    //     return parseFloat(total.toFixed(2));
    // };

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
                                ? renderSingleProductDiscountCard(product, styles)
                                : renderSingleProductCard(product, styles)}
                        </div>

                        <div className={styles.singleCount}>
                            <button onClick={incrementCartCount}>+</button>
                            <span>{cartCount}</span>
                            <button onClick={decrementCartCount}>-</button>
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