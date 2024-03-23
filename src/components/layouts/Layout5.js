import React, { useEffect } from "react";
import Layout6 from "./Layout6";
import AOS from "aos";
import "aos/dist/aos.css";
import { Frame1, Frame2, Frame3 } from "../../assets";
import { JoinAsPartner } from "../../assets/text-image";

const Layout5 = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);
  return (
    <div className="lg:pt-[150px] pt-[80px] lg:pb-[120px] bg-[url('/Users/ijeoma/Documents/astra-landing-page/public/bgImage/BACKGROUND-BLACK5.png')] bg-cover text-white flex flex-col justify-center items-center">
      <div className="flex lg:flex-row px-[20px] flex-col lg:justify-center lg:items-center lg:gap-[100px]">
        <div data-aos="fade-down">
          <p className=" w-[211px] lg:w-[527px] font-[400] pb-[20px]">
            <img src={JoinAsPartner} alt="join partner" />
          </p>
          <p className="lg:text-[20px] text-[15px] font-[200]">
            Register and sign up as a partner on Astra
          </p>
          <div className="flex gap-[20px] mt-[50px]">
            <span>
              <img src={Frame1} alt="" />
            </span>
            <span>
              <img src={Frame2} alt="" />
            </span>
            <span>
              <img src={Frame3} alt="" />
            </span>
          </div>
        </div>
        <div data-aos="fade-down" className="lg:pt-[80px] pt-[40px] lg:w-[50%]">
          <p className="lg:text-[40px] text-[25px] mb-[20px] font-[300]">
            Earn a Living Making Ideas Real
          </p>
          <p className="lg:text-[20px] text-[16px] w-[414px] font-[100] mb-[20px]">
            With Astra you take your 3D design studio or physical manufacturing
            hub to the next level!
          </p>
          <ul className="lg:text-[20px] font-[100] list-item mb-[20px] text-[16px]">
            <li className="flex items-center gap-[10px]">
              <span className="p-[3px] w-5 h-5 bg-transparent border-2 border-white rounded-full flex items-center justify-center">
                <span className=" block w-1 h-1 bg-white rounded-full"></span>
              </span>
              Apply to new jobs shared daily
            </li>
            <li className="flex items-center gap-[10px]">
              {" "}
              <span className="p-[3px] w-5 h-5 bg-transparent border-2 border-white rounded-full flex items-center justify-center">
                <span className=" block w-1 h-1 bg-white rounded-full"></span>
              </span>
              Get paid fast through crypto
            </li>
            <li className="flex items-center gap-[10px]">
              {" "}
              <span className="p-[3px] w-5 h-5 bg-transparent border-2 border-white rounded-full flex items-center justify-center">
                <span className=" block w-1 h-1 bg-white rounded-full"></span>
              </span>
              Get paid fast through crypto
            </li>
          </ul>
          <button className="border transition-transform duration-300 hover:scale-110 rounded-[5px] font-[200] w-[207.53px] h-[57.32px]">
            Join as a Maker
          </button>
        </div>
      </div>

      {/* second */}
      <Layout6 />
    </div>
  );
};

export default Layout5;
