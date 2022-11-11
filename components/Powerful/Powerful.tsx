import Image from "next/image";
import React from "react";

const powerfulList = [
  {
    title: "3-axis accelerometer",
    img: "/3-axis.svg",
  },
  {
    title: "GPS",
    img: "/curent-location.svg",
  },
  {
    title: "Bluetooth",
    img: "/bluetooth.svg",
  },
  {
    title: "Li-Po Battery (720mAh)",
    img: "/li-po-battery.svg",
  },
  {
    title: "Gyroscope",
    img: "/gyroscope-sensor.svg",
  },
  {
    title: "Temperature sensor",
    img: "/thermometer.svg",
  },
  {
    title: "Wi-Fi",
    img: "/wi-fi.svg",
  },
  {
    title: "IPX67 Water resistant",
    img: "/shield-water.svg",
  },
];

const Powerful = () => {
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
      className={`flex justify-center items-center flex-col w-full full mx-auto  mt-10 mb-24 text-center text-[#3C4043]`}
    >
      <h1 className="font-bold text-4xl leading-[44px] mb-4 max-w-[530px]">
        The most powerful, functional and accurate pet wearable.
      </h1>
      <p className="font-bold text-base leading-6 mb-14 max-w-[712px]">
        Your monitor is packed with powerful new technology to help you track
        your pet’s health and behaviour insights and be able to find your pet’s
        current location with precision accuracy.
      </p>
      <div className="grid gap-4 grid-cols-4 grid-rows-2 w-full max-w-7xl">
        {powerfulList.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <Image width={40} height={40} className="w-10 h-10" alt={item.title} src={item.img} />
              <p className="mt-4 font-normal text-base leading-[22px]">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
      <div className="w-full h-full max-w-[1080px] max-h-[648px] mt-24 flex text-white">
        <Image
          width={543}
          height={648}
          alt={"MyPetGo_1CCH5557_Highres_Retouched"}
          src={"/MyPetGo_1CCH5557_Highres_Retouched1.jpg"}
        />
        <div className="w-full max-w-[537px] bg-[#4C06B7] h-full min-h-[648px] flex flex-col items-start justify-center text-left px-24">
          <p className="font-bold text-sm leading-6 text-left w-full">MyPetGo v1.0</p>
          <h1 className="font-bold text-4xl leading-[44px] mt-6 mb-4">It’s smart. It’s powerful,and super accurate.</h1>
          <p className="font-normal text-base leading-6 mb-14">
            Sit feugiat ipsum lectus adipiscing eu, lacinia adipiscing. Id dui
            varius adipiscing non lorem non risus lorem. Eget aliquet velit
            curabitur rhoncus scelerisque purus id fringilla tristique.
          </p>
          <div className="flex items-center justify-around w-[232px] h-[46px]">
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
            <button
              type="button"
              className="flex items-center justify-center max-w-10 bg-custom-bg-icon-view-3d bg-right-top bg-no-repeat w-[46px] h-[46px] cursor-pointer"
              id="hero-next-button"
              onClick={nextSlide}
            >
              <Image
                width={24}
                height={24}
                className="h-6 w-6"
                alt={"MyPetGo"}
                src="/icon-view-3d.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Powerful;
