import React, { useEffect, useState } from "react";
import { FiSend } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaAngleUp } from "react-icons/fa6";
import { ASTRANEW } from "../../asset/logo";
import AOS from "aos";
import "aos/dist/aos.css";


const Layout8 = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1200,
    });
  }, []);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 100); // Show after 100px of scrolling
    };

    // Add and remove the event listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        
        className="bg-black w-[100%] bg-bg7 bg-cover opacity-95 text-white flex lg:flex-row flex-col lg:justify-evenly gap-[50px] lg:items-center px-[20px] lg:h-[267px] py-[40px]"
      >
        <div data-aos="fade-left" className="flex flex-col gap-[50px]">
          <img src={ASTRANEW} alt="" className="lg:w-[180px] w-[130px]" />
          <div className="text-[15px] hidden lg:flex lg:flex-col font-[100] text-[#A1A1A1]">
            <p>All rights reserved</p>
            <p>&copy; 2024 Astra.</p>
          </div>
        </div>

        <div data-aos="fade-left" className="flex flex-col gap-[30px]">
          <p className="text-[15px] font-[200] text-[#E1E9F0]">
            Stay updated on Astra news and announcements.
          </p>
          <p className="w-[360px] justify-between h-[45px] bg-[#D9D9D91A] flex items-center px-[20px]">
            <input
              type="email"
              placeholder="name@gmail.com"
              className="outline-none text-[13px] h-[45px] w-[290px] bg-transparent text-[#A1A1A1]"
            />
            <FiSend className="text-[25px] text-[white]" />
          </p>
        </div>
        <div
          data-aos="fade-right"
          className="flex flex-col gap-[25px] lg:gap-[50px]"
        >
          <p className="text-[17px] text-[#F5F9FC]">Socials</p>
          <p className="flex gap-[30px] text-[#A1A1A1]  text-[20px]">
            <a href="https://t.me/+u-FRCcleboA3MzA0">
              <BsDiscord />
            </a>
            <a href="https://x.com/astraverse2050?s=21">
              {" "}
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/astraverse2050?igsh=MW8wNWFpemo5czc%3D&utm_source=qr">
              {" "}
              <RiInstagramFill />
            </a>
          </p>
        </div>
        <div
          data-aos="left"
          className="text-[15px] font-[100] gap-[3px] flex items-center text-[#A1A1A1] lg:hidden"
        >
          <p>All rights reserved,</p>
          <p>&copy; 2024 Astra.</p>
        </div>
        <div
          className={`fixed lg:bottom-[250px] bottom-[430px] right-3 lg:z-[9999] lg:right-[100px] flex flex-col items-center gap-[5px] text-[#858585] ${
            showButton ? "block" : "hidden"
          }`}
        >
          <p>up</p>
          <button
            className={`text-[#858585] bg-transparent border hover:bg-[#212121] font-[100] border-[#212121] py-2 px-2 rounded-[100%] ${
              showButton ? "block" : "hidden"
            }`}
            onClick={scrollToTop}
          >
            <FaAngleUp />
          </button>
        </div>
      </div>
    </>
  );
};

export default Layout8;
