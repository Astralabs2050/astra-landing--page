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
} from "../../asset";
import { ASTRANEW } from "../../asset/logo";

import { BringyourFashionIdeastoLife } from "../../asset/textImg";
import { Glitter } from "../../assets";

const Layout = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1200,
    });
  }, []);
  return (
    <div
      id="bg1"
      className={`flex z-[-1] lg:gap-4 gap-[18px] overflow-y-hidden text-white pt-[50px] lg:pt-[100px] w-[100%] justify-center px-[20px]  overflow-auto lg:px-[40px]  pb-[50px] lg:pb-[300px]`}
    >
      <div
        data-aos="fade-left"
        className=" font-[400]  w-[60%] md:flex md:flex-col md:gap-[40px] lg:gap-0 lg:w-[50%] lg:px-[50px]"
      >
        <p className="lg:pb-[50px] pb-[30px]">
          <img
            src={ASTRANEW}
            alt=""
            className="w-[100px] lg:w-[200px] md:w-[150px]"
          />
        </p>
        <div className="flex items-end  relative overflow-y-hidden">
          <div>
            <img
              src={BringyourFashionIdeastoLife}
              alt=""
              className="w-[507px]"
            />
          </div>

          <div className=" lg:flex ">
            <img src={Glitter} alt="glitter" className=" " />
          </div>
        </div>
        <p className="lg:text-[20px] text-[15px] w-[219px] md:text-[25px] md:w-[600px] md:leading-none overflow-y-hidden leading-[20.92px] lg:leading-[31.9px] lg:w-[507px] pt-[20px] lg:pt-[80px] font-[100] font-[{'Clash-Grotesk-Variable'}]">
          Generate unique fashion designs using AI, find makers near you to
          bring them to life and ship to customers after sales!
        </p>
        <p className="flex lg:flex-row flex-col lg:gap-[20px] gap-[10px] mt-[20px] lg:mt-[50px] text-[10px]  overflow-hidden  lg:text-[20px] font-[200]">
          <button className="lg:w-[230px] w-[180px]  text-[17px] transition-transform duration-300 hover:scale-110 flex items-center gap-[10px] justify-center lg:h-[54px] h-[40px] rounded-[5px]  bg-white border-[0.5px] text-black">
            Join Waitlist <FiArrowRight />
          </button>
        </p>
      </div>

      <div
        data-aos="fade-right"
        className="grid lg:grid-cols-4 grid-cols-3 justify-center items-center w-[40%] lg:w-[50%]"
      >
        <span>
          <img src={girl1} alt="" className="" />
        </span>
        <span>
          <img src={Boy1} alt="" className="" />
        </span>
        <span>
          <img src={girl2} alt="" />
        </span>
        <span>
          <img src={girl3} alt="" />
        </span>

        <span>
          <img src={Boy2} alt="" className="w-[130px]" />
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
