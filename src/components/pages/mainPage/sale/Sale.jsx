import { useDispatch, useSelector } from "react-redux";
import LinkButton from "../../../ui/LinkButton/LinkButton";
import styles from "./Sale.module.css";

import { useEffect } from "react";
import { getProducts } from "../../../store/slices/productsSlice";
import SaleItem from "./saleItem/SaleItem";

const Sale = ({image}) => {
  const { status, error, products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(image));
  }, [dispatch, image]);
 
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
      <SaleItem products={products} status={status} error={error}/>
    </div>
  );
};

export default Sale;
