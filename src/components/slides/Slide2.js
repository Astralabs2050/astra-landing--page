import React from "react";
import Slide from "./Slide-design";
import { slide2 } from "../../asset/slidesImg";

const Slide2 = () => {
  return (
    <div>
      <Slide
        slideImage={slide2}
        text1={"Astra x Balenciaga"}
        text2={
          "Play to win competition featuring a virtual small hourglass tote bag from Balenciaga that players could play to win in real life."
        }
      />
    </div>
  );
};

export default Slide2;