import Accordion from "@components/global/Accordion";
import Image from "next/image";
import React from "react";

const Faq = () => {
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
      className={`flex justify-center items-center flex-col w-full full mx-auto mb-24 text-left text-[#3C4043]`}
    >
      <div className="flex h-full w-full max-w-7xl justify-center items-stretch">
        <div className="w-full max-w-[436px] h-full flex items-start justify-start flex-col self-stretch">
          <h1 className="font-bold text-4xl leading-[44px] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="font-bold text-base leading-6 mb-14">
            Here are some of the most asked questions about our health and
            location monitor
          </p>
          <button className="border-2 border-[#4C06B7] text-[#4C06B7] px-[40px] py-[12px] rounded-md font-bold text-base leading-[22px] self-center justify-self-end mt-56">
            Show more
          </button>
        </div>
        <div className="w-full max-w-[512px] h-full flex flex-col items-start justify-start">
          <Accordion
            title="Do I get a free trial?"
            content="Each monitor comes with a 1-month free data trial for you to try
              out our services. At the end of your trial, we will ask if you’d
              like to upgrade to the 1, 2 or 3-year plan to make use of our
              special discounts or if you would prefer to remain on our default
              plan which is $9.99/pcm."
            expand={true}
          />
          <Accordion
            title="Can I use the health monitor without a plan?"
            content="With any of our available plans, your health and location monitor will send you health,"
          />
          <Accordion
            title="Can I cancel my subscription at any time?"
            content="For those on a monthly $9.99 plan, you can cancel anytime and "
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;
