import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { HashLink as Link } from "react-router-hash-link";
import {
  card2,
  card3,
  FashionDistrictFestival23,
  one,
  smallcard1,
  smallcard2,
  smallcard3,
  smallframe2,
} from "../../asset";
import { ASTRANEW, brinc } from "../../asset/logo";
import {
  brand,
  BringyourFashionIdeastoLife2,
  howitworks,
} from "../../asset/textImg";
import { social11 } from "../../asset";
import { card1 } from "../../asset";
import { BringyourFashionIdeastoLife, Reinventing } from "../../asset/textImg";
import { Glitter } from "../../asset";
import Layout6 from "./Layout6";

import {
  FrameUni,
  KPMGlogo,
  Metalogo,
  Nvidea,
  TechNationLogo,
  awsstartups,
} from "../../asset/logo/index";
import { techLogo } from "../../asset/logo/index";
import Layout22 from "./Layout22";
import FAQs from "./FAQs/FAQs";

const Layoutt = () => {
  return (
    <div className="bg-bg1 bg-black bg-cover bg-fixed  text-white">
      <div className="flex  justify-between pt-[30px] px-[7%]">
        {" "}
        <img
          src={ASTRANEW}
          alt=""
          className="w-[126.56px] lg:w-[157px] flex m-auto lg:m-0 md:w-[180px]"
        />{" "}
        <button className="w-[146px] justify-center items-center lg:flex hidden h-[52px] bg-[#181818] rounded-[30px] border border-[#F8F8F8]">
          Chat with us
        </button>
      </div>

      <div className="flex px-[20px]  lg:pl-[7%] lg:mt-[120px] mt-[70px] flex-col lg:flex-row justify-center items-center lg:justify-between">
        <div className="flex flex-col lg:gap-[40px] gap-[30px] w-[635px] ">
          <div className="flex relative overflow-y-hidden">
            <img
              src={BringyourFashionIdeastoLife}
              alt=""
              className="lg:flex hidden"
            />

            <img
              src={BringyourFashionIdeastoLife2}
              alt=""
              className="lg:hidden flex m-auto"
            />

            <img
              src={Glitter}
              alt=""
              className="lg:w-[63.88px] w-[39px] h-[37.78px] lg:h-[61px] absolute bottom-[-5px] lg:left-[210px] left-[260px]"
            />
          </div>

          <p className="w-[438px] text-[20px] font-[200] flex lg:text-left text-center text-[#F8F8F8]">
            Generate unique designs using AI, and find talent near you to bring
            it to life!{" "}
          </p>
          <Link to="#joinwaitlist" smooth className="m-auto lg:m-0">
            <button className="w-[190px] h-[56px] flex gap-[5px]  justify-center items-center bg-[#181818] rounded-[30px] border border-[#F8F8F8]">
              Join the Waitlist <FiArrowRight />
            </button>
          </Link>
        </div>
        <div className="lg:flex hidden">
          <img src={FashionDistrictFestival23} alt="" className="" />
        </div>
        <div className="lg:hidden flex w-full mt-[45px] relative right-[20px] px-0 justify-center m-auto">
          <img src={smallframe2} alt="" className="" />
        </div>
      </div>
      <div className="lg:mt-[120px] mt-[60px]">
        <p className="lg:text-[30px] text-[20px] font-[200] justify-center flex lg:pb-[60px]">
          With Grants and Incubation from:
        </p>

        <div className="flex flex-wrap lg:w-[879.51px]  md:mt-[60px] md:gap-[35px] m-auto items-center justify-center gap-[25px] lg:gap-[55px] px-[40px] mt-[40px] lg:mt-[130px]  relative lg:top-[-140px]">
          <span>
            <img src={Metalogo} alt="" className="lg:w-[156.3px] w-[89.35px]" />
          </span>
          <span>
            <img
              src={KPMGlogo}
              alt=""
              className="lg:w-[112.41px] w-[64.26px]"
            />
          </span>
          <span>
            <img
              src={TechNationLogo}
              alt=""
              className="lg:w-[224.91px] w-[128px]"
            />
          </span>
          <span className="text-[white]">
            <img
              src={techLogo}
              alt=""
              className="lg:w-[75.89px] text-[white] w-[43.38px]"
            />
          </span>

          <span>
            <img src={FrameUni} alt="" className="lg:w-[155.7px] w-[89.01px]" />
          </span>
          <span>
            <img
              src={awsstartups}
              alt=""
              className="lg:w-[155.7px] w-[83.3px]"
            />
          </span>
          <span>
            <img src={Nvidea} alt="" className="lg:w-[173.68px] w-[99.26px]" />
          </span>
          <span>
            <img src={brinc} alt="" className="lg:w-[91.5px] w-[67.58px]" />
          </span>
        </div>
      </div>
      <p className="flex justify-center lg:mt-0 mt-[50px]">
        <img src={howitworks} alt="" className="w-[206.57px] lg:w-[391.08px]" />
      </p>
      <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-[20px] gap-[60px] mt-[80px]">
        <div className="lg:flex items-center relative hidden ">
          <img
            src={brand}
            alt=""
            className="absolute left-[55px] pt-[100px] w-[190px]"
          />
          <img src={one} alt="" className="relative left-[55px]" />

          <img src={card1} alt="" className="w-[402.3px] h-[442.64px]" />
        </div>
        {/* mobile1 */}
        <div className="lg:hidden flex">
          <img src={smallcard1} alt="" />
        </div>
        <div className=" relative top-[-13px] lg:flex hidden">
          <img src={card2} alt="" className=" w-[425.16px] h-[442.64px]" />
        </div>
        {/* mobile2 */}
        <div className="lg:hidden flex">
          <img src={smallcard2} alt="" />
        </div>
        <div className="lg:flex hidden">
          <img src={card3} alt="" className="w-[381.62px] h-[442.64px]" />
        </div>
        {/* mobile3 */}
        <div className="lg:hidden flex">
          <img src={smallcard3} alt="" />
        </div>
      </div>
      <Layout22 />
      <Layout6 />
      <FAQs />
    </div>
  );
};

export default Layoutt;
