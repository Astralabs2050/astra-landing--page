import React from "react";

const Slide = ({ slideImage, text1, text2 }) => {
  return (
    <div className="text-white">
      <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[120px]">
        <img src={slideImage} alt="slide" className="w-[389px] px-[20px]" />
        <div className="lg:w-[389px] flex flex-col gap-[20px] px-[20px]">
          <p className="lg:text-[35px] text-[20px] font-[500] ">{text1}</p>
          <p className="lg:text-[22px] text-[16px] font-[200]">{text2}</p>
        </div>
      </div>
    </div>
    
  );
};

export default Slide;