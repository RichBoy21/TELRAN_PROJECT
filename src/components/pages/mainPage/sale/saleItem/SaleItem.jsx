import styles from "./SaleItem.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import './styles.css'

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { renderProductsDiscountCards } from "../../../../../utils/renderCardsProducts";
import { getProducts } from "../../../../../store/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function SaleItem() {

  const { status, error, productsAll } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
        {productsAll
          .filter((product) => product.discont_price !== null)
          .map((product) => (
            <SwiperSlide key={product.id}>
              {renderProductsDiscountCards(product, styles)}
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default SaleItem;
