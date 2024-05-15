import React from "react";
import { Link } from "react-router-dom";

const item = (props: any) => {
  return (
    <div className="w-[350px] hover:scale-105 transition-transform">
      <Link to={`/product/${props.id}`}>
        <img
          onClick={window.scrollTo(0, 0)}
          src={props.image}
          alt=""
          className="w-[280px]"
        />
      </Link>
      <p className="my-1.5 mx-0">{props.name}</p>
      <div className="flex gap-5">
        <div className="text-gray-600 text-[18px] font-semibold">
          ${props.new_price}
        </div>
        <div className="text-gray-400 text-[18px] font-medium line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default item;
