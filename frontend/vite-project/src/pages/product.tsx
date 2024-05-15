import React, { useContext } from "react";
import { ShopContext } from "../components/contexts/shopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/breadcrums/breadcrum";
import ProductDisplay from "../components/productDisplay/productDisplay";
import DescriptionBox from "../components/descriptionBox/descriptionBox";
import RelatedProduct from "../components/relatedProduct/relatedproduct";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find(
    (product: any) => product.id === Number(productId)
  );

  return (
    <div className="">
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
};

export default Product;
