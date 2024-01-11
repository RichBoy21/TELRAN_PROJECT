import LinkButton from "../../../ui/LinkButton/LinkButton";
import styles from "./Sale.module.css";
import SaleItem from "./saleItem/SaleItem";

const Sale = () => {
  return (
    <div className={styles.saleContainer}>
      <div className={styles.saleTitle}>
        <h2>Sale</h2>
        <hr />
        <div className={styles.saleLinkButtonContainer}>
          <LinkButton path={"/sales"} title={"All sales"} className={"saleLinkButton"} />
        </div>
      </div>
      <SaleItem />
    </div>
  );
};

export default Sale;
