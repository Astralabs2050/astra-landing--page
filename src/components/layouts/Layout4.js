import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowRight } from "react-icons/fi";
import { Listdesignforsale } from "../../asset/textImg";
import { social11 } from "../../asset";
import { three } from "../../asset";
import { HashLink as Link } from "react-router-hash-link";

const Layout4 = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);
  return (
    <div  className="relative w-[100%] max-h-[100%] overflow-y-hidden bg-bg4 bg-cover">
      <table className="table-auto z-[1] border-collapse overflow-y-hidden border-l-black border-[0.5px] border-[#A1A1A1] w-full absolute top-[15px] lg:top-[15px]">
        <tr>
          <td className="border border-[#FFFFFF26] py-10 border-l-transparent"></td>
          <td className="border border-[#FFFFFF26] py-20 bg-[#A1A1A1] opacity-10 "></td>
          <td className="border border-[#FFFFFF26]  hidden lg:py-20 lg:table-cell "></td>
          <td className="border border-[#FFFFFF26] hidden lg:py-20  lg:table-cell"></td>
          <td className="border border-[#FFFFFF26] py-10 border-r-transparent"></td>
        </tr>
        <tr>
          <td className="border border-[#FFFFFF26] py-10 border-l-transparent"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26]  hidden lg:py-20 lg:table-cell "></td>
          <td className="border border-[#FFFFFF26] hidden lg:py-20  lg:table-cell"></td>
          <td className="border border-[#FFFFFF26] py-10 border-r-transparent"></td>
        </tr>
        <tr>
          <td className="border border-[#FFFFFF26] py-10 border-l-transparent"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26]  hidden lg:py-20 lg:table-cell "></td>
          <td className="border border-[#FFFFFF26] hidden lg:py-20  lg:table-cell"></td>
          <td className="border border-[#FFFFFF26] py-10 border-r-transparent"></td>
        </tr>
        <tr className="md:hidden table-row lg:table-row">
          <td className="border border-[#FFFFFF26] py-10 border-l-transparent"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26]  hidden lg:py-20  lg:table-cell"></td>
          <td className="border border-[#FFFFFF26] hidden lg:py-20  lg:table-cell"></td>
          <td className="border border-[#FFFFFF26] py-10 border-r-transparent"></td>
        </tr>
        <tr className="md:hidden hidden  lg:hidden">
          <td className="border border-[#FFFFFF26] py-10 border-l-transparent"></td>
          <td className="border border-[#FFFFFF26] py-20 "></td>
          <td className="border border-[#FFFFFF26] py-20  "></td>
          <td className="border border-[#FFFFFF26] py-20  "></td>
          <td className="border border-[#FFFFFF26] py-10  border-r-transparent"></td>
        </tr>
      </table>

      <div className=" lg:pb-[130px] pb-[50px] z-[9999]  text-white w-[100%] md:pt-[70px] md:px-[30px] lg:px-0 flex flex-col lg:justify-center lg:items-center lg:pt-[20px]">
        <div className="z-[999] flex lg:flex-row  md:flex-row  flex-col lg:gap-[100px] md:gap-[0px] gap-[30px] lg:px-[120px] lg:mt-[10px] lg:justify-center lg:item-center ">
          <div
            data-aos="fade-left"
            className="lg:w-[50%] w-[80%] lg:pt-[100px] flex flex-col gap-[20px] pl-[20px]"
          >
            <p className="lg:w-[122px] w-[62px] top-[30px] relative">
              <img src={three} alt="" />
            </p>
            <p>
              <img src={Listdesignforsale} alt="" />
            </p>
         
          </div>
          <div
            data-aos="fade-right"
            className="px-[20px] lg:pt-[150px] md:pt-[50px] pt-0 overflow-y-hidden md:w-[75%] lg:w-[50%]"
          >
            <div className="lg:w-[506px] md:w-[100%]">
              <img src={social11} alt="" className="" />
            </div>

      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout4;
