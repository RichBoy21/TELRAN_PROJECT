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
                const { value, counter } = basketItem
                return (<div key={value.id}>
                    <p onClick={() => handleRemoveItem(value.id)} className={styles.clouseBtn}>X</p>
                    <button onClick={() => increment(value.id, counter)}>+</button>
                    <span>{counter}</span>
                    <button onClick={() => decrement(value.id, counter)}>-</button>
                    {value.discont_price ?
                        <RenderBasketDiscountCart value={value} styles={styles} />
                        : <RenderBasketCart value={value} styles={styles} />
                    }
                </div>)
            })}
        </div>

    );
}

export default BasketShopingCart;