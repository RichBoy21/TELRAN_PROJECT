import instagram from "../../../assets/images/instagram.svg";
import whatsapp from "../../../assets/images/whatsapp.svg";
import styles from "./Footer.module.css";
import { footerCards } from "./constants.js";

function FooterCards() {
  return (
    <section className={styles.container}>
      {footerCards.map((item) => {
        return (
          <div key={item.title} className={styles.card}>
            <span>{item.title}</span>
            {item.isImg ? (
              <div className={styles.img}>
                <a>
                  <img src={instagram} />
                </a>
                <a>
                  <img src={whatsapp} />
                </a>
              </div>
            ) : (
              <p>{item.value}</p>
            )}
          </div>
        );
      })}
    </section>
  );
}
export default FooterCards;
