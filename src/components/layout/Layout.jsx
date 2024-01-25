import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { FloatButton } from "antd";
import styles from "./Layout.module.css";
import ScrollToTop from "./../scrollToTop/ScrollToTop";
import { Fragment } from "react";



const Loyout = () => {
  return (
   
    <Fragment>
      <div className="App">
        <ScrollToTop />
        <Header />
        <main className={styles.mainContainer}>
          <Outlet />
        </main>
        <Footer />
        <FloatButton.BackTop className={styles.btn} />
      </div >
    </Fragment>
  );
};

export default Loyout;
