import React from "react";

import Slide from "./Slide-design";
import { slide5 } from "../../assets/slidesImg";

const Slide5 = () => {
  return (
    <div>
      {" "}
      <Slide
        slideImage={slide5}
        text1={"Astra x NFT London"}
        text2={
          "Showcasing a “play to wear” experience at NFT london, enabling players compete to beat the high score and win an NFT london shirt"
        }
      />
    </div>
  );
};

export default Slide5;
