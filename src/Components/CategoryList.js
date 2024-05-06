import React from "react";
import { Link } from "react-router-dom";

const CategoryList = () => {
  return (
    <div>
      <div className=" cursor-pointer h-14 hidden lg:flex lg:flex-row lg:justify-center items-center text-lg">
        <Link to="/category">
          <h1 className=" mx-5 hover:text-xl hover:font-bold category-trans">
            Women
          </h1>
        </Link>
        <h1 className=" mx-5 hover:text-xl hover:font-bold category-trans">
          Men
        </h1>
        <h1 className=" mx-5 hover:text-xl hover:font-bold category-trans">
          Kid
        </h1>
        <h1 className=" mx-5 hover:text-xl hover:font-bold category-trans">
          Accessories
        </h1>
        <h1 className=" mx-5 hover:text-xl hover:font-bold category-trans">
          Home Decor
        </h1>
        <h1 className=" mx-5 text-red-500 font-semiboldv hover:text-xl hover:font-bold category-trans">
          About Us
        </h1>
        <h1 className=" mx-5 hover:text-xl hover:font-bold category-trans">
          স্ব By Deshal
        </h1>
      </div>
    </div>
  );
};

export default CategoryList;
