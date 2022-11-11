import IconSizeCatOneSize from "@components/icons/IconSizeCatOneSize";
import IconSizeDogExtraLarge from "@components/icons/IconSizeDogExtraLarge";
import IconSizeDogLarge from "@components/icons/IconSizeDogLarge";
import IconSizeDogMedium from "@components/icons/IconSizeDogMedium";
import IconSizeDogSmall from "@components/icons/IconSizeDogSmall";
import Image from "next/image";
import React from "react";

const Collar = () => {
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
      className={`flex justify-center items-center flex-col w-full full mx-auto mb-24 text-center text-[#3C4043]`}
    >
      <h1 className="font-bold text-4xl leading-[44px] mb-4">
        Find the right collar
      </h1>
      <p className="font-bold text-base leading-6 mb-14">
        Use the size guide to help you find the right fit for your pet, or
        message us for help.
      </p>
      <div className="flex flex-row w-full max-w-7xl mb-12">
        <div className="basis-1/6"></div>
        <div className="basis-2/3 font-bold text-base leading-6">Dogs</div>
        <div className="basis-1/6 font-bold text-base leading-6">Cats</div>
      </div>
      <div className="flex  w-full max-w-7xl">
        <div className="w-1/6 h-full flex items-center justify-center">
          <div
            className={`relative w-[160px] h-[64px] bg-[#E1E1E1] rounded-lg flex items-center justify-center font-bold text-xs leading-4 uppercase
          before:absolute before:bg-white before:w-0 before:h-0 before:border-t-[10px] 
          before:border-b-[10px] before:border-r-[10px] before:border-t-transparent 
          before:border-b-transparent before:border-r-white before:border-solid 
          before:bg-transparent before:top-[22px] before:right-0`}
          >
            size
          </div>
        </div>
        <div className="w-1/6 font-bold text-2xl leading-[31px] border-r">Small</div>
        <div className="w-1/6 font-bold text-2xl leading-[31px] border-r">Medium</div>
        <div className="w-1/6 font-bold text-2xl leading-[31px] border-r">Large</div>
        <div className="w-1/6 font-bold text-2xl leading-[31px] border-r border-black">
          Extra Large
        </div>
        <div className="w-1/6 font-bold text-2xl leading-[31px]">One Size</div>
      </div>
      <div className="flex  w-full max-w-7xl">
        <div className="w-1/6 "></div>
        <div className="w-1/6 pt-8 flex items-center justify-center border-r" >
          {/* <Image
            width={115}
            height={29}
            alt={"size-img-small"}
            src="/size-img-small.svg"
          /> */}
          <IconSizeDogSmall/>
        </div>
        <div className="w-1/6 pt-8 flex items-center justify-center border-r">
          {/* <Image
            width={112}
            height={42}
            alt={"size-img-medium"}
            src="/size-img-medium.svg"
          /> */}
          <IconSizeDogMedium/>
        </div>
        <div className="w-1/6 pt-8 flex items-center justify-center border-r">
          {/* <Image
            width={143}
            height={54}
            alt={"size-img-large"}
            src="/size-img-large.svg"
          /> */}
          <IconSizeDogLarge/>
        </div>
        <div className="w-1/6 pt-8 flex items-center justify-center border-r border-black">
          {/* <Image
            width={150}
            height={62}
            alt={"size-img-extra-large"}
            src="/size-img-extra-large.svg"
          /> */}
          <IconSizeDogExtraLarge/>
        </div>
        <div className="w-1/6 pt-8 flex items-center justify-center">
          {/* <Image
            width={128}
            height={41}
            alt={"size-img-cat-one-size"}
            src="/size-img-cat-one-size.svg"
          /> */}
          <IconSizeCatOneSize/>
        </div>
      </div>
      <div className="flex  w-full max-w-7xl">
        <div className="w-1/6 pt-10 h-full flex items-center justify-center">
          <div
            className={`relative w-[160px] h-[64px] bg-[#E1E1E1] rounded-lg flex items-center justify-center font-bold text-xs leading-4 uppercase
          before:absolute before:bg-white before:w-0 before:h-0 before:border-t-[10px] 
          before:border-b-[10px] before:border-r-[10px] before:border-t-transparent 
          before:border-b-transparent before:border-r-white before:border-solid 
          before:bg-transparent before:top-[22px] before:right-0`}
          >
            Breeds Like
          </div>
        </div>
        <div className="w-1/6 px-3 pt-10 font-normal text-base leading-[22px] border-r">
          Chihuahua, Pomeranian, Maltese, Jack Russell
        </div>
        <div className="w-1/6 px-3 pt-10 font-normal text-base leading-[22px] border-r">
          Border Collie, Corgi, Bull Terrier, English Springer Spaniel
        </div>
        <div className="w-1/6 px-3 pt-10 font-normal text-base leading-[22px] border-r">
          Labrador, Greyhound, Old English Sheepdog, German Sheperd
        </div>
        <div className="w-1/6 px-3 pt-10 font-normal text-base leading-[22px] border-r border-black">
          English Mastiff, Bernese, Mountain Dog, Black Russian Terrier, Bull
          Mastiff, Cane Corso, Leonberger, Saint Bernard
        </div>
        <div className="w-1/6 px-3 pt-10 font-normal text-base leading-[22px]">
          One Size
        </div>
      </div>
      <div className="flex  w-full max-w-7xl">
        <div className="w-1/6 pt-10 h-full flex items-center justify-center">
          <div
            className={`relative w-[160px] h-[64px] bg-[#E1E1E1] rounded-lg flex items-center justify-center font-bold text-xs leading-4 uppercase
          before:absolute before:bg-white before:w-0 before:h-0 before:border-t-[10px] 
          before:border-b-[10px] before:border-r-[10px] before:border-t-transparent 
          before:border-b-transparent before:border-r-white before:border-solid 
          before:bg-transparent before:top-[22px] before:right-0`}
          >
            width
          </div>
        </div>
        <div className="w-1/6 pt-10  flex items-center justify-center font-normal text-base leading-[22px] border-r ">
          0.56”<br></br> 1.4cm
        </div>
        <div className="w-1/6 pt-10  flex items-center justify-center font-normal text-base leading-[22px] border-r ">
          0.8”<br></br>
          2.3cm
        </div>
        <div className="w-1/6 pt-10  flex items-center justify-center font-normal text-base leading-[22px] border-r ">
          1”<br></br>
          2.54cm
        </div>
        <div className="w-1/6 pt-10  flex items-center justify-center font-normal text-base leading-[22px] border-r border-black">
          1”<br></br>
          2.54cm
        </div>
        <div className="w-1/6 pt-10  flex items-center justify-center font-normal text-base leading-[22px]">
          0.56”<br></br>
          1.4cm
        </div>
      </div>
      <div className="flex  w-full max-w-7xl">
      <div className="w-1/6 pt-10 h-full flex items-center justify-center">
          <div
            className={`relative w-[160px] h-[64px] bg-[#E1E1E1] rounded-lg flex items-center justify-center font-bold text-xs leading-4 uppercase
          before:absolute before:bg-white before:w-0 before:h-0 before:border-t-[10px] 
          before:border-b-[10px] before:border-r-[10px] before:border-t-transparent 
          before:border-b-transparent before:border-r-white before:border-solid 
          before:bg-transparent before:top-[22px] before:right-0`}
          >
            neck size
          </div>
        </div>
        <div className="w-1/6 px-3 pt-10  flex items-start justify-center font-normal text-base leading-[22px] border-r">
        Small (8.5-10”)with cushion on the connector area
          </div>
          <div className="w-1/6 px-3 pt-10  flex items-start justify-center font-normal text-base leading-[22px] border-r">
          Medium (12-15”)with cushion on the connector area
          </div>
          <div className="w-1/6 px-3 pt-10  flex items-start justify-center font-normal text-base leading-[22px] border-r">
          Large  (16.5-22”)with cushion on the connector area
          </div>
          <div className="w-1/6 px-3 pt-10  flex items-start justify-center font-normal text-base leading-[22px] border-r border-black">
          Extra Large (20.5-30”) with cushion on the connector area
          </div>
          <div className="w-1/6 px-3 pt-10  flex items-start justify-center font-normal text-base leading-[22px]">
          Small (8.5-10”)with cushion on the connector area
          </div>
      </div>
    </section>
  );
};

export default Collar;
