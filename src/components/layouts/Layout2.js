import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import {
  FrameUni,
  KPMGlogo,
  Metalogo,
  Nvidea,
  TechNationLogo,
} from "../../asset/logo/index";
import { social1 } from "../../asset";
import { techLogo } from "../../assets/logo/index";
import { one } from "../../asset";
import { UseGenerativeAItocreate2 } from "../../assets/text-image";
import { howitworks } from "../../asset/textImg";
import { UseGenerativeAI } from "../../asset/textImg";

const Layout2 = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);
  return (
    <div
      id="bg2"
      className="lg:pb-[200px] pb-[90px] text-white w-[100%] flex flex-col justify-center items-center pt-[40px] lg:pt-[50px]"
    >
      <p className="lg:text-[35px] z-[9999] md:top-[700px] md:text-[30px] lg:absolute lg:top-[990px] top-[430px] flex text-center text-[15px] px-[40px] justify-center w-[1042px] font-[{'Clash-Grotesk-Variable':100}] font-[100]">
        {" "}
        Creating a phygital fashion OS for design, sales, and manufacturing,
        supported by grants and incubation from:
      </p>
      <div
        data-aos="fade-down"
        className="lg:flex lg:flex-wrap grid grid-cols-3 md:mt-[100px] md:gap-[35px] items-center gap-[10px] lg:gap-[50px] px-[20px] mt-[40px] lg:mt-[180px]  relative lg:top-[-140px]"
      >
        <span>
          <img src={Metalogo} alt="" className="lg:w-[156.3px] w-[89.35px]" />
        </span>
        <span>
          <img src={KPMGlogo} alt="" className="lg:w-[112.41px] w-[64.26px]" />
        </span>
        <span>
          <img
            src={TechNationLogo}
            alt=""
            className="lg:w-[220.02px] w-[125.78px]"
          />
        </span>
        <span className="text-[white]">
          <img
            src={techLogo}
            alt=""
            className="lg:w-[75.89px] text-[white] w-[43.38px]"
          />
        </span>

        <span>
          <img src={Nvidea} alt="" className="lg:w-[173.68px] w-[99.26px]" />
        </span>
        <span>
          <img src={FrameUni} alt="" className="lg:w-[155.7px] w-[89.01px]" />
        </span>
      </div>
      {/* second */}{" "}
      <table className="table-auto z-[1] border-collapse border-[0.5px] border-[#FFFFFF26]  md:top-[1060px] w-full absolute top-[670px] lg:top-[1550px]">
        <tr>
          <td className="border border-[#FFFFFF26] py-10 border-r-0"></td>
          <td className="border border-[#FFFFFF26] py-20 border-r-0"></td>
          <td className="border border-[#FFFFFF26] py-20 border-r-0"></td>
          <td className="border border-[#FFFFFF26] py-20 border-r-0"></td>
          <td className="border border-[#FFFFFF26] py-10 border-r-0"></td>
        </tr>
        <tr>
          <td className="border border-[#FFFFFF26] py-10 border-r-0"></td>
          <td className="border border-[#FFFFFF26] py-20 border-r-0"></td>
          <td className="border border-[#FFFFFF26] py-20 border-r-0"></td>
          <td className="border border-[#FFFFFF26] py-20 border-r-0"></td>
          <td className="border border-[#FFFFFF26] py-10 border-r-0"></td>
        </tr>
        <tr className="md:hidden lg:table-row">
          <td className="border border-[#FFFFFF26] py-10"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-10"></td>
        </tr>
        <tr className="md:hidden lg:table-row">
          <td className="border border-[#FFFFFF26] py-10"></td>
          <td className="border border-[#FFFFFF26] lg:py-20 py-10"></td>
          <td className="border border-[#FFFFFF26] lg:py-20 py-10"></td>
          <td className="border border-[#FFFFFF26] lg:py-20 py-10"></td>
          <td className="border border-[#FFFFFF26] py-10"></td>
        </tr>
      </table>
      <p className="lg:mt-[60px] mt-[50px] md:mt-[100px] md:w-[200px] w-[125px] lg:w-[235px]">
        <img src={howitworks} alt="" />
      </p>
      <p className="font-[700] items-center xl:overflow-y-hidden lg:w-[75px] w-[38px] lg:h-[134px] text-[#FFFFFF26] top-[20px] lg:top-[90px] md:left-[-350px] right-[160px] lg:left-[-550px] relative">
        <img src={one} alt="" />
      </p>
      <div className="flex lg:flex-row z-[9999] md:flex-row flex-col gap-[30px] lg:gap-[60px] lg:px-[150px] lg:mt-[80px]">
        <div
          data-aos="fade-left"
          className="lg:w-[55%] w-[70%]  pl-[30px] flex flex-col gap-[10px] md:w-[50%] lg:gap-[20px]"
        >
          <p className=" hidden lg:flex">
            <img
              src={UseGenerativeAI}
              alt="text-mage"
              className=" lg:w-[693px]"
            />
          </p>
          <p className="lg:hidden">
            <img
              src={UseGenerativeAItocreate2}
              alt="text-mage"
              className=" w-[350px] "
            />
          </p>
          <p className="font-[100] lg:text-[20px] text-[15px]">
            Generate unique designs and save them on the blockchain to show
            ownership
          </p>
        </div>
        <div
          data-aos="fade-right"
          className="px-[20px] lg:w-[503px] md:w-[50%] overflow-y-hidden"
        >
          <img
            src={social1}
            alt=""
            className="transition-transform duration-300 hover:scale-110 "
          />
        </div>
      </div>
    </div>
  );
};

export default Layout2;
