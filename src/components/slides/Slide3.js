
import React from "react";

import Slide from "./Slide-design";
import { slide3 } from "../../asset/slidesImg";

const Slide3 = () => {
  return (
    <div>
      <Slide
        slideImage={slide3}
        text1={"Astra x Lone Design Club"}
        text2={
          "Partnering with Lone Design Club, a leading online and offline retail destination to create a virtual store featuring brands in the store"
        }
      />
    </div>
  );
};

export default Slide3;