import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Listdesignforsale } from "../../asset/textImg";
import { social11 } from "../../asset";
import { three } from "../../asset";


import { AsSeenOn } from "../../asset/textImg";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
} from "../../asset/logo";

const Layout4 = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);
  return (
    <div className="relative w-[100%] max-h-[100%] overflow-y-hidden bg-bg4 bg-cover">
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

      <div className=" lg:pb-[170px] pb-[50px] z-[9999] text-white w-[100%] m-auto md:pt-[70px] md:px-[30px] lg:flex-row lg:px-0 flex flex-col lg:justify-center lg:items-center lg:pt-[20px]">
        <div className="z-[999] flex lg:flex-row md:flex-row flex-col lg:gap-[50px] md:gap-[0px] gap-[30px] lg:m-auto w-full lg:px-[150px] lg:mt-[10px] lg:justify-center lg:items-center ">
          <div
            data-aos="fade-left"
            className="lg:w-[50%] w-[80%] lg:pt-[40px] flex flex-col gap-[20px] lg:pl-0 pl-[20px]"
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
            className="px-[20px] lg:px-0  md:pt-[50px] pt-0 md:w-[75%] lg:w-[506.31px] lg:mt-[60px]"
          >
            <img src={social11} alt="" className="lg:w-[506.31px] md:w-[100%] " />
          </div>
        </div>
      </div>

      {/* as seen */}

      <div className="flex lg:flex-col lg:mt-[50px] lg:mb-[20px] px-[20px] mb-[40px] md:justify-center md:items-center md:gap-[30px] flex-col lg:justify-center lg:items-center lg:gap-[50px]">
        <p className="lg:w-[292px] w-[193px] font-[400] lg:mt-[0px] mt-[140px] lg:mb-[30px] mb-[50px] justify-center m-auto flex">
          <img src={AsSeenOn} alt="as seen" />
        </p>
        <div
          data-aos="fade-left"
          className="flex w-[90%] lg:w-[1047.86px] lg:min-h-[259px] flex-wrap gap-[15px] lg:gap-[60px] justify-center items-center"
        >
          <span>
            <img src={image1} alt="" className="w-[131.97px] lg:w-[213px]" />
          </span>
          <span>
            <img src={image2} alt="" className="w-[29.33px] lg:w-[60px]" />
          </span>
          <span>
            <img src={image3} alt="" className="w-[69.79px] lg:w-[128.86px]" />
          </span>
          <span>
            <img src={image4} alt="" className="w-[129.46px] lg:w-[249px]" />
          </span>
          <span>
            <img src={image5} alt="" className="w-[105.3px] lg:w-[153px]" />
          </span>
          <span>
            <img src={image6} alt="" className="w-[93.15px] lg:w-[217px]" />
          </span>

          <span>
            <img src={image7} alt="" className="w-[99.23px] lg:w-[189px]" />
          </span>
          <span>
            <img src={image8} alt="" className="w-[99.23px] lg:w-[188px]" />
          </span>
          <span>
            <img src={image9} alt="" className="w-[97.98px] lg:w-[222px]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Layout4;
