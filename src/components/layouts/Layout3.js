import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { social3 } from "../../assets";
import { CreateAjob } from "../../assets/text-image";

const Layout3 = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);
  return (
    <>
      <table className="table-auto z-[10] border-collapse border-[0.5px] border-[#A1A1A1] w-full absolute top-[1570px] lg:top-[2380px]">
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
        className="z-[9999] flex flex-col-reverse lg:flex-row lg:mx-auto lg:items-center lg:justify-center gap-[30px] lg:gap-[130px] lg:pt-[200px] pt-[120px] lg:pb-[250px] text-white w-[100%]"
      >
        <p className="font-[700] z-[20] lg:text-[200px] text-[100px] items-center w-[75px] h-[134px] text-[#FFFFFF26] lg:top-[-270px] bottom-[595px] left-[20px] lg:left-[795px] relative">
          2
        </p>
        <div data-aos="fade-left" className="z-[9999] px-[20px]">
          <img
            src={social3}
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
