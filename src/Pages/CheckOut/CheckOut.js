import React from "react";
import ShoppingDetail from "../../Components/CheckOut/ShoppingDetail";
import OrderReview from "../../Components/CheckOut/OrderReview";

const CheckOut = () => {
  return (
    <div className=" min-h-screen">
      <div className="py-4 text-xl lg:text-5xl flex flex-row justify-center items-center text-red-700 font-bold bg-[#D8DBDF]">
        <h1 className="uppercase">checkout</h1>
      </div>
      <div className="flex flex-col lg:flex lg:flex-row lg:justify-evenly my-5 mx-2 lg:mx-0 ">
        <div className="w-full lg:w-[560px]">
          <div className="h-14 w-full bg-[#6E6E77] flex justify-center items-center text-white text-2xl">
            SHIPPING DETAIL
          </div>
          <ShoppingDetail></ShoppingDetail>
        </div>
        <div className=" w-full lg:w-[560px]">
          <div className="h-14 w-full bg-[#6E6E77] flex justify-center items-center text-white text-2xl">
            ORDER OVERVIEW
          </div>
          <OrderReview></OrderReview>
        </div>
      </div>
      <div className=" mx-2 lg:mx-20 my-5 lg:my-20">
        <button className="btn btn-block uppercase bg-red-700 hover:bg-red-800 text-white border-none">Place order</button>
      </div>
    </div>
  );
};

export default CheckOut;
