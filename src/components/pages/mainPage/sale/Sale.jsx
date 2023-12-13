import { useDispatch, useSelector } from "react-redux";
import LinkButton from "../../../ui/LinkButton/LinkButton";
import styles from "./Sale.module.css";

import { useEffect } from "react";
import { getProducts } from "../../../../store/slices/productsSlice";
import SaleItem from "./saleItem/SaleItem";

const Sale = () => {
  const { status, error, productsAll } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.saleTitle}>
        <h2>Sale</h2>
        <hr />
        <LinkButton
          path={"/sales"}
          title={"All sales"}
          className={"saleLinkButton"}
        />
      </div>
      <SaleItem products={productsAll} status={status} error={error} />
    </div>
  );
};

export default Sale;
