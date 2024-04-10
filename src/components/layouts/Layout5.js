import React, { useEffect } from "react";
import Layout6 from "./Layout6";
import AOS from "aos";
import "aos/dist/aos.css";
import { Frame1, Frame2, Frame3 } from "../../asset";
import { JoinAsPartner } from "../../asset/textImg";
import { HashLink as Link } from "react-router-hash-link";

const Layout5 = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);
  return (
    <div
     
      className="lg:pt-[150px] pt-[80px] lg:pb-[120px] text-white flex flex-col justify-center items-center bg-bg4 bg-cover"
    >
      <div className="flex lg:flex-row px-[20px] md:flex-row md:justify-center md:items-center md:gap-[30px] flex-col lg:justify-center lg:items-center lg:gap-[100px]">
        <div data-aos="fade-down">
          <p className=" w-[230px] md:w-[300px] lg:w-[527px] font-[400] pb-[20px]">
            <img src={JoinAsPartner} alt="join partner" />
          </p>
          <p className="lg:text-[20px] text-[15px] font-[200]">
            Sign up as a partner on Astra
          </p>
          <div className="flex gap-[20px] mt-[50px]">
            <span>
              <img src={Frame1} alt="" className="w-[134px]" />
            </span>
            <span>
              <img src={Frame2} alt="" className="w-[134px]" />
            </span>
            <span>
              <img src={Frame3} alt="" className="w-[134px]" />
            </span>
          </div>
        </div>
        <div
          data-aos="fade-down"
          className="lg:pt-[80px] md:mt-[50px] pt-[40px] lg:w-[50%] p-[10px] overflow-y-hidden"
        >
          <p className="lg:text-[40px] text-[25px] mb-[20px] font-[300]">
            Earn a Living Making Ideas Real
          </p>
          <p className="lg:text-[20px] text-[#F8F8F8] text-[16px] w-[414px] font-[100] mb-[20px]">
            With Astra you take your 3D design studio or physical manufacturing
            hub to the next level!
          </p>
          <ul className="lg:text-[20px] font-[100]  mb-[20px] flex flex-col lg:gap-[15px] gap-[10px] text-[15px]">
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
              Build a reputation for great work
            </li>
            <li className="flex items-center gap-[10px]">
              {" "}
              <span className="p-[3px] w-5 h-5 bg-transparent border-2 border-white rounded-full flex items-center justify-center">
                <span className=" block w-1 h-1 bg-white rounded-full"></span>
              </span>
              ⁠⁠Earn Astra tokens for completed jobs
            </li>
          </ul>
          <Link to="#joinwaitlist" smooth className="">
            <button className="border hover:bg-[#3c3b3b7b] mt-[20px] hover:opacity-95  hover:text-white hover:border-none z-[9999] transition-transform duration-300 hover:scale-110 rounded-[5px] font-[200] w-[207.53px] h-[57.32px]">
              Join Waitlist
            </button>
          </Link>
        </div>
      </div>

      {/* second */}
      <Layout6 />
    </div>
  );
};

export default Layout5;
