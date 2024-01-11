import styles from "./CategoriesItem.module.css";
import { Link } from "react-router-dom";

function CategoriesItem({ categories, status, error }) {

  return (
    <section className={styles.CategoriesItemContainer}>
      {error && <h2>Error ....</h2>}
      {status === "loading" && <h2>loading ....</h2>}
      {categories?.map((category) => (
        <Link to={`/categories/${category.id}`} key={category.id} className={styles.links}>
          <div className={styles.categoriesCard}>
            <img
              className={styles.categoriesImg}
              src={`http://localhost:3333${category.image}`}
              alt={category.title}
            />
            <p className={styles.categoryInfo}>{category.title}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}
export default CategoriesItem;
