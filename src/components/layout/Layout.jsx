import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { FloatButton } from "antd";
import styles from "./Layout.module.css";

const Loyout = () => {
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <div className={styles.flouatBtn}>
          <FloatButton.BackTop className={styles.btn} />
        </div>
      </div>
    </>
  );
};

export default Loyout;
