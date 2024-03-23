
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import {
  FrameUni,
  KPMGlogo,
  Metalogo,
  Nvidea,
  techLogo,
  TechNationLogo,
} from "../../assets/logo/index";
import { social1 } from "../../assets";
import { UseGenerativeAI,howitworks } from "../../assets/text-image";


const Layout2 = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);
  return (
    <div className="lg:pb-[200px] pb-[90px] bg-[url('/Users/ijeoma/Documents/astra-landing-page/src/assets/BACKGROUND-BLACK2.png')] bg-cover text-white w-[100%] flex flex-col justify-center items-center pt-[40px] lg:pt-[50px]">
      <p className="lg:text-[35px] flex text-center text-[15px] px-[40px] justify-center w-[1042px] font-[{'Clash-Grotesk-Variable':100}] font-[100]">
        {" "}
        building a operating system for phygital fashion design, sales and
        manufacturing with grants & incubation from:
      </p>
      <div
        data-aos="fade-down"
        className="lg:flex lg:flex-wrap grid grid-cols-3 items-center gap-[20px] lg:gap-[50px] px-[20px] mt-[40px] lg:mt-[80px]"
      >
        <span>
          <img src={Metalogo} alt="" />
        </span>
        <span>
          <img src={KPMGlogo} alt="" />
        </span>
        <span>
          <img src={techLogo} alt="" />
        </span>
        <span>
          <img src={TechNationLogo} alt="" />
        </span>

        <span>
          <img src={Nvidea} alt="" />
        </span>
        <span>
          <img src={FrameUni} alt="" />
        </span>
      </div>
      {/* second */}{" "}
      <table className="table-auto z-[10] border-collapse border-[0.5px] border-[#FFFFFF26] w-full absolute top-[900px] lg:top-[1660px]">
        <tr>
          <td className="border border-[#FFFFFF26] py-10 "></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-10"></td>
        </tr>
        <tr>
          <td className="border border-[#FFFFFF26] py-10"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-10"></td>
        </tr>
        <tr>
          <td className="border border-[#FFFFFF26] py-10"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-10"></td>
        </tr>
        <tr>
          <td className="border border-[#FFFFFF26] py-10"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-10"></td>
        </tr>
      </table>
      <p className="lg:mt-[120px] mt-[50px] text-[35px] font-[700]">
        <img src={howitworks} alt="" />
      </p>
      <p className="font-[700] lg:text-[200px] text-[100px] items-center w-[75px] h-[134px] text-[#FFFFFF26] top-[40px] lg:top-[10px] right-[160px] lg:left-[-550px] relative">
        1
      </p>
      <div className="flex lg:flex-row z-[9999] flex-col gap-[30px] lg:gap-[60px] lg:px-[150px] lg:mt-[80px]">
        <div
          data-aos="fade-left"
          className="lg:w-[55%] w-[70%]  pl-[30px] flex flex-col lg:gap-[20px]"
        >
          <p className=" w-[350px] lg:w-[693px]">
            <img
              src={UseGenerativeAI}
              alt="text-mage"
            />
          </p>
          <p className="font-[100] lg:text-[20px] text-[15px]">
            Generate unique designs and save them on the blockchain to show
            ownership
          </p>
        </div>
        <div data-aos="fade-right" className="px-[20px]">
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
