import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MainPage.module.css";
import { getCategories } from "../../store/slices/categoriesSlice";
import CategoriesItem from "./categoriesItem/CategoriesItem";

import LinkButton from "../../ui/LinkButton/LinkButton";
import DiscountForm from "./discountForm/DiscountForm";
import Sale from "./sale/Sale";
import AnchorButton from "../../ui/AnchorButton/AnchorButton";

function MainPage() {
  const dispatch = useDispatch();

  const { status, categories, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(getCategories('all'));
  }, [dispatch]);

  return (
    <div className={styles.mainPageContainer}>
      <div className={styles.mainGardenProducts}>
        <div className={styles.guideContent}>
          <h1>
            Amazing Discounts
            <br /> on Garden Products!
          </h1>
          <AnchorButton
            path={"#sale"}
            title={"Check out"}
            className={"btnCheckOut"}
          />
        </div>
      </div>
      <div className={styles.categoriesContainer}>
        <div className={styles.categoriesTitle}>
          <h2>Categories</h2>
          <hr />
          <LinkButton
            path={"/categories"}
            title={"All categories"}
            className={"mainLinkButton"}
          />
        </div>
        <CategoriesItem categories={categories} status={status} error={error} />
      </div>
      <div id="sale">
        <DiscountForm />
      </div>
      <Sale />
    </div>
  );
}

export default MainPage;