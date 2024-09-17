import React, { useCallback, useRef, useState } from "react";
import { EffectFade, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowLeft from "../assets/icons/ArrowLeft";
import ArrowRight from "../assets/icons/ArrowRight";
import { constants } from "../constants/textConstants";
import { Squircle } from "@squircle-js/react";

const PrinciplesContainer = () => {
  const [atBeginning, setAtBeginning] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const principles = constants.principles;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const handleSlideChange = (swiper) => {
    const isSecontToLastSlide = swiper.activeIndex === principles.length - 1;
    setAtBeginning(swiper.isBeginning);
    setAtEnd(isSecontToLastSlide);
  };
  return (
    <Squircle
      className={`relative z-10 bg-[#1D1F20] p-[4rem] ${!prefersReducedMotion ? "!pr-0" : ""} lg:p-[12.8rem]`}
      cornerRadius={50}
      cornerSmoothing={1}
    >
      <h2 className="gradient-text-green mb-[3.2rem] max-w-[27.4rem] font-rebond text-[2.4rem] font-medium leading-[108%] tracking-[-.024rem] text-transparent lg:mb-[2.4rem] lg:text-[4rem] lg:leading-[4.32rem] lg:tracking-[-0.048rem]">
        Our principles make us better.
      </h2>
      <Swiper
        slidesPerView={prefersReducedMotion ? 1 : 1.2}
        spaceBetween={60}
        modules={[EffectFade]}
        breakpoints={{
          1024: {
            spaceBetween: 168,
            slidesPerView: prefersReducedMotion ? 1 : 1.3,
          },
        }}
        ref={sliderRef}
        // className="w-full"
        effect={prefersReducedMotion ? "fade" : "slide"}
        onSlideChange={handleSlideChange}
      >
        {principles.map((principle, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-[60rem] text-left lg:max-w-[80rem]">
              <h3 className="mb-[2.4rem] font-rebond text-[4rem] font-medium leading-[100%] text-white lg:text-[9.6rem]">
                {principle.title}
              </h3>
              <p className="p-sm-reg lg:p-xl-reg text-white">
                {principle.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide className="flex flex-col gap-[2.4rem] py-16">
          <div className="lg:max-w-[80rem]">
            <h3 className="mb-[2.4rem] font-rebond text-[9.6rem] font-medium leading-[100%] text-white"></h3>
            <p className="p-sm-reg lg:p-xl-reg text-white"></p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="mt-[3.2rem] flex gap-[.8rem] lg:mt-[2.4rem]">
        <button
          onClick={handlePrev}
          className="rounded-full bg-white p-[1.6rem] disabled:opacity-20"
          disabled={atBeginning}
        >
          <ArrowLeft className="h-[1.6rem] w-[1.6rem]" />
        </button>
        <button
          onClick={handleNext}
          className="rounded-full bg-white p-[1.6rem] disabled:opacity-30"
          disabled={atEnd}
        >
          <ArrowRight className="h-[1.6rem] w-[1.6rem]" />
        </button>
      </div>
    {!prefersReducedMotion && (
        <div className="absolute right-0 top-0 z-10 h-full w-[12.8rem]  bg-gradient-to-r from-transparent to-[#1D1F20]"></div>
    )}
    </Squircle>
  );
};

export default PrinciplesContainer;
