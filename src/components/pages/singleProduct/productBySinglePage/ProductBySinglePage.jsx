import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ProductBySinglePage.module.css';
import { getProducts } from '../../../../store/slices/productsSlice';
import LinkButton from '../../../ui/LinkButton/LinkButton';
import { addItem } from '../../../../store/slices/basketOrderSendSlice';
import { useCounter } from '../../../../hook/useCounter'
import Button from '../../../ui/Button/Button';
import { RenderSingleProductDiscountCard } from './renderSingleProduct/RenderSingleProductDiscountCard';
import { RenderSingleProductCard } from './renderSingleProduct/RenderSingleProductCard';
import minus from '../../../../assets/images/minus.svg'
import plus from '../../../../assets/images/plus.svg'

const ProductBySinglePage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { productsAll } = useSelector((state) => state.products);
    console.log(productsAll)
    const currentProductFromProductAll = productsAll.find((p) => p.id === Number(id));
  
    const { category } = useSelector((state) => state.categories.productsByCategoryId);
    const { basketItems } = useSelector(state => state.basket)
    const { cartCount, incrementCartCount, decrementCartCount, setCount } = useCounter();
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    console.log(basketItems)
    useEffect(() => {
        basketItems.forEach((basketItem) => {
            if (basketItem.product.id === Number(id)) {
                setIsButtonClicked(true);
            }
        })
   
    }, [basketItems])

    useEffect(() => {
        dispatch(getProducts(id));
        
    }, [dispatch, id]);

    useEffect(() => {
       
        const currentProductFromBascketItems = basketItems.find((basketItem) => basketItem.product.id === currentProductFromProductAll)
        
        if (currentProductFromBascketItems) {
            
            const { counter } = currentProductFromBascketItems
            setCount(counter)
        }
      
    }, []);

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    return (
        <>
            <div className={styles.productsBtns}>
                <LinkButton path={'/'} title={'Main Page'} className={'historyBtn'} />
                <hr />
                <LinkButton path={'/categories'} title={'Categories'} className={'historyBtn'} />
                <hr />
                {category && <LinkButton path={`/categories/${category.id}`} title={category.title} className={'historyBtn'} />}
                <hr />
                {currentProductFromProductAll && <LinkButton title={currentProductFromProductAll.title} className={'historyBtn'} />}
            </div>

            {currentProductFromProductAll && (
                <div className={styles.singleProductContainer}>
                    <div>
                        <img
                            src={`http://localhost:3333${currentProductFromProductAll.image}`}
                            alt={currentProductFromProductAll.title}
                            className={styles.singleImg}
                        />
                    </div>

                    <div>
                        <p className={styles.productInfo}>{currentProductFromProductAll.title}</p>
                        <div className={styles.singlePrice}>
                            {currentProductFromProductAll.discont_price
                                ? <RenderSingleProductDiscountCard product={currentProductFromProductAll} styles={styles} />
                                : <RenderSingleProductCard product={currentProductFromProductAll} styles={styles} />}
                        </div>

                        <div className={styles.singleCount}>
                            <div className={styles.IncrDecrCounter}>
                                <button disabled={isButtonClicked} onClick={decrementCartCount} className={styles.decr}><img src={minus} /></button>
                                <span className={styles.counter}>{cartCount}</span>
                                <button disabled={isButtonClicked} onClick={incrementCartCount} className={styles.incr}><img src={plus} /></button>
                            </div>
                            <Button disabled={isButtonClicked} onClick={() => handleAddItem({
                                product: currentProductFromProductAll,
                                counter: cartCount
                            })}
                                title={isButtonClicked ? 'Added' : 'Add to cart'}
                                className={isButtonClicked ? 'added' : 'addBtn'} />
                        </div>

                        <h3>Description</h3>
                        <p>{currentProductFromProductAll.description}</p>
                    </div>
                </div>
            )}
        </>
    );
};




export default ProductBySinglePage;