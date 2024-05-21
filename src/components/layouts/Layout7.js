import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowRight } from "react-icons/fi";
import { pitchdeck } from "../../asset/textImg";

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
    </div>
  );
};

export default Layout7;
