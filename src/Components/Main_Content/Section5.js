import React from "react";
import img1 from "../Images/line-download-lines-png-photos-transparent-png-33.png";
import img2 from "../Images/kisspng-purple-angle-font-floating-lines-5aa95f8dcacab8.0201418015210494858306.jpg";
import img3 from "../Images/profile1.png";

function Section5() {
  const featuredImages = [{ img1 }, { img2 }, { img3 }];
  return (
    <div className="">
      <div className="max-w-screen-xl m-auto">
        <div className="w-full relative select-none">
          <img src={featuredImages[0]} alt="" />

          <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
