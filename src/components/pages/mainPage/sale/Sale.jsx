import LinkButton from "../../../ui/LinkButton/LinkButton";
import styles from "./Sale.module.css";
import SaleItem from "./saleItem/SaleItem";

const Sale = () => {

  return (
    <div>
      <div className={styles.saleTitle}>
        <h2>Sale</h2>
        <hr />
        <LinkButton path={"/sales"} title={"All sales"} className={"saleLinkButton"}
        />
      </div>
      <SaleItem />
    </div>
  );
};

export default Sale;
