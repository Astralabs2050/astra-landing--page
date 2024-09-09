import { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import Answer1 from "./Answer1";
import Answer2 from "./Answer2";
import Answer3 from "./Answer3";
import { faq } from "../../../asset/textImg";

const FAQs = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (questionNumber) => {
    const newActiveQuestion =
      activeQuestion === questionNumber ? null : questionNumber;
    setActiveQuestion(newActiveQuestion);
  };

  return (
    <>
      <div>
        <img src={faq} alt="" className="flex m-auto mt-[170px]" />
        <div className="flex px-[40px] flex-col lg:flex-row text-[#A1A1A1] justify-center items-center gap-[100px] py-[100px]">
          <div className="flex flex-col items-center gap-[30px]">
            <button
              onClick={() => toggleQuestion(1)}
              className="w-[448px] h-[46px] border-[#D9D9D91A] bg-customGray rounded-[5px] border flex justify-between items-center px-[30px]"
            >
              Who owns the design created?{" "}
              {activeQuestion === 1 ? <FaAngleDown /> : <FaAngleRight />}
            </button>
            <button
              onClick={() => toggleQuestion(2)}
              className="w-[448px] h-[46px] bg-customGray border-[#D9D9D91A] rounded-[5px] border flex justify-between items-center px-[30px]"
            >
              Do you vet partners selected?{" "}
              {activeQuestion === 2 ? <FaAngleDown /> : <FaAngleRight />}
            </button>
            <button
              onClick={() => toggleQuestion(3)}
              className="w-[448px] h-[46px] bg-customGray border-[#D9D9D91A] rounded-[5px] border flex justify-between items-center px-[30px]"
            >
              What blockchain is this built on?{" "}
              {activeQuestion === 3 ? <FaAngleDown /> : <FaAngleRight />}
            </button>
          </div>

          <div className="w-[608px] border-[#D9D9D91A] bg-customGray h-[200px] p-[10px] border rounded-[10px]">
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
