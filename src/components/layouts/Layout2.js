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
import { techLogo } from "../../asset/logo/index";
import { one } from "../../asset";
import { UseGenerativeAItocreate2 } from "../../asset/textImg";
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
      className="relative overflow-y-hidden lg:pb-[200px] pb-[90px] text-white w-[100%] flex flex-col justify-center items-center pt-[40px] lg:pt-[50px]"
    >
      <p className="lg:text-[35px] z-[9999] md:top-[700px] md:text-[30px] lg:hidden xl:top-[-90px] lg:top-[870px] top-[430px] flex text-center text-[15px] px-[40px] justify-center w-[1042px] font-[{'Clash-Grotesk-Variable':100}] font-[100]">
        {" "}
        Creating a phygital fashion OS for design, sales, and manufacturing,
        supported by grants and incubation from:
      </p>
      <div
        data-aos="fade-down"
        className="flex flex-wrap  md:mt-[100px] md:gap-[35px] items-center justify-center gap-[30px] lg:gap-[50px] px-[20px] mt-[40px] lg:mt-[180px]  relative lg:top-[-140px]"
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
      <p className="lg:mt-[60px] mt-[80px] md:mt-[100px] md:w-[200px] w-[135px] lg:w-[235px]">
        <img src={howitworks} alt="" />
      </p>
      <div className="">
        <table className="table-auto z-[1] border-collapse border-[0.5px] overflow-y-auto border-[#FFFFFF26] w-full absolute overflow-hidden top-[370px] lg:top-[566px] xl:top-[450px]">
          <tr>
            <td className="border border-[#FFFFFF26]  py-10 border-l-transparent"></td>
            <td className="border border-[#FFFFFF26]  py-20 "></td>
            <td className="border border-[#FFFFFF26]  hidden lg:py-20 lg:table-cell "></td>
            <td className="border border-[#FFFFFF26] hidden lg:py-20  lg:table-cell"></td>
            <td className="border border-[#FFFFFF26]  py-10  border-r-transparent"></td>
          </tr>
          <tr>
            <td className="border border-[#FFFFFF26] py-10 border-l-transparent"></td>
            <td className="border border-[#FFFFFF26] py-20"></td>
            <td className="border border-[#FFFFFF26]  hidden lg:py-20 lg:table-cell "></td>
            <td className="border border-[#FFFFFF26] hidden lg:py-20  lg:table-cell"></td>
            <td className="border border-[#FFFFFF26] py-10 border-r-transparent"></td>
          </tr>
          <tr className="xl:table-row table-row lg:hidden ">
            <td className="border border-[#FFFFFF26] py-10 border-l-transparent"></td>
            <td className="border border-[#FFFFFF26]  py-20"></td>
            <td className="border border-[#FFFFFF26]  hidden lg:py-20 lg:table-cell "></td>
            <td className="border border-[#FFFFFF26] hidden lg:py-20  lg:table-cell"></td>
            <td className="border border-[#FFFFFF26] py-10 border-r-transparent"></td>
          </tr>
          <tr className="md:hidden table-row lg:table-row">
            <td className="border border-[#FFFFFF26] py-10 border-l-transparent"></td>
            <td className="border border-[#FFFFFF26] py-20 bg-[#A1A1A1] opacity-10 "></td>
            <td className="border border-[#FFFFFF26]  hidden lg:py-20  lg:table-cell "></td>
            <td className="border border-[#FFFFFF26] hidden lg:py-20  lg:table-cell"></td>
            <td className="border border-[#FFFFFF26] py-10  border-r-transparent"></td>
          </tr>
        </table>

        <div className="flex lg:flex-row lg:items-center z-[9999] md:flex-row flex-col gap-[30px] lg:gap-[60px] lg:px-[150px] mt-[20px] lg:mt-[80px]">
          <div
            data-aos="fade-left"
            className="lg:w-[55%] w-[70%]  pl-[30px] flex flex-col gap-[10px] md:w-[50%] lg:gap-[20px]  *:overflow-y-hidden"
          >
            <div className="">
              <div className=" relative top-[15px] hidden lg:flex  *:overflow-y-hidden lg:w-[75px] lg:h-[134px] w-[38px] min-h-[64px]">
                <img src={one} alt="" className=" " />
              </div>
              <p className=" hidden lg:flex">
                <img
                  src={UseGenerativeAI}
                  alt="text-mage"
                  className=" lg:w-[693px] w-[460px] "
                />
              </p>
            </div>

            <div className=" lg:hidden relative top-[15px]  *:overflow-y-hidden lg:w-[75px] lg:h-[134px] w-[38px] min-h-[64px]">
              <img src={one} alt="" className=" " />
            </div>

            <p className="lg:hidden">
              <img
                src={UseGenerativeAItocreate2}
                alt="text-mage"
                className=" w-[360px] "
              />
            </p>
            <p className="font-[100] lg:text-[20px] text-[15px]">
              Generate unique designs and save them on the blockchain to show
              ownership
            </p>
          </div>
          <div
            data-aos="fade-right"
            className="px-[20px] z-20 lg:w-[45%] md:w-[50%] overflow-y-hidden lg:pt-[100px] md:pt-[100px]"
          >
            <img src={social1} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout2;
