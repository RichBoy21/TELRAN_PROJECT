import LinkButton from "../../ui/LinkButton/LinkButton";
import ProductsItem from "./productsItem/ProductsItem";
import styles from './Products.module.css'

function Products() {
  return <div>
    <LinkButton path={"/"} title={'Main page'} />
    <LinkButton path={"/products"} title={'All products'} />
    <ProductsItem />
  </div>;
}
export default Products;
