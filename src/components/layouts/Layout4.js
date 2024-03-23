
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowRight } from "react-icons/fi";
import { Listdesignforsale } from "../../assets/text-image";
import { social2 } from "../../assets";

const Layout4 = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);
  return (
    <>
      <table className="table-auto z-[10] border-collapse border-l-black border-[0.5px] border-[#A1A1A1] w-full absolute top-[2290px] lg:top-[3060px]">
        <tr>
          <td className="border border-[#FFFFFF26] py-14"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-10"></td>
        </tr>
        <tr>
          <td className="border border-[#FFFFFF26] py-14"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-14"></td>
        </tr>
        <tr>
          <td className="border border-[#FFFFFF26] py-14"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-14"></td>
        </tr>
        <tr>
          <td className="border border-[#FFFFFF26] py-14"></td>
          <td className="border border-[#FFFFFF26] py-10"></td>
          <td className="border border-[#FFFFFF26] py-10"></td>
          <td className="border border-[#FFFFFF26] py-10"></td>
          <td className="border border-[#FFFFFF26] py-14"></td>
        </tr>
        <tr className="lg:hidden">
          <td className="border border-[#FFFFFF26] py-14"></td>
          <td className="border border-[#FFFFFF26] py-10"></td>
          <td className="border border-[#FFFFFF26] py-10"></td>
          <td className="border border-[#FFFFFF26] py-10"></td>
          <td className="border border-[#FFFFFF26] py-14"></td>
        </tr>
      </table>

      <div className="lg:pb-[120px] pb-[50px] bg-[url('/Users/ijeoma/Documents/astra-landing-page/public/bgImage/BACKGROUND-BLACK4.png')] bg-cover text-white w-[100%] flex flex-col lg:justify-center lg:items-center lg:pt-[30px]">
        <p className="font-[700] z-[999] lg:text-[200px] text-[100px] lg:items-center w-[75px] h-[134px] text-[#FFFFFF26] lg:top-[-55px] top-[40px] left-[25px] lg:left-[-530px] relative">
          3
        </p>

        <div className="z-[999] flex lg:flex-row flex-col lg:gap-[40px] gap-[30px] lg:px-[150px] lg:mt-[10px] lg:justify-center lg:item-center">
          <div
            data-aos="fade-left"
            className="lg:w-[50%] w-[80%] flex flex-col gap-[20px] pl-[20px]"
          >
            <p>
              <img src={Listdesignforsale} alt="" />
            </p>
            <p className="font-[100]">
              Sell designs through our marketplace and ship after sales!
            </p>
            <button className="transition-transform duration-500 hover:scale-110 lg:w-[230px] w-[195px] font-[200] text-[17px] flex items-center gap-[10px] justify-center lg:h-[54px] h-[40px] rounded-[5px]  bg-white border-[0.5px] text-black">
              Generate Design <FiArrowRight />
            </button>
          </div>
          <div data-aos="fade-right" className="px-[20px]">
            <img
              src={social2}
              alt=""
              className="transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout4;