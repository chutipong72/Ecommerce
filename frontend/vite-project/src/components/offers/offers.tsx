import React from "react";
import exclusive_image from "../assets/exclusive_image.png";

const offers = () => {
  return (
    <div className="w-[80%] h-[60vh] flex m-auto py-0 px-[140px] mb-[150px] bg-gradient-to-b from-purple-200 to-green-50 bg-opacity-60">
      <div className="flex-1 flex flex-col justify-center sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
        <h1 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold">
          Exclusive
        </h1>
        <h1 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold">
          Offers For You
        </h1>
        <p className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w-96 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-28 border-none rounded-full bg-red-500 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-16 cursor-pointer">
          Check Now
        </button>
      </div>
      <div className="flex-1 flex items-center justify-end pt-8 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-16">
        <img src={exclusive_image} alt="" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default offers;
