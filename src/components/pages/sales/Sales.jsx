import LinkButton from "../../ui/LinkButton/LinkButton";

function Sales() {
  return <div>
    <LinkButton path={"/"} title={'Main page'} />
    <LinkButton path={"/sales"} title={'All sales'} />
  </div>;
}
export default Sales;
