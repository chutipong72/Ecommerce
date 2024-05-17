import React, { useContext, useState } from "react";
import { ShopContext } from "../contexts/shopContext";

const cartContext = () => {
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

  const placeOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let orderItems: any = [];
    for (let i in cartItem) {
      if (cartItem[i] > 0) {
        orderItems.push({ product: i, quantity: cartItem[i] });
      }
    }
    const orderData = {
      orderItems: orderItems,
      shippingAddress: data,
      paymentMethod: "PayPal",
      itemsPrice: getTotalCartAmount(),
    };
    console.log(orderData);
    try {
      const response = await fetch("http://localhost:4000/placeorder", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="">
      <div></div>
    </form>
  );
};

export default cartContext;
