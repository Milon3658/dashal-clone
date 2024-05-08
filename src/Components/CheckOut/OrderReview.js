import React from "react";

const OrderReview = () => {
    const thumb =
  "https://app.deshal.net/storage/9209/conversions/Padmaboti-1-110955-(2)_660bc2ff920f7-thumb.jpg";
  return (
    <div>
      <p className="flex flex-row justify-between mt-5 mb-2">
        <span className="text-xl font-bold ">product</span>
        <span className="text-xl font-bold ">sub total</span>
      </p>
      <hr className=" bg-slate-300 h-[2px] my-2 " />
      {/* Product Card */}
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <img src={thumb} alt="thumbnail" className="w-[80px] h-[100px]" />
          <span className=" text-[16px] ms-2">
            <p className=" mb-1">110955</p>
            <p className=" mb-1 cursor-pointer hover:text-red-700">Sharee</p>
            <p className=" mb-1">SIZE : N/A</p>
            <p className=" mb-1">৳ 1674 X 1</p>
          </span>
        </div>
        <p>Tk: 2000</p>
      </div>
      {/* Product Card */}
      <hr className=" bg-slate-300 h-[2px] my-2 " />
      <p className="uppercase flex flex-row justify-between font-bold text-md mb-2">
        <span>Sub Total</span>
        <span>2000</span>
      </p>
      <p className="uppercase flex flex-row justify-between font-bold text-md mb-2">
        <span>Total vat</span>
        <span>50</span>
      </p>
      <p className="uppercase flex flex-row justify-between font-bold text-md mb-2">
        <span>shipping charge</span>
        <span>100</span>
      </p>
      <hr className=" bg-slate-300 h-[2px] my-4 " />
      <p className="uppercase flex flex-row justify-between font-bold text-xl my-3">
        <span>Totoal</span>
        <span>2150</span>
      </p>
      <hr className=" bg-black h-[3px] my-2 " />
      {/* Select Payment */}
      <p className="font-bold text-lg my-2 lg:my-5">Select your payment</p>
      <div>
        <div className="form-control">
          <label className="label cursor-pointer flex flex-row justify-start">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-red-500 me-2"
              checked
            />
            <span className="label-text text-xl font-bold">SSL COMMERZ</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer flex flex-row justify-start">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-blue-500 me-2"
              checked
            />
            <span className="label-text text-xl font-bold">
              CASH ON DELIVERY
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
