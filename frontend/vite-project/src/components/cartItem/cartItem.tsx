import React, { useContext } from "react";
import { ShopContext } from "../contexts/shopContext";
import remove_icon from "../assets/cart_cross_icon.png";

const cartItem = () => {
  const { getTotalCartAmount, all_products, cartItem, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="my-[100px] mx-[170px]">
      <div
        className="grid grid-cols-1 md:grid-cols-6"
        style={{
          alignItems: "center",
          gap: "75px",
          padding: "20px 0px",
          color: "#454545",
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        <p className="">Products</p>
        <p className="">Title</p>
        <p className="">Price</p>
        <p className="">Quantity</p>
        <p className="">Total</p>
        <p className="">Remove</p>
      </div>
      <hr className="h-[3px] bg-white border-0" />
      {all_products.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div>
              <div
                className="grid grid-cols-1 md:grid-cols-6"
                style={{
                  alignItems: "center",
                  gap: "75px",
                  padding: "20px 0px",
                  color: "#454545",
                  fontSize: "17px",
                  fontWeight: "500",
                }}
              >
                <img src={e.image} alt="" className="h-[62px]" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="w-[64px] h-[50px] border-2 border-gray-200 bg-white">
                  {cartItem[e.id]}
                </button>
                <p>${e.new_price * cartItem[e.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt="remove-icon"
                  className="w-[15px] cursor-pointer my-0 mx-[40px]"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="flex my-[100px] mx-0">
        <div className="flex-1 flex flex-col mr-[200px] gap-[40px]">
          <h1>Cart Totals</h1>
          <div>
            <div className="flex justify-between py-[15px] px-0">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between py-[15px] px-0">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between py-[15px] px-0">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="w-[262px] h-[58px] outline-none border-none bg-red-500 text-white text-[16px] font-semibold cursor-pointer">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="flex-1 text-[16px] font-medium">
          <p className="text-gray-500">
            If you have a promo code, Enter it here
          </p>
          <div className="w-[504px] mt-[15px] pl-[20px] h-[58px] bg-gray-100">
            <input
              className="border-none outline-none bg-transparent text-[16px] w-[312px] h-[50px]"
              type="text"
              placeholder="promo code"
            />
            <button className="w-[170px] h-[58px] text-[16px] bg-black text-white cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cartItem;
