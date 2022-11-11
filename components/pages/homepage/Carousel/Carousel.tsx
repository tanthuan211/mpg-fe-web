import Image from "next/image";
import React, { useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType, Navigation } from 'swiper';

// Import Swiper styles
import "swiper/css";

const Carousel = () => {
  const swiperRef = useRef<SwiperType>();

  const nextSlide = () => {
    // console.log('slideNext');
    
    // swiperRef.current?.slideNext()
   
  };

  const previousSlide = () => {
    // console.log('slidePrev');
    // swiperRef.current?.slidePrev()
  };

  return (
    <section
      className={`flex justify-center items-center flex-col w-full full mx-auto  mt-10 mb-24 text-center text-[#3C4043]`}
    >
      <h1 className="font-bold text-4xl leading-[44px] mb-4">
        Designed for the modern pet parent.
      </h1>
      <p className="font-bold text-base leading-6 mb-14 max-w-[712px]">
        We’ve created a product fit for cats and dogs of all ages, breeds and
        lifestyles.
      </p>
      <div className="w-full h-full max-w-[1440px] max-h-[632px] mt-10 text-white">
        <Swiper
          slidesPerView={3}
          spaceBetween={-152}
          slidesPerGroup={1}
          // loop={true}
          // loopFillGroupWithBlank={true}
          // modules={[Navigation]}
          className="mySwiper"
          // onBeforeInit={(swiper) => {
          //   swiperRef.current = swiper;
          // }}
        >
          <SwiperSlide className="flex items-end justify-end h-full mt-28 z-[0]">
            <Image
              width={344}
              height={320}
              alt={"img-design-1"}
              src={"/img-design-1.webp"}
            />
          </SwiperSlide>
          <SwiperSlide className="z-[1]">
            <Image
              width={712}
              height={477}
              className="rounded-md"
              alt={"img-design-2"}
              src={"/img-design-2.webp"}
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-end justify-start h-full mt-28 z-[0]">
            <Image
             width={344}
             height={320}
              alt={"img-design-3"}
              src={"/img-design-3.webp"}
            />
          </SwiperSlide>
        </Swiper>
        <div className="flex items-center justify-center w-full h-[46px] mt-8">
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
      </div>
    </section>
  );
};

export default Carousel;
