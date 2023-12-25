import { useDispatch, useSelector } from 'react-redux';
import styles from './BasketShopingCart.module.css'
import {  removeItem } from '../../../../store/slices/basketOrderSendSlice';
import { RenderBasketDiscountCart } from './RenderBasketDiscountCart';
import { RenderBasketCart } from './RenderBasketCart ';
import { changeBasketItemCount } from './../../../../store/slices/basketOrderSendSlice'
import clouse from './../../../../assets/images/ x.svg'
import minus from '../../../../assets/images/minus.svg'
import plus from '../../../../assets/images/plus.svg'



const BasketShopingCart = () => {
    const dispatch = useDispatch();

    const { basketItems } = useSelector(state => state.basket)


    const increment = (id, counter) => { dispatch(changeBasketItemCount({ basketItemId: id, counter: counter + 1 })) }
    const decrement = (id, counter) => { counter > 0 && dispatch(changeBasketItemCount({ basketItemId: id, counter: counter - 1 })) }



    const handleRemoveItem = (itemId) => {
        dispatch(removeItem({ basketItemId: itemId }));
    }

   



    return (
        <div className={styles.containerBasket}>
            <div className={styles.cardContainerBasket}>
                {basketItems.map((basketItem) => {
                    const { product, counter } = basketItem;
                    return (
                        <div key={product.id} className={styles.containerBasketCard}>
                            {product.discont_price ? (
                                <RenderBasketDiscountCart
                                    product={product}
                                    styles={styles}
                                    increment={increment}
                                    decrement={decrement}
                                    handleRemoveItem={handleRemoveItem}
                                    plus={plus}
                                    minus={minus}
                                    counter={counter}
                                    clouse={clouse} />
                            ) : (
                                <RenderBasketCart
                                    product={product}
                                    styles={styles}
                                    increment={increment}
                                    decrement={decrement}
                                    handleRemoveItem={handleRemoveItem}
                                    plus={plus}
                                    minus={minus}
                                    counter={counter}
                                    clouse={clouse} />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default BasketShopingCart;