import React, { useEffect } from "react";
import Layout6 from "./Layout6";
import AOS from "aos";
import "aos/dist/aos.css";

import { AsSeenOn, whitepaper } from "../../asset/textImg";
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
import { ASTRACOIN } from "../../asset";

const Layout5 = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);
  return (
    <div className="lg:pt-[150px] pt-[80px] lg:pb-[120px] text-white flex flex-col justify-center items-center bg-bg4 bg-cover">
      <div className="flex lg:flex-col px-[20px] md:justify-center md:items-center md:gap-[30px] flex-col lg:justify-center lg:items-center lg:gap-[50px]">
        <p className="lg:w-[292px] w-[193px] font-[400] lg:mt-[0px] mt-[70px] lg:mb-[50px] mb-[50px] justify-center m-auto flex">
          <img src={AsSeenOn} alt="as seen" />
        </p>
        <div
          data-aos="fade-left"
          className="flex w-[90%] lg:w-[1048px] lg:h-[259px] flex-wrap gap-[15px] lg:gap-[40px] justify-center items-center"
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
            <img src={image6} alt="" className="w-[93.15px] lg:w-[217px]" />
          </span>
          <span>
            <img src={image4} alt="" className="w-[129.46px] lg:w-[249px]" />
          </span>
          <span>
            <img src={image5} alt="" className="w-[105.3px] lg:w-[153px]" />
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

      {/* second */}
      <Layout6 />
      <div className="mt-[200px] px-[30px]">
        <img
          src={whitepaper}
          alt=""
          className="flex justify-center text-center m-auto mb-[20px]"
        />

        <p className="w-[498px] text-[20px] font-[300] flex justify-center text-center m-auto">
          The Astra token incentivises visits to stores with our VR booths and
          usage of our AI Design Co-pilot
        </p>
        <div className="mt-[100px] flex lg:flex-row flex-col-reverse items-center lg:gap-[150px] gap-[40px] ">
          <div className="flex flex-col lg:gap-[80px] gap-[40px]">
            <div className="flex flex-col gap-[15px] justify-center m-auto">
              {" "}
              <p className="lg:text-[40px] text-[25px]">Ways to earn tokens</p>
              <ul className="font-[200] flex flex-col gap-[15px] items-center lg:items-start">
                <li>
                  {" "}
                  <i className="fas fa-check text-white mr-2 overflow-y-hidden"></i>In store
                  Try-ons With Astra
                </li>
                <li>
                  <i className="fas fa-check text-white mr-2 overflow-y-hidden"></i>Sharing Images
                  to social Media
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-[15px]">
              {" "}
              <p className="lg:text-[40px] text-[25px] flex m-auto justify-center items-center">
                Ways to spend tokens
              </p>
              <ul className="font-[200] flex flex-col gap-[15px] lg:items-start items-center">
                <li>
                  <i className="fas fa-check text-white mr-2 overflow-y-hidden"></i>Generating
                  Designs with AI{" "}
                </li>
                <li>
                  <i className="fas fa-check text-white mr-2 overflow-y-hidden"></i>Pre-ordering
                  designs From Brands
                </li>
              </ul>
            </div>
          </div>
          <div class="bg-rectangle rounded-[30px] relative border-[#FFFFFF26] border-[1px] overflow-hidden">
            <div class="absolute inset-0 table-background">
              <table class="w-full h-full border-[#FFFFFF26]">
                <tbody>
                  <tr>
                    <td class="border border-[#FFFFFF26] p-2"></td>
                    <td class="border border-[#FFFFFF26] p-2"></td>
                    <td class="border border-[#FFFFFF26] p-2"></td>
                    <th class="border border-[#FFFFFF26] p-2"></th>
                  </tr>
                  <tr>
                    <td class="border border-[#FFFFFF26] p-2"></td>
                    <td class="border border-[#FFFFFF26] p-2"></td>
                    <td class="border border-[#FFFFFF26] p-2"></td>
                    <th class="border border-[#FFFFFF26] p-2"></th>
                  </tr>
                  <tr>
                    <td class="border border-[#FFFFFF26] p-2"></td>
                    <td class="border border-[#FFFFFF26] p-2"></td>
                    <td class="border border-[#FFFFFF26] p-2"></td>
                    <th class="border border-[#FFFFFF26] p-2"></th>
                  </tr>
                  <tr>
                    <td class="border border-[#FFFFFF26] p-2"></td>
                    <td class="border border-[#FFFFFF26] p-2"></td>
                    <td class="border border-[#FFFFFF26] p-2"></td>
                    <th class="border border-[#FFFFFF26] p-2"></th>
                  </tr>
                </tbody>
              </table>
            </div>
            <img src={ASTRACOIN} alt="" class="relative z-10 p-[50px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout5;
