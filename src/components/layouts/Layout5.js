import React, { useEffect } from "react";
import Layout6 from "./Layout6";
import AOS from "aos";
import "aos/dist/aos.css";

import {  whitepaper } from "../../asset/textImg";

import { ASTRACOIN } from "../../asset";

const Layout5 = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);
  return (
    <div className="lg:pt-[30px] pt-[0px] lg:pb-[120px] text-white flex flex-col justify-center items-center bg-bg4 bg-cover">
     
      {/* second */}
      <Layout6 />
      {/* next */}
      <div className="lg:mt-[200px] mt-[100px] px-[30px] lg:mb-0 mb-[30px]">
        <img
          src={whitepaper}
          alt=""
          className="flex justify-center text-center m-auto mb-[20px]"
        />

        <p className="w-[498px] font-[300] lg:text-[20px] text-[16px] flex justify-center text-center m-auto">
          The Astra token incentivises visits to stores with our VR booths and
          usage of our AI Design Co-pilot
        </p>
        <div className="lg:mt-[100px] mt-[50px] flex lg:flex-row flex-col-reverse items-center lg:gap-[190px] gap-[40px] ">
          <div className="flex flex-col lg:gap-[80px] gap-[40px]">
            <div className="flex flex-col gap-[15px] justify-center m-auto">
              {" "}
              <p className="lg:text-[40px] lg:text-start text-center text-[25px]">Ways to earn tokens</p>
              <ul className="font-[200] flex flex-col gap-[15px]  items-center lg:items-start">
                <li className="flex items-center">
                  {" "}
                  <i className="fas fa-check text-white mr-2 overflow-y-hidden"></i>
                  In store Try-ons With Astra
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-white mr-2 overflow-y-hidden"></i>
                  Sharing Images to social Media
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-[15px]">
              {" "}
              <p className="lg:text-[40px] text-[25px] flex m-auto justify-center items-center">
                Ways to spend tokens
              </p>
              <ul className="font-[200] flex flex-col gap-[15px] lg:items-start items-center">
                <li className="flex items-center">
                  <i className="fas fa-check text-white mr-2 overflow-y-hidden"></i>
                  Generating Designs with AI{" "}
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-white mr-2 overflow-y-hidden"></i>
                  Pre-ordering designs From Brands
                </li>
              </ul>
            </div>
          </div>
          <div class="bg-rectangle inset-0 bg-opacity-60 bg-black rounded-[30px] relative border-[#FFFFFF26] border-[1px] overflow-hidden">
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
