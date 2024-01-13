import { useDispatch, useSelector } from 'react-redux';
import styles from './BasketFrom.module.css'
import empty from './../../../../assets/images/basket_empty.jpg'
import LinkButton from '../../../ui/LinkButton/LinkButton';
import BasketShopingCart from '../basketCart/BasketShopingCart';
import Form from './form/Form';
import { Fragment } from 'react';

const BasketForm = () => {
    const dispatch = useDispatch()
    const { basketItems } = useSelector(state => state.basket)
    const { status,error } = useSelector((state) => state.basket)
    
    const totalUniqueProducts = basketItems.length;

    return (
        <Fragment>
            {error && <h2>Error ....</h2>}
            {status === "loading" && <h2>Loading ....</h2>}
            {totalUniqueProducts > 0 ? (
                <>
                    <BasketShopingCart />
                    <Form />
                </>
            ) : (
                <div className={styles.emptyBox}>
                    <img src={empty} className={styles.empty} />
                    <div>
                        <p className={styles.emptyText}>Looks like you have no items in your basket currently.</p>
                        <LinkButton path={"/Products"} title={"Continue Shopping"} className={"emptyBtn"} />
                    </div>
                </div>
            )}
        </Fragment>
    );
}

export default BasketForm;