import React from "react";
import CartList from "../../Components/Cart/CartList";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="mb-20 min-h-screen">
      <div className=" py-4 text-xl lg:text-5xl flex flex-row justify-center items-center text-red-700 font-bold bg-[#D8DBDF]">
        <h1 className="uppercase">shopping cart</h1>
      </div>
      <CartList></CartList>
      <hr className=" bg-slate-300 h-[2px] mb-5 " />
      <div className="flex justify-end mx-0 lg:mx-10">
        <Link to="/">
          <button className="btn btn-wide bg-red-700 text-white hover:bg-red-800 border-none">
            continue shopping
          </button>
        </Link>
      </div>
      <div className=" mx-2 lg:mx-10 mt-4 lg:mt-10 flex flex-col items-center lg:flex-row lg:justify-between lg:items-start">
        <div className="mb-2">
          <p>Coupon Discount</p>
          <p>Enter your code if you have one</p>
          <div className="mt-2">
            <input
              type="text"
              className="input input-bordered w-full max-w-[200px] me-2"
            />
            <button className="btn btn-neutral">APPLY CUPON</button>
          </div>
        </div>
        <div>
          <div className="card w-[350px] lg:w-[610px] bg-[#D1D5DA]">
            <div className="card-body">
              <h2 className="card-title uppercase text-xl">cart total</h2>
              <p className="flex flex-row justify-between mb-4">
                <span>sub-total</span>
                <span>tk : 14000</span>
              </p>
              <p className="flex flex-row justify-between mb-4">
                <span>Total vat</span>
                <span>150</span>
              </p>
              <p className="flex flex-row justify-between mb-4">
                <span>Shipping & Holding</span>
                <span>100</span>
              </p>
              <p className="flex flex-row justify-between mb-4 font-bold text-xl">
                <span>Total</span>
                <span>14250</span>
              </p>
              <Link to="/checkout">
                <button className="btn btn-block bg-red-700 hover:bg-red-800 text-white">
                  CHEKCOUT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className=" bg-slate-300 h-[2px] mb-5 mt-5" />
      <h1 className="text-xl font-bold text-red-700 flex justify-center">
        HANDCRAFTED ETHNIC LUXURY CLOTHING INSPIRED BY BENGALI NOSTALGIA AND
        MYTHOLOGY
      </h1>
      <hr className=" bg-slate-300 h-[2px] mb-5 mt-5" />
    </div>
  );
};

export default Cart;
