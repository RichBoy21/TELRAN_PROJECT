import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Categories.module.css";
import { useEffect } from "react";
import { getCategories } from "../../store/slices/categoriesSlice";

function Categories() {
  const dispatch = useDispatch();

  const { status, categories, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(getCategories('all'));
  }, [dispatch]);

 
  return (
    <div className={styles.container}>
      {error && <h2>Error ....</h2>}
      {status === "loading" && <h2>loading ....</h2>}

      {categories.map((category) => (
        <Link to={`${category.id}`} key={category.id}>
          <img
            className={styles.img}
            src={`http://localhost:3333${category.image}`}
            alt={category.title}
          />
          <p className={styles.info}>{category.title}</p>
        </Link>
      ))}
    </div>
  );
}
export default Categories;
