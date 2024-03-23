import React from "react";

import Slide from "./Slide-design";
import { slide1 } from "../../assets/slidesImg";

const Slide1 = () => {
  return (
    <div >
      <Slide
        slideImage={slide1}
        text1={"Astra x Aamil"}
        text2={
          " Shoppers use avatars to try on future collections and add to their wish list, get data on customer preferences on different designs"
        }
      />
    </div>
  );
};

export default Slide1;
