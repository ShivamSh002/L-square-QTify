import React, { useEffect } from 'react'
import styles from "./Carousel.module.css"
import { Swiper, useSwiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import CarouselLeftNvigation from './carouselLeftNvigation'
import CarouselRightNvigation from './carouselRightNavigation'
import "swiper/css"


const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0, null);
  }, [data]);

  return <></>;
};

const Carousel = ({ data, renderComponent }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0rem 1.25rem" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselRightNvigation />
        <CarouselLeftNvigation />
        {data.map((ele, index) => (
          <SwiperSlide key={index}>
            {renderComponent(ele)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
