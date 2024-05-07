import React from "react";
import CartList from "../../Components/Cart/CartList";

const Cart = () => {
  return (
    <div>
      <div className=" py-4 text-xl lg:text-5xl flex flex-row justify-center items-center text-red-700 font-bold bg-[#D8DBDF]">
        <h1 className="uppercase">shopping cart</h1>
      </div>
      <CartList></CartList>
    </div>
  );
};

export default Cart;
