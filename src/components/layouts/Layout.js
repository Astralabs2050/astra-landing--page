import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowRight } from "react-icons/fi";
import { HashLink as Link } from "react-router-hash-link";
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
import { Glitter } from "../../asset";

const Layout = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1200,
    });
  }, []);
  return (
    <div
    
      className={`flex z-[-1] bg-bg1 bg-cover lg:gap-4 gap-[18px] overflow-y-hidden text-white pt-[50px] lg:pt-[100px] w-[100%] justify-center px-[20px]  overflow-auto lg:px-[40px]  pb-[50px] lg:pb-[300px]`}
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
        <div className="flex items-end lg:gap-[12px] gap-[3px] relative lg:pb-0 pb-[3px] overflow-y-hidden">
          <div>
            <img
              src={BringyourFashionIdeastoLife}
              alt=""
              className="w-[507px]"
            />
          </div>

          <div className=" lg:flex relative lg:top-[5px] top-[3px]">
            <img src={Glitter} alt="glitter" className="" />
          </div>
        </div>
        <p className="lg:text-[20px] text-[12px] w-[219px] md:text-[25px] md:w-[600px] md:leading-none overflow-y-hidden leading-[20.92px] lg:leading-[31.9px] lg:w-[507px] pt-[20px] lg:pt-[80px] font-[100] font-[{'Clash-Grotesk-Variable'}]">
          Generate unique fashion designs using AI, find makers near you to
          bring them to life and ship to customers after sales!
        </p>
        <p className="flex lg:flex-row flex-col lg:gap-[20px] gap-[10px] mt-[20px] lg:mt-[50px] text-[10px]  overflow-hidden  lg:text-[20px] font-[200]">
          <Link to="#joinwaitlist" smooth className="overflow-y-hidden">
            <button className="lg:w-[230px] w-[180px]  text-[17px] overflow-hidden transition-transform duration-300 hover:scale-110 flex items-center gap-[10px] justify-center lg:h-[54px] h-[40px] rounded-[5px]  bg-white border-[0.5px] text-black">
              Join Waitlist <FiArrowRight />
            </button>
          </Link>
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
          <img
            src={Boy2}
            alt="boy2"
            className="xl:w-[130px] lg:w-[100px] md:w-[80px] w-[45px]"
          />
        </span>
        <span>
          <img src={girl4} alt="girl4" />
        </span>
        <span>
          <img src={girl5} alt="girl5" />
        </span>
        <span>
          <img src={girl6} alt="girl6" />
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
      <p className="lg:text-[35px] z-[9999] md:top-[700px] md:text-[30px] lg:absolute lg:flex xl:top-[990px] lg:top-[840px] hidden top-[430px] text-center text-[15px] justify-center w-[1042px] font-[{'Clash-Grotesk-Variable':100}] font-[100]">
        {" "}
        Creating a phygital fashion OS for design, sales, and manufacturing,
        supported by grants and incubation from:
      </p>
    </div>
  );
};

export default Layout;
