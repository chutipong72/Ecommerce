import React, { useContext } from "react";
import star_icon from "../assets/star_icon.png";
import star_icon_dull from "../assets/star_dull_icon.png";
import { ShopContext } from "../contexts/shopContext";

const productDisplay = (props) => {
  const { product } = props;

  const { addToCart } = useContext(ShopContext);
  return (
    <div className="flex flex-col md:flex-row my-0 mx-[170px]">
      <div className="flex flex-col md:flex-row gap-[17px]">
        <div className="flex flex-col gap-[16px]">
          <img
            className="h-[163px] w-[300px] md:w-[200px] md:h-[120px]"
            src={product.image}
            alt=""
          />
          <img
            className="h-[163px] w-[300px] md:w-[200px] md:h-[120px]"
            src={product.image}
            alt=""
          />
          <img
            className="h-[163px] w-[300px] md:w-[200px] md:h-[120px]"
            src={product.image}
            alt=""
          />
          <img
            className="h-[163px] w-[300px] md:w-[200px] md:h-[120px]"
            src={product.image}
            alt=""
          />
        </div>
        <div className="product-img">
          <img
            className="w-[1086px] h-[700px] md:w-[600px] md:h-[400px]"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="my-0 mx-[70px] flex flex-col">
        <h1 className="text-gray-600 text-[40px] font-bold">{product.name}</h1>
        <div className="flex items-center mt-[13px] gap-[5px] text-gray-700 text-[16px]">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon_dull} alt="" />
          <p>(122)</p>
        </div>
        <div className="flex my-[40px] mx-0 gap-[30px] text-[24px] font-bold">
          <div className="text-gray-400 line-through">${product.old_price}</div>
          <div className="text-red-500">${product.new_price}</div>
        </div>
        <div className="product-right-description">
          A lightweight, cropped tee with a relaxed fit and a crew neckline.
          Made of 100% cotton, this tee is soft and breathable. The cropped
          length makes it perfect for pairing with high-waisted bottoms.
        </div>
        <div className="product-right-size">
          <h1 className="mt-[55px] text-gray-500 text-[20px] font-semibold">
            Select Size
          </h1>
          <div className="flex my-[30px] mx-0 gap-[20px]">
            <div className="py-[18px] px-[24px] bg-gray-50 border border-white rounded-[3px] cursor-pointer">
              S
            </div>
            <div className="py-[18px] px-[24px] bg-gray-50 border border-white rounded-[3px] cursor-pointer">
              M
            </div>
            <div className="py-[18px] px-[24px] bg-gray-50 border border-white rounded-[3px] cursor-pointer">
              L
            </div>
            <div className="py-[18px] px-[24px] bg-gray-50 border border-white rounded-[3px] cursor-pointer">
              XL
            </div>
            <div className="py-[18px] px-[24px] bg-gray-50 border border-white rounded-[3px] cursor-pointer">
              XXL
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
          className="py-[20px] px-[40px] w-[200px] text-[16px] font-semibold text-white bg-red-500 mb-[40px] border-none outline-none cursor-pointer"
        >
          ADD TO CART
        </button>
        <p className="mt-[10px]">
          <span className="font-semibold">Category :</span>Women, T-Shirt, Crop
          Top
        </p>
        <p className="mt-[10px]">
          <span className="font-semibold">Tags :</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default productDisplay;
