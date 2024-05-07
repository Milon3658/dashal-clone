import React from "react";
import { IoMdCart } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";

const SecondDrawer = () => {
  const thumb =
    "https://app.deshal.net/storage/9209/conversions/Padmaboti-1-110955-(2)_660bc2ff920f7-thumb.jpg";

  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{/* Page content here */}</div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-96 min-h-full bg-base-200 text-base-content">
            <div className="flex flex-col justify-between lg:flex lg:flex-col lg:justify-between min-h-screen">
              <div>
                <h1 className="font-bold text-lg flex justify-center uppercase mb-5">
                  Your shopping bag
                </h1>
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center">
                    <img
                      src={thumb}
                      alt="thumbnail"
                      className="w-[80px] h-[100px]"
                    />
                    <span className=" text-[16px] ms-2">
                      <p className=" mb-1">110955</p>
                      <p className=" mb-1 cursor-pointer hover:text-red-700">
                        Sharee
                      </p>
                      <p className=" mb-1">SIZE : N/A</p>
                      <p className=" mb-1">৳ 1674 X 1</p>
                    </span>
                  </div>
                  <button className="btn btn-circle btn-outline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <hr className=" bg-slate-300 h-[2px] mb-5 " />
                <div className="flex flex-row justify-around">
                  <Link to="/cart">
                    <button className="btn btn-active bg-red-700 hover:bg-red-800 text-white border-none">
                      <IoMdCart /> VIEW CART
                    </button>
                  </Link>
                  <button className="btn btn-active bg-red-700 hover:bg-red-800 text-white border-none">
                    <HiShoppingBag /> CHECKOUT NOW
                  </button>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecondDrawer;
