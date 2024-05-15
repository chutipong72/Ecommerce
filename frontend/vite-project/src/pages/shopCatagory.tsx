import React, { useContext } from "react";
import { ShopContext } from "../components/contexts/shopContext";
import dropdown_icon from "../components/assets/dropdown_icon.png";
import Item from "../components/item/item";

const ShopCategory = (props: { banner: any; category: any }) => {
  const all_products: any[] = useContext(ShopContext).all_products;

  return (
    <div className="shop-category">
      <img
        className="block my-10 mx-auto w-auto sm:mx-[160px] sm:w-[auto]"
        src={props.banner}
        alt="banner"
      />
      <div className="flex flex-col sm:flex-row my-0 mx-auto sm:mx-[160px] justify-between items-center">
        <p className="font-semibold">
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <div className="py-2 px-4 border rounded-full border-gray-600 mt-4 sm:mt-0">
          Sort by <img src={dropdown_icon} alt="dropdown" />
        </div>
      </div>
      <div className="my-10 px-7 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-20">
        {all_products.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="flex justify-center items-center my-10 mx-auto w-[233px] h-[69px] border rounded-[75px] bg-gray-100 text-gray-500 text-[18px] font-medium">
        Load More
      </div>
    </div>
  );
};

export default ShopCategory;
