import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductDetails = () => {
  const [count, setcount] = useState(1);
  return (
    <div className="mx-0 lg:mx-10 my-3 lg:my-4">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-[370px] h-[470px] lg:h-[700px] lg:w-[600px] object-cover cursor-pointer"
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">New Sharee</h2>
          <div className="text-lg font-bold text-red-700 flex flex-row">
            <span className="me-2">৳ 5000</span>
            <span className="text-sm">***7.5% vat inclusive</span>
          </div>
          <div className="flex flex-row items-center hover:text-red-700">
            <span className="text-xl me-2">SKU: 110955</span>
            <FaRegCopy className="text-xl cursor-pointer" />
          </div>
          <span className="text-xl mb-0 lg:mb-4">Color: Light Grey</span>
          <div className="flex flex-col lg:flex lg:flex-row lg:justify-between">
            <div className="flex flex-row ">
              <button
                onClick={() => setcount(count > 1 ? count - 1 : 1)}
                className="btn btn-active"
              >
                <FaMinus />
              </button>
              <div className="px-5 h-[46px] w-[80px] border rounded-lg mx-1 flex items-center justify-center">
                {count}
              </div>
              <button
                onClick={() => setcount(count + 1)}
                className="btn btn-active"
              >
                <FaPlus />
              </button>
            </div>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-wide mx-0 lg:mx-2 my-2 lg:my-0">Wide</button>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-wide">Wide</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
