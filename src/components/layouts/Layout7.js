import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowRight } from "react-icons/fi";
import { AsSeenOn, pitchdeck } from "../../asset/textImg";
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

const Layout7 = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);
  return (
    <div
    
      className={`pt-[100px] lg:pb-[150px] pb-[80px]  flex flex-col justify-center items-center text-white bg-bg1 bg-cover z-[-1]`}
    >
      <div
        data-aos="fade-left"
        className="flex flex-col justify-center items-center px-[10px] overflow-hidden py-[10px]"
      >
        <p className="lg:w-[254px] w-[180px] mb-[20px]">
          <img src={pitchdeck} alt="pitch" />
        </p>
        <p className="lg:text-[20px] text-[15px] font-[100] lg:mb-[60px] mb-[30px] lg:w-[498px] w-[333px] text-center">
          Are you an investor interested in joining our seed round? Please see
          our pitch deck below.
        </p>

        <a
          href="https://docsend.com/view/ipegvbqtd5bdtepr"
          className="relative z-[9999] hover:bg-[#504f4f7b] hover:opacity-90 overflow-y-hidden"
        >
          <button className="w-[189.87px] transition-transform duration-300 hover:scale-110 h-[57.32px] border flex items-center justify-center gap-[10px]">
            See Deck <FiArrowRight />
          </button>
        </a>
      </div>

      <p className="lg:w-[292px] w-[193px] font-[400] lg:mt-[150px] mt-[70px] lg:mb-[50px] mb-[50px] justify-center flex">
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
  );
};

export default Layout7;
