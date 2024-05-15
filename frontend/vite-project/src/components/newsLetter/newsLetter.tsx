import React from "react";

const newsLetter = () => {
  return (
    <div className="w-[80%] h-[40vh] flex flex-col items-center m-auto py-0 px-[140px] mb-[150px] bg-gradient-to-b from-purple-200 to-green-50 bg-opacity-60 gap-[30px]">
      <h1 className="text-gray-700 text-[55px] font-semibold mt-[50px]">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-gray-600 text-[20px]">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex flex-col items-center justify-between sm:flex-row bg-white w-[90%] sm:w-[730px] h-[70px] border-solid border-white rounded-[80px]">
        <input
          className="w-full sm:w-[500px] border-none ml-0 sm:ml-[30px] outline-none text-gray-500 text-[16px] mb-2 sm:mb-0"
          type="email"
          placeholder="Your Email"
        />
        <button className="w-full sm:w-[210px] h-[70px] border rounded-[80px] bg-black text-white text-[16px] cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default newsLetter;
