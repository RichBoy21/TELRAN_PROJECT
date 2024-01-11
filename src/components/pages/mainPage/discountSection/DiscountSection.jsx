import styles from "./DiscountSection.module.css";
import discount from "../../../../assets/images/discount.svg";

import DiscountForm from "./discountForm/DiscountForm";

const DiscountSection = () => {

  return (
    <section className={styles.discountContainer}>
      <h2 className={styles.discountTitle}>5% off on the first order</h2>
      <div className={styles.dicsountContent}>
        <img src={discount} alt="Discount" className={styles.discountImg}></img>
        <DiscountForm />
      </div>
    </section>
  );

};

export default DiscountSection;
