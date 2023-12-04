import styles from "./SaleItem.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

function SaleItem({ products, status, error }) {


  
  return (
    <div className={styles.productsItemContainer}>
      {error && <h2>Error ....</h2>}
      {status === "loading" && <h2>loading ....</h2>}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={4}
      >
        {products.filter((product) => product.discont_price !== null)
          .map((product) => {
            const percentDiscount = Math.floor(
              100 - (product.discont_price * 100) / product.price
            );

            return (
              <SwiperSlide key={product.id}>
                <div className={styles.productsContainer}>
                  <div className={styles.productDiscount}>
                    <p>-{percentDiscount}%</p>
                    <img
                      src={`http://localhost:3333${product.image}`}
                      alt={product.title}
                    />
                  </div>
                  <p className={styles.productInfo}>{product.title}</p>
                  <div className={styles.priceContainer}>
                    <p className={styles.productDiscontPrice}>{`${"$"}${
                      product.discont_price
                    }`}</p>
                    <p className={styles.productPrice}>{`${"$"}${
                      product.price
                    }`}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default SaleItem;
