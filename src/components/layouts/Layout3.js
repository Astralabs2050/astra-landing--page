import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { social2 } from "../../asset";
import { CreateAjob } from "../../asset/textImg";
import { two } from "../../asset";

const Layout3 = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);
  return (
    <div  className="relative w-100% overflow-y-hidden bg-bg3 bg-cover z-[-1]">
      <table className="table-auto z-[1] border-collapse border-[0.5px] *:overflow-y-auto border-[#A1A1A1] w-full m-auto absolute top-[18px] lg:top-[0]  xl:top-[30px]">
        <tr>
          <td className="border border-[#FFFFFF26] py-10 border-l-transparent"></td>
          <td className="border border-[#FFFFFF26] py-20 bg-[#A1A1A1] opacity-10"></td>
          <td className="border border-[#FFFFFF26]  hidden lg:py-20 lg:table-cell "></td>
          <td className="border border-[#FFFFFF26] hidden lg:py-20  lg:table-cell"></td>
          <td className="border border-[#FFFFFF26]   py-10  border-r-transparent"></td>
        </tr>
        <tr className="">
          <td className="border border-[#FFFFFF26] py-10 border-l-transparent"></td>
          <td className="border border-[#FFFFFF26] py-20 "></td>
          <td className="border border-[#FFFFFF26]  hidden lg:py-20 lg:table-cell "></td>
          <td className="border border-[#FFFFFF26] hidden lg:py-20  lg:table-cell"></td>
          <td className="border border-[#FFFFFF26]  py-10  border-r-transparent"></td>
        </tr>
        <tr className="lg:table-row">
          <td className="border border-[#FFFFFF26] py-10 border-l-transparent"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26]  hidden lg:py-20 lg:table-cell "></td>
          <td className="border border-[#FFFFFF26] hidden lg:py-20  lg:table-cell"></td>
          <td className="border border-[#FFFFFF26]  py-10  border-r-transparent"></td>
        </tr>
        <tr className="md:hidden  lg:table-row">
          <td className="border border-[#FFFFFF26] md:py-8 py-10 border-l-transparent"></td>
          <td className="border border-[#FFFFFF26] md:py-16 py-20 "></td>
          <td className="border border-[#FFFFFF26]  hidden lg:py-20 lg:table-cell "></td>
          <td className="border border-[#FFFFFF26] hidden lg:py-20  lg:table-cell"></td>
          <td className="border border-[#FFFFFF26]  md:py-8 py-10  border-r-transparent"></td>
        </tr>
      </table>
      <div className="z-[9999] *:m-auto flex flex-col-reverse *:overflow-y-hidden lg:flex-row md:flex-row *:justify-center md:px-[30px] gap-[30px] lg:px-[120px] xl:pl-[160px] lg:gap-[140px] lg:pt-[50px] pt-[10px] lg:pb-[200px] pb-[90px] text-white w-[100%]">
        <div
          data-aos="fade-left"
          className="z-[9999] lg:w-[503px] lg:px-[40px] md:pt-[120px] xl:px-0  px-[20px] *:overflow-y-hidden md:w-[50%] md:px-0"
        >
          <img src={social2} alt="" className="" />
        </div>
        <div
          data-aos="fade-right"
          className="lg:w-[50%] w-[80%] z-[9999] relative left-[-15px] lg:left-0 flex flex-col gap-[25px]"
        >
          <p className="lg:w-[122px] w-[61px] relative top-[35px]">
            <img src={two} alt="" />
          </p>
          <p className="lg:w-[630px]">
            <img src={CreateAjob} alt="text" />
          </p>
          <p className="lg:text-[20px] text-[15px] font-[100]">
            Enhance your design by co creating with a 3D or physical maker
          </p>
        </div>
      </div>
    </div>
  );
};

export default Layout3;
