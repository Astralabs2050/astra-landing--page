import React, { useEffect, useState } from "react";

import "aos/dist/aos.css";
import { Glitter, Frame4 } from "../../asset";
import { joinwaitlist } from "../../asset/textImg";
import { useForm } from "@formspree/react";

const Layout6 = () => {
  const [state, handleSubmit] = useForm("xvoewekj");
  if (state.succeeded) {
    setTimeout(() => {
      return <p>Thanks for getting in touch!</p>;
    }, 5000);
  }
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      // Show the success message
      setShowMessage(true);

      // Set a timer to hide the message or refresh the page after 5 seconds
      const timerId = setTimeout(() => {
        // Hide the message (if you want to stay on the page and just hide the message)
        setShowMessage(false);

        // Or refresh the page
        window.location.reload();

        // Or if using React Router for navigation in a SPA, you might navigate to a different route
        // navigate('/thank-you'); // Uncomment and use this line if using React Router and you want to navigate
      }, 5000);

      // Cleanup function to clear the timer if the component unmounts
      return () => clearTimeout(timerId);
    }
  }, [state.succeeded]);

  return (
    <div className="lg:mt-[150px] mt-[100px]" id="joinwaitlist">
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
              <label>Name:</label>
              <br />
              <input
                required
                type="text"
                name="Name"
                id="Name"
                className="w-full h-[40px] bg-[#D9D9D91A] outline-none pl-[10px] mt-[5px] rounded-[5px]"
              />
            </div>
            <div>
              <label>Email:</label>
              <br />
              <input
                required
                type="email"
                name="Email"
                id="Email"
                className="w-full h-[40px] bg-[#D9D9D91A] outline-none pl-[10px] mt-[5px] rounded-[5px]"
              />
            </div>
            <div>
              <label>Are You a:</label>
              <br />
              <select
                required
                name="Profession"
                id="Profession"
                className="h-[40px] bg-[#D9D9D91A] text-[white] w-full outline-none px-[10px] mt-[5px] rounded-[5px] font-[200]"
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
                required
                type="text"
                name="Website"
                id="Website"
                className="w-full h-[40px] bg-[#D9D9D91A] outline-none pl-[10px] mt-[5px] rounded-[5px]"
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full transition-transform duration-300 hover:scale-110 h-[40px] bg-white text-black rounded-[5px] mt-[40px]"
            >
              Send
            </button>
          </form>
          {showMessage && (
            <p className="text-[white] text-[30px]">
              Thanks for getting in touch!
            </p>
          )}
        </div>
        <div
          data-aos="fade-down"
          className="flex relative right-[45px] md:right-[75px] lg:right-0 "
        >
          <img src={Frame4} alt="" className="w-[757px]" />
        </div>
      </div>
    </div>
  );
};

export default Layout6;
