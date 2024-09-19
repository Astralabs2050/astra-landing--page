import React from "react";
import { qrcode } from "../../asset";
import { Glitter } from "../../asset";
import { enquires } from "../../asset/textImg";

const LayoutCode = () => {
  return (
    <div className="bg-bg1 bg-black bg-fixed bg-cover relative  flex lg:flex-row flex-col lg:justify-evenly lg:gap-0 gap-[30px] items-center py-[100px] text-white">
      <div className="">
        {" "}
        {/* Added z-10 to bring form forward */}
        <p>
          <img src={enquires} alt="" className="lg:hidden flex pb-[30px]" />
        </p>
        <form className="w-[334.06px] bg-[#121212] overflow-y-hidden border border-[#D9D9D933] px-[25px] py-[35px] h-[438.55px] rounded-[5px] z-10 ">
          <p className="text-[23.13px] font-[400] pb-[10px]">Get in Touch</p>
          <p className="text-[#A1A1A1] font-[400] mb-[20px]">
            We want to hear from you
          </p>
          <input
            placeholder="example@gmail.com"
            type="text"
            className="border px-[10px] text-[12.03px] outline-none mb-[15px] w-full h-[37.01px] rounded-[5px] bg-[#D9D9D91A] text-white"
          />
          <br />
          <textarea
            className="border p-[10px] text-[#A1A1A1] text-[12.03px] outline-none bg-[#D9D9D91A] w-full h-[166.57px] mb-[20px] rounded-[5px] "
            placeholder="Write your message"
          />
          <button className="w-full outline-none flex justify-center items-center text-black h-[37px] bg-[#F5F9FC] rounded-[5px]">
            Send
          </button>
        </form>
      </div>

      <div className="text-[25px] font-[200]">or</div>

      <div className="px-[30px] lg:px-0">
        <img
          src={Glitter}
          alt=""
          className="absolute left-[710px] top-[63px] lg:flex hidden z-[5]"
        />
        <div className="lg:w-[547.82px] rounded-[10px] w-full py-[60px] lg:h-[713.46px] flex gap-[45px] flex-col justify-center items-center bg-[#121212]">
          <img src={qrcode} alt="" className="w-[207.91px] lg:w-[340px]" />
          <p className="w-[416px] text-[15.39px] px-[45px] lg:text-[25px] font-[200] text-center flex flex-col justify-center items-center mx-auto">
            Please scan the QR code to learn more or visit
            <a
              href="https://calendly.com/delzerinle"
              className="underline ml-1"
            >
              calendly.com/delzerinle
            </a>
            to set up a meeting
          </p>
        </div>
      </div>
    </div>
  );
};

export default LayoutCode;
