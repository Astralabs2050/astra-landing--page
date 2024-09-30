import { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import Answer1 from "./Answer1";
import Answer2 from "./Answer2";
import Answer3 from "./Answer3";
import { faq, pitchdeck } from "../../../asset/textImg";
import { FiArrowRight } from "react-icons/fi";

const FAQs = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (questionNumber) => {
    const newActiveQuestion =
      activeQuestion === questionNumber ? null : questionNumber;
    setActiveQuestion(newActiveQuestion);
  };

  return (
    <>
      <div className="lg:bg-bg11 lg:bg-cover lg:z-20">
        <img src={faq} alt="" className="flex m-auto mt-[170px]" />
        <div className="flex px-[40px] flex-col lg:flex-row text-[#A1A1A1] justify-center items-center gap-[100px] py-[100px]">
          <div className="flex flex-col items-center gap-[30px]">
            {/* button 1 */}
            <button
              onClick={() => toggleQuestion(1)}
              className="w-[448px] h-[46px] border-[#D9D9D91A] bg-customGray overflow-y-hidden rounded-[5px] border flex justify-between items-center px-[30px]"
            >
              Who owns the design created?{" "}
              {activeQuestion === 1 ? <FaAngleDown /> : <FaAngleRight />}
            </button>
            {/* answer1 */}
            {activeQuestion === 1 && (
              <div className="w-[608px] border-[#D9D9D91A] bg-customGray h-[200px] p-[10px] border flex lg:hidden rounded-[10px]">
                {activeQuestion === 1 && <Answer1 />}
              </div>
            )}
            {/* button2 */}
            <button
              onClick={() => toggleQuestion(2)}
              className="w-[448px] h-[46px] bg-customGray border-[#D9D9D91A]  overflow-y-hidden rounded-[5px] border flex justify-between items-center px-[30px]"
            >
              Do you vet partners selected?{" "}
              {activeQuestion === 2 ? <FaAngleDown /> : <FaAngleRight />}
            </button>
            {/* answer2 */}
            {activeQuestion === 2 && (
              <div className="w-[608px] border-[#D9D9D91A] bg-customGray h-[200px] flex lg:hidden p-[10px] border rounded-[10px]">
                {activeQuestion === 2 && <Answer2 />}
              </div>
            )}
            {/* button3 */}
            <button
              onClick={() => toggleQuestion(3)}
              className="w-[448px] h-[46px] bg-customGray border-[#D9D9D91A]  overflow-y-hidden rounded-[5px] border flex justify-between items-center px-[30px]"
            >
              What blockchain is this built on?{" "}
              {activeQuestion === 3 ? <FaAngleDown /> : <FaAngleRight />}
            </button>
            {/* answer3 */}
            {activeQuestion === 3 && (
              <div className="w-[608px] border-[#D9D9D91A] bg-customGray h-[200px] flex lg:hidden p-[10px] border rounded-[10px]">
                {activeQuestion === 3 && <Answer3 />}
              </div>
            )}
          </div>

          <div className="w-[608px] border-[#D9D9D91A] bg-customGray h-[200px] hidden lg:flex p-[10px] border rounded-[10px]">
            {activeQuestion === 1 && <Answer1 />}
            {activeQuestion === 2 && <Answer2 />}
            {activeQuestion === 3 && <Answer3 />}
          </div>
        </div>
      </div>

      {/* mobile for pitch deck */}

      <div
        className={`pt-[100px] lg:pb-[150px] pb-[80px] lg:hidden  flex flex-col justify-center items-center text-white  z-[-1]`}
      >
        <div
          data-aos="fade-left"
          className="flex flex-col justify-center items-center px-[10px] overflow-hidden py-[10px]"
        >
          <p className="lg:w-[254px] w-[180px] mb-[20px]">
            <img src={pitchdeck} alt="pitch" />
          </p>
          <p className="lg:text-[20px] text-[15px] font-[100] lg:mb-[60px] mb-[30px] lg:w-[498px] w-[333px] text-center">
            Are you an investor interested in joining our seed round? Please see
            our pitch deck below.
          </p>

          <a
            href="https://docsend.com/view/ipegvbqtd5bdtepr"
            className="relative z-[9999] hover:bg-[#504f4f7b] hover:opacity-90 overflow-y-hidden"
          >
            <button className="w-[189.87px] transition-transform duration-300 hover:scale-110 h-[57.32px] border flex items-center justify-center gap-[10px]">
              See Deck <FiArrowRight />
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default FAQs;
