import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import Answer1 from "./Answer1";
import Answer2 from "./Answer2";
import Answer3 from "./Answer3";
import { FaArrowDown } from "react-icons/fa";
const FAQs = () => {
  const [open, setOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);

  useEffect(() => {
    if (activeQuestion === null) {
      setOpen(false);
    }
  }, [activeQuestion]);

  const toggleQuestion = (questionNumber) => {
    const newActiveQuestion =
      activeQuestion === questionNumber ? null : questionNumber;
    setActiveQuestion(newActiveQuestion);
    // Automatically open the FAQ section if a question is selected
    if (newActiveQuestion !== null) {
      setOpen(true);
    }
  };

  const toggleOpen = () => {
    // Close all questions if the FAQ section is being closed
    if (open) {
      setActiveQuestion(null);
    }
    setOpen(!open);
  };
  return (
    <>
      <div
        onClick={toggleOpen}
        className="absolute flex flex-col items-center gap-[10px] top-[6750px] lg:top-[7600px] left-[300px] lg:left-[60px] border p-[10px]  text-white transition duration-700 ease-in-out"
      >
        <p
          onClick={toggleOpen}
          className=" border p-[10px] rounded-[100%] text-white transition duration-700 ease-in-out"
        >
          FAQs
        </p>
        <FaArrowDown />
      </div>

      <div
        className={`transition-max-height duration-700 ease-in-out overflow-hidden ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          transition: "max-height 0.7s ease-in-out, opacity 0.7s ease-in-out",
        }}
      >
        <div className="bg-black flex px-[40px] flex-col lg:flex-row text-[#A1A1A1] justify-center items-center gap-[100px] py-[100px]">
          <div className="flex flex-col items-center gap-[30px]">
            <button
              onClick={() => toggleQuestion(1)}
              className="w-[448px] h-[46px] border-[#A1A1A1] bg-[#D9D9D908] rounded-[5px] border flex justify-between items-center px-[30px]"
            >
              Who owns the design created?{" "}
              {activeQuestion === 1 ? <FaAngleDown /> : <FaAngleRight />}
            </button>
            <button
              onClick={() => toggleQuestion(2)}
              className="w-[448px] h-[46px] bg-[#D9D9D908] border-[#A1A1A1] rounded-[5px] border flex justify-between items-center px-[30px]"
            >
              Do you vet partners selected?{" "}
              {activeQuestion === 2 ? <FaAngleDown /> : <FaAngleRight />}
            </button>
            <button
              onClick={() => toggleQuestion(3)}
              className="w-[448px] h-[46px] bg-[#D9D9D908] border-[#A1A1A1] rounded-[5px] border flex justify-between items-center px-[30px]"
            >
              What blockchain is this built on?{" "}
              {activeQuestion === 3 ? <FaAngleDown /> : <FaAngleRight />}
            </button>
          </div>

          <div className="w-[608px] border-[#A1A1A1] h-[200px] p-[10px]  border rounded-[10px]">
            {activeQuestion === 1 && <Answer1 />}
            {activeQuestion === 2 && <Answer2 />}
            {activeQuestion === 3 && <Answer3 />}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
