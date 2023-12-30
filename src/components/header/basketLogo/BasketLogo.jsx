import { NavLink } from 'react-router-dom';
import styles from './BasketLogo.module.css'
import { useSelector } from 'react-redux';
import basket from '../../../assets/images/basket.svg'


const BasketLogo = () => {

    const { basketItems } = useSelector(state => state.basket)
    const totalUniqueProducts = basketItems.length;

    return <NavLink to="/basket" className={styles.basketLogo}>
        <div className={styles.counterPosition}>
            <p className={styles.counterHeader}>{totalUniqueProducts}</p>
            <img src={basket} alt="Basket" className={styles.imgBasketLogo} />
        </div>
    </NavLink>;
}

export default BasketLogo;