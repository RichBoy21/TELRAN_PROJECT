import { useDispatch, useSelector } from 'react-redux';
import styles from './BasketShopingCart.module.css'
import { clearCart, removeItem } from '../../../../store/slices/basketOrderSendSlice';
import { RenderBasketDiscountCart } from './RenderBasketDiscountCart';
import { RenderBasketCart } from './RenderBasketCart ';
import { changeBasketItemCount } from './../../../../store/slices/basketOrderSendSlice'



const BasketShopingCart = () => {
    const dispatch = useDispatch();

    const { basketItems } = useSelector(state => state.basket)


    const increment = (id, counter) => { dispatch(changeBasketItemCount({ basketItemId: id, counter: counter + 1 })) }
    const decrement = (id, counter) => { counter > 0 && dispatch(changeBasketItemCount({ basketItemId: id, counter: counter - 1 })) }



    const handleRemoveItem = (itemId) => {
        dispatch(removeItem({ basketItemId: itemId }));
    }

    // const handleClearCart = () => {
    //     dispatch(clearCart());
    // }




    return (
        <div>

            {basketItems.map((basketItem) => {
                const { product, counter } = basketItem
                return (<div key={product.id}>
                    <p onClick={() => handleRemoveItem(product.id)} className={styles.clouseBtn}>X</p>
                    <button onClick={() => increment(product.id, counter)}>+</button>
                    <span>{counter}</span>
                    <button onClick={() => decrement(product.id, counter)}>-</button>
                    {product.discont_price ?
                        <RenderBasketDiscountCart product={product} styles={styles} />
                        : <RenderBasketCart product={product} styles={styles} />
                    }
                </div>)
            })}
        </div>

    );
}

export default BasketShopingCart;