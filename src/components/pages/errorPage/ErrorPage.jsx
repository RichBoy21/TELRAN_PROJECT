import styles from "./ErrorPage.module.css";
import LinkButton from "../../ui/LinkButton/LinkButton";
import error from "../../../assets/images/error.svg";
import { Fragment } from "react";

function ErrorPage() {
  return (
    <Fragment>
      <div className={styles.errorContainer}>
        <img src={error} className={styles.errorImg} />
        <h2 className={styles.errorTitle}>Page Not Found</h2>
        <p className={styles.errorText}>
          We’re sorry, the page you requested could not be found.
          <br /> Please go back to the homepage.
        </p>
        <span className={styles.linkBtnError}>
          <LinkButton path={"/"} title={"Go Home"} className={"errorLinkBtn"} />
        </span>
      </div>
    </Fragment>
  );
}

export default ErrorPage;
