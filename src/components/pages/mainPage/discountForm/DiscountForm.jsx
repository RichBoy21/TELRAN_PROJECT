import { useState } from "react";
import sendDiscount from "../../../store/slices/categoriesSlice";
import styles from "./DiscountForm.module.css";
import discount from "../../../../assets/images/discount.svg";
import Button from "../../../ui/Button/Button";

const DiscountForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handeleClick = () => {
    fetch("http://localhost:3333/sale/send ", {
      method: "POST",
      body: JSON.stringify({ name, phone, email }),
    });
  };

  return (
    <div className={styles.discountContainer} >
      <h2 className={styles.discountTitle}>5% off on the first order</h2>
      <div className={styles.dicsountContent}>
        <img src={discount} alt="Discount"></img>
        <form className={styles.discountForm}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Phone number"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <Button
            type="button"
            onClick={handeleClick}
            className={"discountBtn"}
            title={"Get a discount"}
          />
        </form>
      </div>
    </div>
  );
};

export default DiscountForm;
