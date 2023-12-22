import {  useSelector } from 'react-redux';
import Button from '../../../ui/Button/Button';
import styles from './BasketFrom.module.css'


const BasketForm = () => {

    const { basketItems } = useSelector(state => state.basket)
    const totalUniqueProducts = basketItems.length;

    const calculateTotal = () => {
        const total = basketItems.reduce((total, item) => total + item.value.price * item.counter, 0);
        return parseFloat(total.toFixed(2));
    };

    return <form>
        <h3>Order details</h3>
        <p>{totalUniqueProducts}</p>
        <label>Total <p>{calculateTotal()}</p></label>
        <div>
            <input></input>
            <input></input>
            <input></input>
        </div>
        <Button className={'basketFormBtn'} title={'Order'} />
    </form>;
}

export default BasketForm;