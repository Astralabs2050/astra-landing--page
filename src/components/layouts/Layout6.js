import React, { useEffect, useState } from "react";
import { Glitter, Frame4 } from "../../asset";
import { joinwaitlist, joinwaitlist2 } from "../../asset/textImg";
import { useForm } from "@formspree/react";
import { location } from "./countries";

const Layout6 = () => {
  const [state, handleSubmit] = useForm("xvoewekj");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowMessage(true);
      const timerId = setTimeout(() => {
        setShowMessage(false);
        window.location.reload();
      }, 5000);
      return () => clearTimeout(timerId);
    }
  }, [state.succeeded]);

  const [formData, setFormData] = useState({
    Full_Name: "",
    Email: "",
    What_Do_You_Make: "",
    Location: "",
    Website: "",
  });

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="lg:mt-[150px] mt-[100px]" id="joinwaitlist">
      <div className="flex lg:flex-row flex-col gap-[30px] lg:gap-[150px] lg:justify-center lg:items-center items-end">
        <div className="flex flex-col gap-[40px] px-[20px] w-[100%] lg:w-[461px]">
          <img
            src={Glitter}
            alt="glitter"
            className="w-[50.61px] lg:m-0 flex m-auto"
          />
          <p className="lg:w-[297px] w-[180px] lg:flex hidden">
            <img src={joinwaitlist} alt="" />
          </p>
          <p className="lg:w-[297px] w-[188px] md:w-[550px] justify-center m-auto lg:hidden flex">
            <img src={joinwaitlist} alt="" />
          </p>
          <form
            onSubmit={handleSubmit}
            className="border bg-black border-[#A1A1A1] md:w-[500px] px-[35px] py-[50px] lg:w-[461px] w-full m-auto flex flex-col gap-[20px] text-[#A1A1A1] rounded-[10px] font-[200]"
          >
            <div className="">
              <input
                required
                type="text"
                name="Full_Name"
                placeholder="Enter your full name"
                onChange={handleOnChange}
                id="Full_Name"
                className="w-full h-[54px] bg-transparent border border-[#A1A1A1] text-[#A1A1A1] outline-none pl-[10px] mt-[5px] rounded-[5px]"
              />
            </div>
            <div>
              <input
                required
                type="email"
                name="Email"
                placeholder="Email"
                onChange={handleOnChange}
                id="Email"
                className="w-full h-[54px] bg-transparent border border-[#A1A1A1] outline-none pl-[10px] mt-[5px] rounded-[5px]"
              />
            </div>
            <div>
              <input
                required
                type="text"
                name="What_Do_You_Make"
                placeholder="What do you make?"
                onChange={handleOnChange}
                id="What_Do_You_Make"
                className="w-full h-[54px] bg-transparent border border-[#A1A1A1] outline-none pl-[10px] mt-[5px] rounded-[5px]"
              />
            </div>
            <div>
              <input
                required
                type="url"
                name="Website"
                placeholder="Website/social media link"
                onChange={handleOnChange}
                id="Website"
                className="w-full h-[54px] bg-transparent border border-[#A1A1A1] outline-none pl-[10px] mt-[5px] rounded-[5px]"
              />
            </div>
            <div>
              <select
                required
                name="Location"
                id="Location"
                onChange={handleOnChange}
                className="w-full h-[54px] bg-transparent border border-[#A1A1A1] outline-none pl-[10px] mt-[5px] rounded-[5px]"
              >
                <option value="">Select Location</option>
                {location.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full text-[16px] border-[#A1A1A1] border transition-transform duration-300 hover:scale-110 h-[52px] bg-[#3E3E3E] text-white rounded-[32px] mt-[40px]"
            >
              Join the Waitlist
            </button>
          </form>
          {showMessage && (
            <p className="text-[white] text-[30px]">
              Thanks for getting in touch!
            </p>
          )}
        </div>
        <div className="flex self-end">
          <img src={Frame4} alt="" className="lg:w-[590.9px] px-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default Layout6;
