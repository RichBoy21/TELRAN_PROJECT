import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./CategoriesAllPage.module.css";
import { useEffect } from "react";
import { getCategoriesAll } from "../../../store/slices/categoriesSlice";
import LinkButton from "../../ui/LinkButton/LinkButton";

const CategoriesAllPage = () => {
  const dispatch = useDispatch();
  const { status, categoriesAll, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(getCategoriesAll());
  }, [dispatch]);

  return (
    <>

      <LinkButton path={"/"} title={'Main page'} />
      <LinkButton path={"/categories"} title={'Categories'} />




      <div className={styles.container}>
        {error && <h2>Error: {error}</h2>}
        {status === "loading" && <h2>Loading....</h2>}
        <h2>Categories</h2>
        <div className={styles.cards}>
          {categoriesAll.map(({ id, title, image }) => (
            <Link to={`/categories/${id}`} key={id} className={styles.links}>
              <div className={styles.cardContainer}>
                <img src={`http://localhost:3333${image}`} alt={title} />
                <p>{title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );

};

export default CategoriesAllPage;