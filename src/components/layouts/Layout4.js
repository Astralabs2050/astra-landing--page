import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowRight } from "react-icons/fi";
import { Listdesignforsale } from "../../asset/textImg";
import { social3 } from "../../asset";
import { three } from "../../asset";

const Layout4 = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);
  return (
    <>
      <table className="table-auto z-[1] border-collapse border-l-black border-[0.5px]  md:top-[1810px] border-[#A1A1A1] w-full absolute top-[1950px] lg:top-[2980px]">
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
        <tr className="md:hidden lg:table-row">
          <td className="border border-[#FFFFFF26] py-14"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-20"></td>
          <td className="border border-[#FFFFFF26] py-14"></td>
        </tr>
        <tr className="md:hidden lg:table-row">
          <td className="border border-[#FFFFFF26] py-14"></td>
          <td className="border border-[#FFFFFF26] py-10"></td>
          <td className="border border-[#FFFFFF26] py-10"></td>
          <td className="border border-[#FFFFFF26] py-10"></td>
          <td className="border border-[#FFFFFF26] py-14"></td>
        </tr>
        <tr className="lg:hidden md:hidden">
          <td className="border border-[#FFFFFF26] py-14"></td>
          <td className="border border-[#FFFFFF26] py-10"></td>
          <td className="border border-[#FFFFFF26] py-10"></td>
          <td className="border border-[#FFFFFF26] py-10"></td>
          <td className="border border-[#FFFFFF26] py-14"></td>
        </tr>
      </table>

      <div
        id="bg4"
        className="lg:pb-[120px] pb-[50px]  text-white w-[100%] md:pt-[70px] md:px-[30px] lg:px-0 flex flex-col lg:justify-center lg:items-center lg:pt-[30px]"
      >
        <p className="font-[700] lg:w-[122px] w-[62px] z-[9999] lg:items-center text-[#FFFFFF26] lg:top-[20px] top-[10px] left-[25px] lg:left-[-530px] relative">
          <img src={three} alt="" />
        </p>

        <div className="z-[999] flex lg:flex-row  md:flex-row  flex-col lg:gap-[40px] gap-[30px] lg:px-[150px] lg:mt-[10px] lg:justify-center lg:item-center ">
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
            <button className="transition-transform duration-500 hover:scale-110 lg:w-[230px] w-[195px] hidden  font-[200] text-[17px] lg:flex items-center gap-[10px] justify-center lg:h-[54px] h-[40px] rounded-[5px]  bg-white border-[0.5px] text-black">
              Generate Design <FiArrowRight />
            </button>
          </div>
          <div data-aos="fade-right" className="px-[20px] overflow-y-hidden md:w-[60%] lg:w-[50%]">
            <img
              src={social3}
              alt=""
              className="transition-transform duration-500 hover:scale-110 lg:w-[505px] "
            />
            <p className="lg:hidden flex mt-[20px] overflow-hidden">
              {" "}
              <button className="transition-transform duration-500 hover:scale-110 lg:w-[230px] w-[195px] font-[200] text-[17px] flex items-center gap-[10px] justify-center lg:h-[54px] h-[40px] rounded-[5px]  bg-white border-[0.5px] text-black">
                Join Waitlist <FiArrowRight />
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout4;
