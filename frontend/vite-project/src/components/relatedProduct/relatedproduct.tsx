import React from "react";
import data_product from "../assets/data";
import Item from "../item/item";

const RelatedProduct = () => {
  return (
    <div className="flex items-center flex-col gap-10 h-screen">
      <h1 className="text-black text-4xl font-semibold">Related Products</h1>
      <hr className="w-40 h-6 border rounded-3xl bg-black" />
      <div className="mt-10 flex flex-wrap gap-10 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
        {data_product.map((item: any, i: any) => {
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

export default RelatedProduct;
