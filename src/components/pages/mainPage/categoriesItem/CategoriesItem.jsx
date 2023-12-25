import styles from "./CategoriesItem.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

function CategoriesItem({ categories, status, error }) {
  return (
    <div className={styles.CategoriesItemContainer}>
      {error && <h2>Error ....</h2>}
      {status === "loading" && <h2>loading ....</h2>}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className={styles.mySwiper}
      >
        {categories?.map((category) => (
          <SwiperSlide key={category.id}>
            <Link to={`/categories/${category.id}`} className={styles.links}>
              <img
                className={styles.categoriesImg}
                src={`http://localhost:3333${category.image}`}
                alt={category.title}
              />
              <p className={styles.categoryInfo}>{category.title}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default CategoriesItem;
