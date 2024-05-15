import React, { useEffect, useState } from "react";
import Item from "../item/item";

interface CollectionItem {
  id: number;
  name: string;
  image: string;
  new_price: number;
  old_price: number;
}

const newCollection = () => {
  const [new_collections, setNew_Collections] = useState<CollectionItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/newcollections")
      .then((response) => response.json())
      .then((data) => setNew_Collections(data));
  }, []);

  return (
    <div className="flex flex-col items-center gap-[20px] mb-[100px]">
      <h1 className="text-black text-[50px] font-semibold">NEW COLLECTIONS</h1>
      <hr className="w-[200px] h-[6px] border rounded-[10px] bg-black" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[50px] gap-[25px]">
        {new_collections.map((item, i) => {
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

export default newCollection;
