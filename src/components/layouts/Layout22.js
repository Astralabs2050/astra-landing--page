import React from "react";
import { FiArrowRight } from "react-icons/fi";

import { row1, row2, row3, row4 } from "../../asset/slidesImg";
import { Joinmaker } from "../../asset/textImg";
import { HashLink as Link } from "react-router-hash-link";

const images = [row1, row2, row3, row4, row1, row2, row3, row1];

const Layout22 = () => {
  return (
    <div className="lg:mt-[90px] mt-[70px]">
      <img src={Joinmaker} alt="Join as partner" className="flex  m-auto  w-[306.57px] lg:w-[491.08px]" />
      <p className="font-[100] flex text-center justify-center lg:px-0 px-[28px] lg:text-[25px] text-[15px] mt-[20px]">
        Join Astra as a maker and earn money making clothes for people all over
        the world.
      </p>
      <Link to="#joinwaitlist" smooth>
        <button className="w-[190px] h-[56px] mt-[30px] mb-[70px] flex m-auto gap-[5px] justify-center items-center bg-transparent hover:bg-[#181818] rounded-[30px] border border-[#F8F8F8]">
          Join the Waitlist <FiArrowRight />
        </button>
      </Link>
      <div className=" lg:w-[95%] w-full lg:pl-[150px] px-[10px] justify-end items-end flex ">
        <div className="flex gap-[30px]  overflow-x-auto">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className=" object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout22;
