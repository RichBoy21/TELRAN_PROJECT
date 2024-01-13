import LinkButton from "../../ui/LinkButton/LinkButton";
import ProductsItem from "./productsItem/ProductsItem";
import styles from './Products.module.css'
import { Fragment } from "react";

function Products() {
  return <Fragment>
    <div className={styles.productsBtns}>
      <LinkButton path={"/"} title={'Main page'} className={'historyBtn'} />
      <hr />
      <LinkButton path={"/products"} title={'All products'} className={'historyBtn'} />
    </div>
    <ProductsItem />
  </Fragment>;
}
export default Products;
