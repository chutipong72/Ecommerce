import React from "react";

const descriptionBox = () => {
  return (
    <div className="my-[120px] mx-[170px]">
      <div className="flex flex-col md:flex-row">
        <div className="flex items-center justify-center text-[16px] font-semibold h-[70px] w-[171px] border border-gray-200">
          Description
        </div>
        <div className="flex items-center justify-center text-[16px] font-semibold h-[70px] w-[171px] border border-gray-200 bg-gray-100 text-gray-500">
          Reviews (122)
        </div>
      </div>
      <div className="flex flex-col gap-[25px] border border-gray-200 p-[48px] pb-[70px]">
        <p>
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual marketplace where businesses and individuals can
          showcase their products, interact with customers, and conduct
          transaction without the need for a physical pressence. E-commerce
          website have gained immense popularity due to their convenience,
          accessibility, and the global reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices and any available variations
          (e.g. sizes, colors). Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
};

export default descriptionBox;
