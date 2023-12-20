
import { useDispatch, useSelector } from 'react-redux';
import styles from './BasketShopingCart.module.css'
import { useParams } from 'react-router-dom';
import { clearCart, removeItem } from '../../../../store/slices/basketOrderSendSlice';



const BasketShopingCart = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { basketItems } = useSelector(state => state.basket)
    console.log(`one: ${basketItems}`)
    const { productsAll } = useSelector((state) => state.products);
    const product = productsAll.find((p) => p.id === Number(id));


    const calculateTotal = () => {
        const total = basketItems.reduce((total, item) => total + item.price + basketItems.length, 0);
        return parseFloat(total.toFixed(2));
    };



    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    }





    return <div>




        {basketItems.map((card, id) => (
            <div key={id}>

                <p>{card.title}</p>

                <button onClick={() => handleRemoveItem(card)}>Удалить из корзины</button>
            </div>
        ))}
        <p>Общая стоимость: ${calculateTotal()}</p>
        <button onClick={handleClearCart}>Очистить корзину</button>
    </div>;
}

export default BasketShopingCart;