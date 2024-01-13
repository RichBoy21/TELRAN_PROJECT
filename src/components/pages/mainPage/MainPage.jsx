import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MainPage.module.css";
import { getCategoriesAll } from "./../../../store/slices/categoriesSlice";
import CategoriesItem from "./categoriesItem/CategoriesItem";

import LinkButton from "../../ui/LinkButton/LinkButton";
import Sale from "./sale/Sale";
import AnchorButton from "../../ui/AnchorButton/AnchorButton";
import DiscountSection from "./discountSection/DiscountSection";

function MainPage() {
  const dispatch = useDispatch();

  const { status, categoriesAll, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(getCategoriesAll());
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
          <div className={styles.mainLinkButtonContainer}>
            <LinkButton
              path={"/categories"}
              title={"All categories"}
              className={"mainLinkButton"}
            />
          </div>
        </div>
        <CategoriesItem categories={categoriesAll} status={status} error={error} />
      </div>
      <div id="sale">
        <DiscountSection />
      </div>
      <Sale />
    </div>
  );
}

export default MainPage;
