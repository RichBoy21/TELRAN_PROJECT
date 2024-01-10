import { useDispatch, useSelector } from 'react-redux';
import styles from './Form.module.css'
import { clearCart, sendOrderData } from '../../../../../store/slices/basketOrderSendSlice';
import { useForm } from 'react-hook-form';
import InputField from '../../../../ui/inputField/InputField';
import Button from '../../../../ui/Button/Button';
import { inputFields } from '../../../../../utils/ formConfig';
import { useEffect, useState } from 'react';
import Modal from '../../../../ui/Modal/Modal';
import { selectedBasketStatus } from '../../../../../store/slices/basketOrderSendSlice'

const Form = () => {
    const dispatch = useDispatch()
    const { basketItems } = useSelector(state => state.basket)
    const status = useSelector(selectedBasketStatus)
    const [modalActive, setModalActive] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "all",
    });

    useEffect(() => {
        let timeoutId;
        if (status === "succeeded") {
            setModalActive(true);

            timeoutId = setTimeout(() => {
             setActive()
            }, 3000);
        }
        return () => { clearTimeout(timeoutId) }
    }, [status])

    function setActive() {
        setModalActive(false);
        dispatch(clearCart());
    }

    const getDataFormInputs = (data) => {

        dispatch(sendOrderData(data));
        reset();
    };

    const calculateTotal = () => {
        const total = basketItems.reduce((total, item) => total + item.product.price * item.counter, 0);
        return parseFloat(total.toFixed(2));
    };

    const totalUniqueProducts = basketItems.length;

    return (
        <>
            <Modal active={modalActive} setActive={setActive}>
                <h3 className={styles.modalTitle}>Congratulations!</h3>
                <p className={styles.modalText}>Your order has been successfully placed on the website.</p>
                <br />
                <p className={styles.modalText}>A manager will contact you shortly to confirm your order.</p>
            </Modal>
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
            </form>
        </>
    );
}

export default Form;