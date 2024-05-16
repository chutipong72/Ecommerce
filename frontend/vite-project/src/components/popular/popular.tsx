import React, { useEffect, useState } from "react";
import Item from "../item/item";

const popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/popularinwomen")
      .then((response) => response.json())
      .then((data) => setPopularProducts(data));
  }, []);

  return (
    <div className="flex flex-col items-center gap-[10px] h-[90vh] pt-7">
      <h1 className="text-black text-[50px] font-semibold">POPULAR IN WOMEN</h1>
      <hr className="w-[200px] h-[6px] border rounded-[10px] bg-black" />
      <div className="mt-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] justify-center">
        {popularProducts.map((item: any, i: any) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default popular;
