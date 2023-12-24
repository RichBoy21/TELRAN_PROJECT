import { useSelector } from 'react-redux';
import Button from '../../../ui/Button/Button';
import styles from './BasketFrom.module.css'
import empty from './../../../../assets/images/basket_empty.jpg'
import LinkButton from '../../../ui/LinkButton/LinkButton';


const BasketForm = () => {

    const { basketItems } = useSelector(state => state.basket)
    const totalUniqueProducts = basketItems.length;

    const calculateTotal = () => {
        const total = basketItems.reduce((total, item) => total + item.product.price * item.counter, 0);
        return parseFloat(total.toFixed(2));
    };

    return (
        totalUniqueProducts > 0 ?
            <form>
                <h3 className={styles.titleForm}>Order details</h3>
                <p className={styles.items}>{totalUniqueProducts} items</p>
                <label className={styles.total}>Total<p className={styles.totalPrice}>${calculateTotal()}</p></label>
                <div>
                    <input></input>
                    <input></input>
                    <input></input>
                </div>
                <Button className={'basketFormBtn'} title={'Order'} />
            </form>
            : <div className={styles.emptyBox}>
                <img src={empty} className={styles.empty} />
                <div>
                    <p className={styles.emptyText}>Your basket is empty.</p>
                    <LinkButton path={"/Products"} title={"Back to the store"} className={"emptyBtn"} />
                </div>
            </div>
    );
}

export default BasketForm;