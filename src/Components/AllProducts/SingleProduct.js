import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";

const SingleProduct = ({item}) => {
  return (
    <div>
      <div className="cursor-pointer border">
        <img
          src={item.img}
          alt="product_picture"
          className="w-[370px] h-[477px] lg:h-[425px]"
        />
        <div className="my-2 mx-2 flex flex-row justify-between items-center">
          <div>
            <h1 className="font-bold">{item.title}</h1>
            <p>৳ {item.price}</p>
          </div>
          <MdOutlineShoppingBag className="text-3xl hover:text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
