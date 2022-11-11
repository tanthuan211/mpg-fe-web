import Image from "next/image";
import React, { useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Swiper as SwiperType,
  Pagination,
  Navigation,
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function ProductGallery() {
  const swiperRef = useRef<SwiperType>();

  const nextSlide = () => {
    // console.log('slideNext');

    swiperRef.current?.slideNext();
  };

  const previousSlide = () => {
    // console.log('slidePrev');
    swiperRef.current?.slidePrev();
  };

  return (
    <section className="w-full h-full max-w-[620px] max-h-[608px] mt-4 relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="flex items-center justify-center h-full w-full">
          <Image
            width={620}
            height={608}
            className="rounded-lg"
            alt={"img-product-1"}
            src={"/img-product-1.png"}
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-full">
          <Image
            width={620}
            height={608}
            className="rounded-lg"
            alt={"img-product-2"}
            src={"/img-product-2.png"}
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-full">
          <Image
            width={620}
            height={608}
            className="rounded-lg"
            alt={"img-product-1"}
            src={"/img-product-1.png"}
          />
        </SwiperSlide>
      </Swiper>
      <div className="absolute inset-0 flex items-center justify-between w-full h-[46px] top-1/2 z-10 px-6">
        <button
          type="button"
          className="flex items-center justify-center max-w-[74px] bg-custom-carousel-icon-left-scroll bg-left-top bg-no-repeat w-[74px] h-[46px] cursor-pointer"
          id="carousel-previous-button"
          onClick={previousSlide}
        >
          <Image
            width={8}
            height={16}
            className="h-4 w-2"
            alt={"MyPetGo"}
            src="/icon-left-scroll.svg"
          />
        </button>
        <button
          type="button"
          className="flex items-center justify-center max-w-[74px] bg-custom-carousel-icon-right-scroll bg-right-top bg-no-repeat w-[74px] h-[46px] cursor-pointer"
          id="carousel-next-button"
          onClick={nextSlide}
        >
          <Image
            width={8}
            height={16}
            className="h-4 w-2"
            alt={"MyPetGo"}
            src="/icon-right-scroll.svg"
          />
        </button>
      </div>
    </section>
  );
}
