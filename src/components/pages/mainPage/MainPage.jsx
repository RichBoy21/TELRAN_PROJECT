import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MainPage.module.css";
import { getCategories } from "../../store/slices/categoriesSlice";
import CategoriesItem from "./categoriesItem/CategoriesItem";

function MainPage({ image }) {
  const dispatch = useDispatch();
  const { status, categories, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(getCategories(image));
  }, [dispatch, image]);

  return (
    <div className={styles.mainPageContainer}>
      <div className={styles.mainGardenProducts}>
        <div className={styles.guideContent}>
          <h1>
            Amazing Discounts
            <br /> on Garden Products!
          </h1>
          <button className={styles.btnCheckOut}>Check out</button>
        </div>
      </div>

      <div className={styles.categoriesContainer}>
        <div className={styles.categoriesTitle}>
          <h2>Categories</h2>
          <hr />
          <button>All categories</button>
        </div>
        <CategoriesItem categories={categories} status={status} error={error} />
      </div>
    </div>
  );
}

export default MainPage;
