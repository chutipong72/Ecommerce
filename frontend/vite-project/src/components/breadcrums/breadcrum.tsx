import React from "react";
import arrow_icon from "../assets/breadcrum_arrow.png";
import { Link } from "react-router-dom";

const breadcrum = (props) => {
  const { product } = props;
  let link = "";
  if (product.category === "men") {
    link = "/men";
  } else if (product.category === "women") {
    link = "/women";
  } else if (product.category === "kid") {
    link = "/kid";
  }
  return (
    <div className="flex items-center gap-[8px] text-gray-500 text-[16px] font-semibold my-[60px] mx-[170px] capitalize sm:mx-[20px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
      <Link to="/">HOME</Link>
      <img src={arrow_icon} alt="" /> <Link to="/">SHOP</Link>
      <img src={arrow_icon} alt="" />
      <Link to={link}>{product.category}</Link>
      <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default breadcrum;
