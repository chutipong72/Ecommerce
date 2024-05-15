import React from "react";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_img from "../assets/hero_image.png";

const hero = () => {
  return (
    <div className="h-screen pt-[20px] bg-gradient-to-b from-purple-200 to-green-50 bg-opacity-60 flex flex-col md:flex-row">
      <div className="flex-1 flex flex-col justify-center gap-4 md:pl-20 leading-tight pt-[50px]">
        <h2 className="text-black text-2xl md:text-4xl font-bold">
          NEW ARRIVALS ONLY
        </h2>
        <div>
          <div className="flex items-center gap-2 md:gap-4">
            <p className="text-black text-2xl md:text-4xl font-bold">New</p>
            <p className="text-black text-2xl md:text-4xl font-bold">
              Collection
            </p>
            <img className="w-12 md:w-[120px]" src={hand_icon} alt="" />
          </div>
          <p className="text-black text-2xl md:text-4xl font-bold">
            For Everyone
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 md:gap-4 w-64 md:w-80 h-16 md:h-20 border rounded-full mt-8 bg-red-500 text-white text-lg md:text-xl font-medium">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img src={hero_img} alt="" className="md:w-9/12 w-5/12" />
      </div>
    </div>
  );
};

export default hero;
