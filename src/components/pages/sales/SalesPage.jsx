import LinkButton from "../../ui/LinkButton/LinkButton";
import styles from './SalesPage.module.css'
import SalesItemPage from "./salesItem/SalesItemPage";


function Sales() {
  return <div>
    <LinkButton path={"/"} title={'Main page'} />
    <LinkButton path={"/sales"} title={'All sales'} />
    <SalesItemPage />
  </div>;
}
export default Sales;
