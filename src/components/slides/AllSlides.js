import React, { useEffect, useState } from "react";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { pastwork } from "../../asset/textImg";

const slides = [
  { id: 1, content: <Slide1 /> },
  { id: 2, content: <Slide2 /> },
  { id: 3, content: <Slide3 /> },
  { id: 4, content: <Slide4 /> },
  { id: 5, content: <Slide5 /> },
];

const AllSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const goToPreviousSlide = () => {
    const firstSlide = currentSlide === 0;
    const newIndex = firstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const goToNextSlide = () => {
    const lastSlide = currentSlide === slides.length - 1;
    const newIndex = lastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };
  return (
    <div
      id="bg2"
      data-aos="fade-left"
      className=" flex flex-col items-center justify-center text-white py-[50px] lg:py-[100px]"
    >
      <p className="w-[162px] lg:w-[263px] mb-[30px]">
        <img src={pastwork} alt="Past" />
      </p>
      {currentSlide > 0 && (
        <div
          onClick={goToPreviousSlide}
          className="cursor-pointer relative top-[380px] left-[-600px] z-10 hidden lg:flex"
        >
          <FaAngleLeft className="text-[60px]" />
        </div>
      )}
      <div className="relative lg:w-[1320px] w-[90%] h-[577px] lg:h-[710px] rounded-[20px] flex items-center justify-center mb-[80px] mx-auto border border-[#7C7C7C] ">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute transition-opacity duration-700  w-full h-full flex justify-center items-center ${
              index === currentSlide ? "opacity-100 " : "opacity-0"
            }`}
          >
            {slide.content}
          </div>
        ))}
      </div>
      {currentSlide < 4 && (
        <div
          onClick={goToNextSlide}
          className="relative bottom-[476px] right-[-600px] z-10  hidden lg:flex"
        >
          <FaAngleRight className="text-[60px]" />
        </div>
      )}

      <div className="flex justify-center relative bottom-[25px] lg:bottom-[230px] gap-[10px]">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`h-4 w-4 rounded-full  ${
              index === currentSlide ? "bg-[#D9D9D933]" : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default AllSlides;