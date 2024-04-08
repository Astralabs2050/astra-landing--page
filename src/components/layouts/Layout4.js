import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowRight } from "react-icons/fi";
import { Listdesignforsale } from "../../asset/textImg";
import { social3 } from "../../asset";
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
      <table className="table-auto z-[1] border-collapse overflow-y-hidden border-l-black border-[0.5px] border-[#A1A1A1] w-full absolute top-[15px] lg:top-[30px]">
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
        <div className="z-[999] flex lg:flex-row  md:flex-row  flex-col lg:gap-[100px] gap-[30px] lg:px-[120px] lg:mt-[10px] lg:justify-center lg:item-center ">
          <div
            data-aos="fade-left"
            className="lg:w-[50%] w-[80%] flex flex-col gap-[20px] pl-[20px]"
          >
            <p className="lg:w-[122px] w-[62px] top-[30px] relative">
              <img src={three} alt="" />
            </p>
            <p>
              <img src={Listdesignforsale} alt="" />
            </p>
            <p className="font-[100] lg:text-[20px] text-15px">
              Sell designs through our marketplace and ship after sales!
            </p>
            <p className="z-[9999] lg:flex relative">
              <Link to="#joinwaitlist" smooth>
                <button className="transition-transform duration-500 hover:scale-110 hidden lg:w-[230px] w-[195px] font-[200] text-[17px] lg:flex items-center gap-[10px] justify-center lg:h-[54px] h-[40px] rounded-[5px]  bg-white border-[0.5px] text-black">
                  Join Waitlist <FiArrowRight />
                </button>
              </Link>
            </p>
          </div>
          <div
            data-aos="fade-right"
            className="px-[20px] lg:pt-[150px] md:pt-[50px] pt-0 overflow-y-hidden md:w-[60%] lg:w-[50%]"
          >
            <div className="">
              <img src={social3} alt="" className="" />
            </div>

            <p className="lg:hidden flex mt-[20px] relative overflow-hidden z-[9999]">
              {" "}
              <Link
                to="#joinwaitlist"
                smooth
                className="z-[9999]  overflow-y-hidden "
              >
                <button className="transition-transform duration-500 hover:scale-110 z-[9999] lg:w-[230px] w-[195px] font-[200] text-[17px] flex items-center gap-[10px] justify-center lg:h-[54px] h-[40px] rounded-[5px]  bg-white border-[0.5px] text-black">
                  Join Waitlist <FiArrowRight />
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout4;
