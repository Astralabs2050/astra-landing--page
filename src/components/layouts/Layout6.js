import React, { useEffect, useState } from "react";

import "aos/dist/aos.css";
import { Glitter, Frame4 } from "../../asset";
import { joinwaitlist, joinwaitlist2 } from "../../asset/textImg";
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

  const [formData, setFormData] = useState({
    StoreName: "",
    Email: "",
    Location: "",
    Website: "",
  });
  // Handles form data onChange event
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="lg:mt-[150px] mt-[100px]" id="joinwaitlist">
      <div className="flex lg:flex-row  flex-col gap-[30px] lg:gap-[150px]  lg:justify-center lg:items-center items-end">
        <div
          data-aos="fade-down"
          className="flex flex-col gap-[40px] px-[20px] w-[100%] lg:w-[461px]"
        >
          <img src={Glitter} alt="glitter" className="w-[50.61px] lg:m-0 flex m-auto" />
          <p className="lg:w-[297px] w-[180px] lg:flex hidden">
            <img src={joinwaitlist} alt="" />
          </p>
          <p className="lg:w-[297px] w-[337px] md:w-[550px] justify-center m-auto lg:hidden flex">
            <img src={joinwaitlist2} alt="" />
          </p>
          <form
            onSubmit={handleSubmit}
            className="border border-[#A1A1A1] md:w-[500px] px-[35px]  py-[50px] lg:w-[461px] w-full m-auto flex flex-col gap-[20px] text-[#A1A1A1] rounded-[10px] font-[200]"
          >
            <div className="">
              <label>Name of Store:</label>
              <br />
              <input
                required
                type="text"
                name="StoreName"
                onChange={handleOnChange}
                id="StoreName"
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
                onChange={handleOnChange}
                id="Email"
                className="w-full h-[40px] bg-[#D9D9D91A] outline-none pl-[10px] mt-[5px] rounded-[5px]"
              />
            </div>
            <div>
              <label>Store Location:</label>
              <br />
              <select
                required
                name="Location"
                id="Location"
                onChange={handleOnChange}
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
                onChange={handleOnChange}
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
        <div data-aos="fade-down" className="flex self-end">
          <img src={Frame4} alt="" className="w-[590.9px] px-[20px] " />
        </div>
      </div>
    </div>
  );
};

export default Layout6;
