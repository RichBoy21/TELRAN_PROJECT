import LinkButton from '../../ui/LinkButton/LinkButton';
import styles from './BasketPage.module.css'
import BasketForm from './basketForm/BasketForm';


const BasketPage = () => {
    return <main className={styles.basketContainer}>
        <div className={styles.basketTitleBtn}>
            <h2 className={styles.shoppingCart}>Shopping cart</h2>
            <hr />
            <LinkButton path={"/Products"} title={"Back to the store"} className={"basketLinkButton"} />
        </div>
        <div className={styles.formCardsContainer}>
            <BasketForm />
        </div>
    </main>;
}

export default BasketPage;