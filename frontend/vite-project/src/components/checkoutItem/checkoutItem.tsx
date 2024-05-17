import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/shopContext";
import { Link } from "react-router-dom";

const CheckOutItem = () => {
  const { getTotalCartAmount, all_products, cartItem } =
    useContext(ShopContext);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
  });

  const changeHandler = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form className="flex flex-col md:flex-row my-10 pl-[40px]">
      <div className="w-full md:w-1/2 mb-5">
        <div className="flex font-semibold text-2xl ml-5 pt-6">
          BILLING ADDRESS
        </div>
        <input
          required
          name="firstname"
          value={data.firstname}
          onChange={changeHandler}
          type="text"
          placeholder="First Name"
          className="mb-3 md:mb-5 p-3 border border-[#ccc] rounded-[3px] w-full md:w-2/5 mr-5 mt-5 ml-5"
        />
        <input
          required
          name="lastname"
          value={data.lastname}
          onChange={changeHandler}
          type="text"
          placeholder="Last Name"
          className="mb-3 md:mb-5 p-3 border border-[#ccc] rounded-[3px] w-full md:w-2/5 mr-5 mt-5 ml-5"
        />
        <input
          required
          name="phone"
          value={data.phone}
          onChange={changeHandler}
          type="text"
          placeholder="Phone"
          className="mb-3 md:mb-5 p-3 border border-[#ccc] rounded-[3px] w-full md:w-2/5 mr-5 mt-5 ml-5"
        />
        <input
          required
          name="country"
          value={data.country}
          onChange={changeHandler}
          type="text"
          placeholder="Country"
          className="mb-3 md:mb-5 p-3 border border-[#ccc] rounded-[3px] w-full md:w-2/5 mr-5 mt-5 ml-5"
        />
        <input
          required
          name="address"
          value={data.address}
          onChange={changeHandler}
          type="text"
          placeholder="Address"
          className="mb-3 md:mb-5 p-3 border border-[#ccc] rounded-[3px] w-full md:w-[85%] mr-5 mt-5 ml-5"
        />
        <input
          required
          name="city"
          value={data.city}
          onChange={changeHandler}
          type="text"
          placeholder="City"
          className="mb-3 md:mb-5 p-3 border border-[#ccc] rounded-[3px] w-full md:w-2/5 mr-5 mt-5 ml-5"
        />
        <input
          required
          name="state"
          value={data.state}
          onChange={changeHandler}
          type="text"
          placeholder="State"
          className="mb-3 md:mb-5 p-3 border border-[#ccc] rounded-[3px] w-full md:w-2/5 mr-5 mt-5 ml-5"
        />
        <input
          required
          name="zipcode"
          value={data.zipcode}
          onChange={changeHandler}
          type="text"
          placeholder="ZIP CODE"
          className="mb-3 md:mb-5 p-3 border border-[#ccc] rounded-[3px] w-full md:w-2/5 mr-5 mt-5 ml-5"
        />
        <div className="flex font-semibold text-2xl ml-5 mt-10 pt-5 pb-5 border rounded-[3px] w-[60%] md:w-[85%]">
          <h1 className="pl-5">Delivery details</h1>
          <form className="flex justify-between gap-[20px] pl-[30px] text-black text-[20px] font-medium">
            <input required type="checkbox" name="" id="" checked />
            <p>Standard Shipping</p>
            <p className="pl-0 md:pl-[100px] items-end text-red-600">Free</p>
          </form>
        </div>
      </div>
      <div className="w-full md:w-1/2 mb-5 md:pl-10">
        <div className="py-5">
          <h1 className="py-2 text-xl md:text-2xl font-medium">
            Order Summary
          </h1>
          <hr />
        </div>
        <div className="pt-2 pb-5 pr-5">
          {all_products.map((e: any) => {
            if (cartItem[e.id] > 0) {
              return (
                <div className="flex justify-between">
                  <img
                    src={e.image}
                    alt=""
                    className="h-16 md:h-24 pr-2 md:pr-4 pb-2 md:pb-5"
                  />
                  <p className="text-sm  md:text-base pr-10 whitespace-nowrap">
                    {e.name}
                  </p>
                  <p className="pr-2 md:pr-7 ">{cartItem[e.id]}x</p>
                  <p className="pr-2 md:pr-7 ">
                    ${e.new_price * cartItem[e.id]}
                  </p>
                </div>
              );
            }
            return null;
          })}
        </div>
        <hr />
        <div className="flex justify-between py-3 px-2 md:px-10">
          <h3 className="font-medium text-[24px]">Total</h3>
          <h3 className="font-medium pt-[10px]">${getTotalCartAmount()}</h3>
          <button
            className="w-[162px] h-[48px] outline-none border-none bg-red-500 text-white text-[16px] font-semibold cursor-pointer"
            type="submit"
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </form>
  );
};

export default CheckOutItem;
