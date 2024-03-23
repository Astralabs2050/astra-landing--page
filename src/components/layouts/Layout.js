import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowRight } from "react-icons/fi";
import {
  girl1,
  girl2,
  girl3,
  girl4,
  girl5,
  girl6,
  girl7,
  girl8,
  girl9,
  Boy1,
  Boy2,
  ASTRANEWLOGO,
} from "../../assets";

import { BringyourFashionIdeastoLife } from "../../assets/text-image";


const Layout = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1200,
    });
  }, []);
  return (
    <div
      className={`flex lg:gap-4 gap-[18px] text-white pt-[50px] lg:pt-[100px] w-[100%] justify-center px-[20px] bg-[url("/Users/ijeoma/Documents/astra-landing-page/src/assets/BACKGROUND-BLACK1.png")] bg-cover  overflow-auto lg:px-[40px]  pb-[50px] lg:pb-[300px]`}
    
    >
      <div
        data-aos="fade-left"
        className=" font-[400] w-[60%] lg:w-[50%] lg:px-[50px]"
      >
        <p className="lg:pb-[50px] pb-[30px]">
          <img src={ASTRANEWLOGO} alt="" className="w-[100px] lg:w-[200px]" />
        </p>
        <p className="text-left flex lg:leading-[108px] text-[32px] lg:text-[75px] font-[tan-waverly,'serif']">
          <img src={BringyourFashionIdeastoLife} alt="" />
          <img
            src="src/assets/Glitter.png"
            alt="glitter"
            className="relative lg:top-[230px] top-[89px] w-[25px] h-[35px] lg:w-[79px] lg:h-[75px]"
          />
        </p>
        <p className="lg:text-[20px] text-[15px] w-[219px] leading-[20.92px] lg:leading-[31.9px] lg:w-[507px] pt-[20px] lg:pt-[80px] font-[100] font-[{'Clash-Grotesk-Variable'}]">
          Generate unique fashion designs using AI, find makers near you to
          bring them to life and ship to customers after sales!
        </p>
        <p className="flex lg:flex-row flex-col lg:gap-[20px] gap-[10px] mt-[20px] lg:mt-[50px] text-[10px]  lg:text-[20px] font-[200]">
          <button className="lg:w-[230px] w-[195px]  text-[17px] transition-transform duration-300 hover:scale-110 flex items-center gap-[10px] justify-center lg:h-[54px] h-[40px] rounded-[5px]  bg-white border-[0.5px] text-black">
            Generate Design <FiArrowRight />
          </button>
          <button className="lg:w-[230px] w-[195px] text-[17px] transition-transform duration-300 hover:scale-110 lg:h-[54px] h-[40px] flex items-center gap-[10px] justify-center rounded-[5px] bg-transparent border-[0.5px]">
            Join as a Maker
            <FiArrowRight />
          </button>
        </p>
      </div>
      <div
        data-aos="fade-right"
        className="grid lg:grid-cols-4 grid-cols-3 justify-center items-center lg:w-[50%]"
      >
        <span>
          <img src={girl1} alt="" />
        </span>
        <span>
          <img src={Boy1} alt="" />
        </span>
        <span>
          <img src={girl2} alt="" />
        </span>
        <span>
          <img src={girl3} alt="" />
        </span>

        <span>
          <img src={Boy2} alt="" />
        </span>
        <span>
          <img src={girl4} alt="" />
        </span>
        <span>
          <img src={girl5} alt="" />
        </span>
        <span>
          <img src={girl6} alt="" />
        </span>

        <span>
          <img src={Boy1} alt="" />
        </span>
        <span>
          <img src={girl7} alt="" />
        </span>
        <span>
          <img src={girl8} alt="" />
        </span>
        <span>
          <img src={girl9} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Layout;
