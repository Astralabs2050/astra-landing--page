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
      <table className="table-auto z-[1] border-collapse border-[0.5px] border-[#A1A1A1] w-full absolute top-[1275px] lg:top-[2380px]">
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
      <div
        id="bg3"
        className="z-[9999] m-auto flex flex-col-reverse lg:flex-row lg:mx-auto lg:items-center lg:justify-center gap-[30px] lg:gap-[130px] lg:pt-[200px] pt-[90px] lg:pb-[250px] text-white w-[100%]"
      >
        <p className="font-[700] z-[20] items-center lg:w-[122px] w-[61px] lg:h-[134px] text-[#FFFFFF26] lg:top-[-190px] bottom-[565px] left-[30px] lg:left-[805px] relative">
          <img src={two} alt="" />
        </p>
        <div
          data-aos="fade-left"
          className="z-[9999] lg:w-[503px] lg:px-0 px-[20px] overflow-y-hidden"
        >
          <img
            src={social2}
            alt=""
            className="transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div
          data-aos="fade-right"
          className="lg:w-[60%] w-[80%] lg:pr-[70px] pl-[20px] z-[9999] flex flex-col gap-[20px]"
        >
          <p className="lg:text-[50px] text-[30px]">
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
