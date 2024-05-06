import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import kids from "../../assets/kid.jpg";

const SingleProduct = () => {
  return (
    <div>
      <div className="cursor-pointer border">
        <img
          src={kids}
          alt="product_picture"
          className="w-[380px] h-[477px] lg:h-[425px]"
        />
        <div className="my-2 mx-2 flex flex-row justify-between items-center">
          <div>
            <h1 className="font-bold">Product Name</h1>
            <p>৳ 500</p>
          </div>
          <MdOutlineShoppingBag className="text-3xl hover:text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
