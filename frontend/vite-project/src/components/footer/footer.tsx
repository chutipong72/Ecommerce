import React from "react";
import footer_logo from "../assets/logo_big.png";
import instagram from "../assets/instagram_icon.png";
import pintester from "../assets/pintester_icon.png";
import twitter from "../assets/twitter_icon.png";
import facebook from "../assets/facebook_icon.png";
import linkedin from "../assets/linkedin_icon.png";
import youtube from "../assets/youtube_icon.png";
import whatsapp from "../assets/whatsapp_icon.png";

const footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 md:gap-16 lg:gap-20">
      <div className="flex items-center gap-4 md:gap-8">
        <img src={footer_logo} alt="" className="w-12 h-12 md:w-16 md:h-16" />
        <p className="text-gray-700 text-2xl md:text-3xl font-bold">SHOPPER</p>
      </div>
      <ul className="flex list-none gap-8 md:gap-16 text-black text-lg md:text-xl font-extralight">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contract</li>
      </ul>
      <div className="flex gap-4 md:gap-8">
        <div className="p-2 md:p-4 pb-1 bg-white border-solid border-white">
          <img src={instagram} alt="" className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <div className="p-2 md:p-4 pb-1 bg-white border-solid border-white">
          <img src={pintester} alt="" className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <div className="p-2 md:p-4 pb-1 bg-white border-solid border-white">
          <img src={whatsapp} alt="" className="w-6 h-6 md:w-8 md:h-8" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 w-full mb-6 text-black text-lg md:text-xl font-light">
        <hr className="w-4/5 md:w-3/4 border-none rounded-2 h-1 bg-gray-400" />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default footer;
