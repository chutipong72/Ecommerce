import React from "react";
import arrow_icon from "../assets/breadcrum_arrow.png";

const breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="flex items-center gap-[8px] text-gray-500 text-[16px] font-semibold my-[60px] mx-[170px] capitalize sm:mx-[20px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{" "}
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default breadcrum;
