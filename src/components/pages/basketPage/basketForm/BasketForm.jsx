import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../ui/Button/Button';
import styles from './BasketFrom.module.css'
import empty from './../../../../assets/images/basket_empty.jpg'
import LinkButton from '../../../ui/LinkButton/LinkButton';
import { useForm } from 'react-hook-form';
import { inputFields } from '../../../../utils/ formConfig'
import InputField from '../../../ui/inputField/InputField';
import { clearCart, sendOrderData } from '../../../../store/slices/basketOrderSendSlice';
import { useEffect, useState } from 'react';
import Modal from '../../../ui/Modal/Modal';

const BasketForm = () => {
    const dispatch = useDispatch()
    const { basketItems } = useSelector(state => state.basket)
    const { status, error } = useSelector((state) => state.basket)
    const [modalActive, setModalActive] = useState(false)


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "all",
    });


    const getDataFormInputs = (data) => {
        dispatch(sendOrderData(data));
        reset();
        if (status === "succeeded") {
            setModalActive(true);
            reset();

            const timeoutId = setTimeout(() => {
                setModalActive(false);

            }, 3000);
        }
    };

    const calculateTotal = () => {
        const total = basketItems.reduce((total, item) => total + item.product.price * item.counter, 0);
        return parseFloat(total.toFixed(2));
    };

    const totalUniqueProducts = basketItems.length;

    return (
        <>
            {error && <h2>Error ....</h2>}
            {status === "loading" && <h2>Loading ....</h2>}

            {totalUniqueProducts > 0 ? (
                <form
                    className={styles.basketFormContainer}
                    onSubmit={handleSubmit(getDataFormInputs)}
                >
                    <h3 className={styles.titleForm}>Order details</h3>
                    <p className={styles.items}>{totalUniqueProducts} items</p>
                    <label className={styles.total}>
                        Total<p className={styles.totalPrice}>${calculateTotal()}</p>
                    </label>
                    {inputFields.map((field) => (
                        <InputField
                            key={field.name}
                            name={field.name}
                            validation={field.validation}
                            placeholder={field.placeholder}
                            register={register}
                            errors={errors}
                            className={"inputsBasket"}
                        />
                    ))}
                    <Button className={"basketFormBtn"} title={"Order"} />
                    <Modal active={modalActive} setActive={setModalActive}>
                        <h3 className={styles.modalTitle}>Congratulations!</h3>
                        <p className={styles.modalText}>Your order has been successfully placed on the website.</p>
                        <br />
                        <p className={styles.modalText}>A manager will contact you shortly to confirm your order.</p>
                    </Modal>
                </form>
            ) : (
                <div className={styles.emptyBox}>
                    <img src={empty} className={styles.empty} />
                    <div>
                        <p className={styles.emptyText}>Your basket is empty.</p>
                        <LinkButton path={"/Products"} title={"Back to the store"} className={"emptyBtn"} />
                    </div>
                </div>
            )}
        </>
    );
}

export default BasketForm;