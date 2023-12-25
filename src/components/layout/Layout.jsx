
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { FloatButton } from "antd";
import styles from "./Layout.module.css";
import ScrollToTop from "./../scrollToTop/ScrollToTop";
import { useState } from "react";
import Modal from "../ui/Modal/Modal";


const Loyout = () => {

 


  return (
    <>
      <div className="App">
        <ScrollToTop />
        <Header />
        <main className={styles.mainContainer}>
          <Outlet />
        </main>
        <Footer />
        <FloatButton.BackTop className={styles.btn} />
      </div >
    </>
  );
};

export default Loyout;
