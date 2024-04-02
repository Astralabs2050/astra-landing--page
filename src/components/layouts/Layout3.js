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
    <>
      <table className="table-auto z-[1] border-collapse border-[0.5px]  md:top-[1430px] border-[#A1A1A1] w-full absolute top-[1330px] lg:top-[2270px]">
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
        <tr className="md:hidden lg:table-row">
          <td className="border border-[#FFFFFF26] py-10"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-10"></td>
        </tr>
        <tr className="md:hidden lg:table-row">
          <td className="border border-[#FFFFFF26] py-10"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-10"></td>
        </tr>
      </table>
      <div
        id="bg3"
        className="z-[9999] *:m-auto flex flex-col-reverse *:overflow-y-hidden lg:flex-row md:flex-row *:justify-center md:px-[30px] gap-[30px] lg:px-[140px] xl:pl-[160px] lg:gap-[20px] lg:pt-[50px] pt-[10px] lg:pb-[200px] pb-[90px] text-white w-[100%]"
      >
        <div
          data-aos="fade-left"
          className="z-[9999] lg:w-[503px] lg:px-[40px] md:pt-[120px] xl:px-0  px-[20px] *:overflow-y-hidden md:w-[50%] md:px-0"
        >
          <img src={social2} alt="" className="" />
        </div>
        <div
          data-aos="fade-right"
          className="lg:w-[50%] w-[80%] z-[9999] flex flex-col gap-[25px]"
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
    </>
  );
};

export default Layout3;
