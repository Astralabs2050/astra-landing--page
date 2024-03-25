import React from "react";


import Slide from "./Slide-design";
import { slide4 } from "../../assets/slidesImg";

const Slide4 = () => {
  return (
    <div>
      {" "}
      <Slide
        slideImage={slide4}
        text1={"Astra x D la Repubblica"}
        text2={
          "Creating avatars, digital garments and virtual environments for one of the largest newspapers in Italy, D la Repubblica."
        }
      />
    </div>
  );
};

export default Slide4;
