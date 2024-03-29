import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Glitter, Frame4 } from "../../asset";
import { joinwaitlist } from "../../asset/textImg";

const Layout6 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profession: "",
    website: "",
  });
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="lg:mt-[150px] mt-[100px] ">
      <img
        data-aos="fade-right"
        src={Glitter}
        alt="glitter"
        className="relative  left-[520px] lg:top-[0px] w-[30px] h-[40px] lg:w-[79px] lg:h-[75px] lg:flex hidden"
      />
      <div className="flex lg:flex-row  flex-col gap-[30px] lg:gap-0  lg:justify-center lg:items-center">
        <div
          data-aos="fade-down"
          className="flex flex-col gap-[40px] px-[20px]"
        >
          <p className="lg:w-[297px] w-[180px]">
            <img src={joinwaitlist} alt="" />
          </p>
          <form
            onSubmit={handleSubmit}
            className="border border-[#A1A1A1] md:w-[500px] px-[35px] py-[60px] lg:w-[361px] w-full m-auto flex flex-col gap-[20px] text-[#A1A1A1] rounded-[10px] font-[200]"
          >
            <div className="">
              <label>Name of the Business:</label>
              <br />
              <input
                type="text"
                name="name"
                className="w-full h-[40px] bg-[#D9D9D91A] outline-none pl-[10px] mt-[5px] rounded-[5px]"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <br />
              <input
                type="email"
                name="email"
                className="w-full h-[40px] bg-[#D9D9D91A] outline-none pl-[10px] mt-[5px] rounded-[5px]"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Are You a:</label>
              <br />
              <select
                name="profession"
                className="h-[40px]  bg-[#D9D9D91A] text-[white] w-full outline-none px-[10px] mt-[5px] rounded-[5px] font-[200]"
                onChange={handleInputChange}
              >
                <option>Select Business Type</option>
                <option>Fashion Creative</option>
                <option>Manufacturer</option>
                <option>3D Studio</option>
              </select>
            </div>
            <div>
              <label>Website/Social Media</label>
              <br />

              <input
                type="text"
                name="website"
                className="w-full h-[40px] bg-[#D9D9D91A] outline-none pl-[10px] mt-[5px] rounded-[5px]"
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="w-full transition-transform duration-300 hover:scale-110 h-[40px] bg-white text-black rounded-[5px] mt-[40px]"
            >
              Send
            </button>
          </form>
        </div>
        <div
          data-aos="fade-down"
          className="flex relative right-[45px]n md:right-[75px] lg:right-0 "
        >
          <img src={Frame4} alt="" className="w-[757px] " />
        </div>
      </div>
    </div>
  );
};

export default Layout6;
