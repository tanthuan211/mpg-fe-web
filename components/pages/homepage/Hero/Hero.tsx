import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@components/ui";

const Hero = () => {
  const nextSlide = () => {
    let activeSlide = document.querySelector(".slide.translate-x-0");
    if (activeSlide) {
      activeSlide.classList.remove("translate-x-0");
      activeSlide.classList.add("-translate-x-full");
      let nextSlide = activeSlide.nextElementSibling;
      if (nextSlide) {
        nextSlide.classList.remove("translate-x-full");
        nextSlide.classList.add("translate-x-0");
      }
    }
  };

  const previousSlide = () => {
    let activeSlide = document.querySelector(".slide.translate-x-0");
    if (activeSlide) {
      activeSlide.classList.remove("translate-x-0");
      activeSlide.classList.add("translate-x-full");

      let previousSlide = activeSlide.previousElementSibling;
      if (previousSlide) {
        previousSlide.classList.remove("-translate-x-full");
        previousSlide.classList.add("translate-x-0");
      }
    }
  };
  
    return (
      <section
        className={`relative justify-center flex flex-col w-full full mx-auto max-h-[640px] h-[640px]`}
      >
        <div className="absolute inset-0 flex items-end justify-end right-56 bottom-36 z-20">
          <div className="flex items-center justify-around w-[220px] h-[46px]">
            <button
              type="button"
              className="flex items-center justify-center max-w-[74px] bg-custom-hero-icon-left-scroll bg-left-top bg-no-repeat w-[74px] h-[46px] cursor-pointer"
              id="hero-previous-button"
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
            <p className="text-[#4C06B7]">1/3</p>
            <button
              type="button"
              className="flex items-center justify-center max-w-[74px] bg-custom-hero-icon-right-scroll bg-right-top bg-no-repeat w-[74px] h-[46px] cursor-pointer"
              id="hero-next-button"
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
        <div className="absolute inset-0 flex items-center justify-end w-full auto-cols-fr -z-10 content-stretch overflow-clip max-h-[640px] bg-[#4C06B7]">
          <Image
            alt={"Marketing Banner Image"}
            className="object-contain w-full bg-[#4C06B7] max-w-[1440px] max-h-[640px]"
            src={"/banner-hero.svg"}
            width={1440}
            height={640}
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-baseline justify-center gap-4 pl-40 py-8 max-h-[640px] h-[640px] bg-gradient-to-t dark:from-contrast/60 dark:text-primary from-primary/60 text-contrast z-10">
          <h1 className="max-w-lg text-5xl leading-[56px] uppercase text-[#FFFFFF]">
            A smart, powerful monitor that lets your pet do the talking.
          </h1>
          <div>
            <p className="font-medium text-2xl leading-[33px] text-[#FFFFFF]">
              USD $159
            </p>
            <p className="mt-1 font-normal text-center text-xs leading-4 text-[#FFFFFF]">
            plus choose a 1, 2 or 3 year data plan
            </p>
          </div>
          <Link
            href={"#"}
            className="bg-[#4C06B7] text-white px-[40px] py-[12px] text-sm font-medium mt-6 border-2 rounded-lg border-solid border-[#FFFFFF] z-20"
            aria-current="page"
          >
           Buy
          </Link>
        </div>
      </section>
    );

};

export default Hero;
